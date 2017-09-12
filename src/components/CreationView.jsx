import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreationItems from './CreationItems';

class CreationView extends Component {
  static propTypes = {
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
    onCreate: PropTypes.func,
    onEdit: PropTypes.func,
    setData: PropTypes.func.isRequired,
    errorMessage: PropTypes.objectOf(PropTypes.any).isRequired,
    clientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.objectOf(PropTypes.any),
    setting: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    clientId: null,
    data: null,
    onEdit: null,
    onCreate: null,
  };

  state = {
    addInput: '',
    voteTitle: this.props.data ? this.props.data.title : '',
    items: this.props.data ? this.props.data.items : [],
    multipleCheck: this.props.data ? this.props.data.multiple : false,
    expansionCheck: this.props.data ? this.props.data.expansion : false,
    downvoteCheck: this.props.data ? this.props.data.downvote : false,
    autoCloseNumber: this.props.data ? this.props.data.autoClose : '',
    showTotalCheck: this.props.data ? this.props.data.showTotal : true,
    closeCheck: this.props.data ? this.props.data.closed : false,
    errorMessage: false,
    showMessage: null,
    reasonCheck: false,
  };

  componentDidMount() {
    const { onCreate } = this.props;
    if (!onCreate || typeof onCreate !== 'function') {
      console.warn('onCreated is required for creating new vote');
    }
  }

  onVoteTitleChange = (e) => {
    const voteTitle = e.target.value;
    this.setState(() => ({ voteTitle }));
  };

  onAddInputChange = (e) => {
    const addInput = e.target.value;
    this.setState(() => ({ addInput }));
  };

  onCloseCheckChange = (e) => {
    const closeCheck = e.target.checked;
    this.setState(() => ({ closeCheck }));
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

  onReasonChange = (e) => {
    const reasonCheck = e.target.checked;
    this.setState(() => ({ reasonCheck }));
  };

  onRemoveItem = (target) => {
    let items = this.state.items;
    items = items.filter((item, index) => index !== target);
    this.setState(() => ({ items }));
  };

  addItem = () => {
    const { addInput, items, reasonCheck } = this.state;
    if (!addInput || !addInput.trim()) return;
    items.push({
      title: addInput.trim(),
      count: 0,
      total: 0,
      voters: [],
      upvoters: [],
      downvoters: [],
      reason: reasonCheck,
    });
    this.setState(() => ({ items, addInput: '', reasonCheck: false }));
  };

  editVote = () => {
    const { errorMessage: { noTitle, notEnoughItems }, data, setData, onEdit } = this.props;
    const items = this.state.items;
    const title = this.state.voteTitle.trim();
    const downvote = this.state.downvoteCheck;
    const multiple = this.state.multipleCheck;
    const closed = this.state.closeCheck;
    const expansion = this.state.expansionCheck;
    const showTotal = this.state.showTotalCheck;
    const autoClose = this.state.autoCloseNumber ? parseInt(this.state.autoCloseNumber, 10) : false;
    const editData = {
      ...data,
      title,
      voters: [],
      items,
      closed,
      multiple,
      expansion,
      autoClose: !Number.isNaN(autoClose) && autoClose,
      downvote,
      showTotal,
    };
    if (!title) {
      return this.setState(() => ({ showMessage: true, errorMessage: noTitle }));
    }
    if (!editData.expansion && editData.items.length < 2) {
      return this.setState(() => ({ showMessage: true, errorMessage: notEnoughItems }));
    }
    this.setState(() => ({ showMessage: false }));
    setData(editData);
    if (!onEdit) {
      return console.warn('Provide onEdit prop as a callback function to save edited vote data');
    }
    return onEdit && typeof onEdit === 'function' && onEdit(editData);
  };

  createVote = () => {
    const { onCreate, errorMessage: { noTitle, notEnoughItems }, setData, clientId } = this.props;
    const items = this.state.items;
    const title = this.state.voteTitle;
    const closed = this.state.closeCheck;
    const downvote = this.state.downvoteCheck;
    const multiple = this.state.multipleCheck;
    const expansion = this.state.expansionCheck;
    const showTotal = this.state.showTotalCheck;
    const autoClose = this.state.autoCloseNumber ? parseInt(this.state.autoCloseNumber, 10) : false;
    if (!title || !title.trim()) {
      return this.setState(() => ({ showMessage: true, errorMessage: noTitle }));
    }
    const data = {
      title: title.trim(),
      voters: [],
      items,
      closed,
      multiple,
      expansion,
      autoClose: !Number.isNaN(autoClose) && autoClose,
      downvote,
      showTotal,
      creator: clientId,
    };
    if (!data.expansion && data.items.length < 2) {
      return this.setState(() => ({ showMessage: true, errorMessage: notEnoughItems }));
    }
    this.setState(() => ({ showMessage: false }));
    setData(data);
    if (!onCreate) {
      return console.warn('Provide onCreate prop as a callback function to save new vote data');
    }
    return onCreate && typeof onCreate === 'function' && onCreate(data);
  };

  render() {
    const { styles, text, setting } = this.props;
    const { voteTitle, items, downvoteCheck, showTotalCheck, addInput, multipleCheck, expansionCheck, autoCloseNumber, errorMessage, showMessage, closeCheck, reasonCheck } = this.state;
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
            <label htmlFor="reason">
              {text.reasonCheckbox}
              <input id="reason" type="checkbox" checked={reasonCheck} onChange={this.onReasonChange} />
            </label>
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
          <div>
            <label htmlFor="closed">{text.closeCheckbox}
              <input
                id="closed"
                type="checkbox"
                checked={closeCheck}
                onChange={this.onCloseCheckChange}
              />
            </label>
          </div>
        </div>
        {showMessage &&
        <div className={styles.errorMessage}>{errorMessage}</div>}
        <div className={styles.buttonWrapper}>
          <button className={styles.createButton} onClick={setting ? this.editVote : this.createVote}>
            {setting ? text.editButtonText : text.createButtonText}
          </button>
        </div>
      </div>
    );
  }
}

export default CreationView;
