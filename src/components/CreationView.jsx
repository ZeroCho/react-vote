import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreationItems from './CreationItems';

class CreationView extends Component {
  static propTypes = {
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
    onCreate: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
    errorMessage: PropTypes.objectOf(PropTypes.any).isRequired,
    clientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };

  static defaultProps = {
    clientId: null,
  };

  state = {
    voteTitle: '',
    items: [],
    addInput: '',
    multipleCheck: false,
    expansionCheck: false,
    downvoteCheck: false,
    autoCloseNumber: '',
    errorMessage: false,
    showTotalCheck: true,
    showMessage: null,
  };

  componentDidMount() {
    const { onCreate } = this.props;
    if (!onCreate || typeof onCreate !== 'function') {
      console.warn('onCreated is required for creating new vote');
    }
  }

  onVoteTitleChange = (e) => {
    const voteTitle = e.target.value.trim();
    this.setState(() => ({ voteTitle }));
  };

  onAddInputChange = (e) => {
    const addInput = e.target.value.trim();
    this.setState(() => ({ addInput }));
  };

  onMultipleCheckChange = (e) => {
    const multipleCheck = e.target.checked;
    this.setState(() => ({ multipleCheck }));
  };

  onExpansionCheckChange = (e) => {
    const expansionCheck = e.target.checked;
    this.setState(() => ({ expansionCheck }));
  };

  onDownvoteCheckChange = (e) => {
    const downvoteCheck = e.target.checked;
    this.setState(() => ({ downvoteCheck }));
  };

  onShowTotalCheckChange = (e) => {
    const showTotalCheck = e.target.checked;
    this.setState(() => ({ showTotalCheck }));
  };

  onAutoCloseChange = (e) => {
    const autoCloseNumber = e.target.value.trim();
    this.setState(() => ({ autoCloseNumber }));
  };

  onRemoveItem = (target) => {
    let items = this.state.items;
    items = items.filter((item, index) => index !== target);
    this.setState(() => ({ items }));
  };

  addItem = () => {
    const { addInput, items } = this.state;
    if (!addInput) return;
    items.push({ title: addInput, count: 0, total: 0, voters: [], upvoters: [], downvoters: [] });
    this.setState(() => ({ items, addInput: '' }));
  };

  createVote = () => {
    const { onCreate, errorMessage: { noTitle, notEnoughItems }, setData, clientId } = this.props;
    const items = this.state.items;
    const title = this.state.voteTitle;
    const downvote = this.state.downvoteCheck;
    const multiple = this.state.multipleCheck;
    const expansion = this.state.expansionCheck;
    const showTotal = this.state.showTotalCheck;
    const autoClose = this.state.autoCloseNumber ? parseInt(this.state.autoCloseNumber, 10) : false;
    const data = {
      title,
      voters: [],
      items,
      closed: false,
      multiple,
      expansion,
      autoClose: !Number.isNaN(autoClose) && autoClose,
      downvote,
      showTotal,
      creator: clientId,
    };

    if (!title) {
      return this.setState(() => ({ showMessage: true, errorMessage: noTitle }));
    }
    if (!data.expansion && data.items.length < 2) {
      return this.setState(() => ({ showMessage: true, errorMessage: notEnoughItems }));
    }
    this.setState(() => ({ showMessage: false }));
    setData(data);
    return onCreate && typeof onCreate === 'function' && onCreate(data);
  };

  render() {
    const { styles, text } = this.props;
    const { voteTitle, items, downvoteCheck, showTotalCheck, addInput, multipleCheck, expansionCheck, autoCloseNumber, errorMessage, showMessage } = this.state;
    return (
      <div id="creation-view">
        <input
          className={styles.titleInput}
          value={voteTitle}
          onChange={this.onVoteTitleChange}
          placeholder={text.titleInputPlaceholder}
        />
        <div className={styles.addWrapper}>
          <CreationItems
            onRemove={this.onRemoveItem}
            items={items}
            styles={styles}
            text={text}
          />
          <div>
            <input
              className={styles.addInput}
              value={addInput}
              onChange={this.onAddInputChange}
              placeholder={text.addInputPlaceholder}
            />
            <button
              className={styles.addButton}
              onClick={this.addItem}
            >
              {text.addButtonText}
            </button>
          </div>
          <div>
            <label htmlFor="multiple">{text.multipleCheckbox}
              <input
                id="multiple"
                type="checkbox"
                checked={multipleCheck}
                onChange={this.onMultipleCheckChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="expansion">{text.expansionCheckbox}
              <input
                id="expansion"
                type="checkbox"
                checked={expansionCheck}
                onChange={this.onExpansionCheckChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="autoClose">{text.autoCloseText}
              <input
                id="autoClose"
                value={autoCloseNumber}
                onChange={this.onAutoCloseChange}
                placeholder={text.autoClosePlaceholder}
              />
            </label>
          </div>
          <div>
            <label htmlFor="downvote">{text.downvoteCheckbox}
              <input
                id="downvote"
                type="checkbox"
                checked={downvoteCheck}
                onChange={this.onDownvoteCheckChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="showTotal">{text.showTotalCheckbox}
              <input
                id="showTotal"
                type="checkbox"
                checked={showTotalCheck}
                onChange={this.onShowTotalCheckChange}
              />
            </label>
          </div>
        </div>
        {showMessage &&
        <div className={styles.errorMessage}>{errorMessage}</div>}
        <div className={styles.buttonWrapper}>
          <button className={styles.createButton} onClick={this.createVote}>
            {text.createButtonText}
          </button>
        </div>
      </div>
    );
  }
}

export default CreationView;
