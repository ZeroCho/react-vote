import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: export only changed data
class ReactVote extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool,
    total: PropTypes.bool,
    multiple: PropTypes.bool,
    clientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
      voters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      items: PropTypes.arrayOf(PropTypes.object).isRequired,
      closed: PropTypes.bool,
    }),
    autoClose: PropTypes.number,
    expansion: PropTypes.bool,
    styles: PropTypes.shape({
      voteWrapper: PropTypes.string,
      voteTitle: PropTypes.string,
      titleInput: PropTypes.string,
      addWrapper: PropTypes.string,
      addInput: PropTypes.string,
      addButton: PropTypes.string,
      itemTitle: PropTypes.string,
      itemCount: PropTypes.string,
      itemWrapper: PropTypes.string,
      buttonWrapper: PropTypes.string,
      removeButton: PropTypes.string,
      createButton: PropTypes.string,
      resultButton: PropTypes.string,
      goBackButton: PropTypes.string,
      voteButton: PropTypes.string,
      closeButton: PropTypes.string,
      errorMessage: PropTypes.string,
      votedText: PropTypes.string,
      expansionButton: PropTypes.string,
      expansionInput: PropTypes.string,
    }),
    getData: PropTypes.func, // TODO: deprecate it
    onCreate: PropTypes.func,
    onUpvote: PropTypes.func,
    onExpand: PropTypes.func,
    onClose: PropTypes.func,
    text: PropTypes.shape({
      titleInputPlaceholder: PropTypes.string,
      addInputPlaceholder: PropTypes.string,
      addButtonText: PropTypes.string,
      removeButtonText: PropTypes.string,
      closeButtonText: PropTypes.string,
      createButtonText: PropTypes.string,
      resultButtonText: PropTypes.string,
      goBackButtonText: PropTypes.string,
      voteButtonText: PropTypes.string,
      votedText: PropTypes.string,
      totalText: PropTypes.string,
      multipleCheckbox: PropTypes.string,
      expansionCheckbox: PropTypes.string,
      expansionPlaceholder: PropTypes.string,
      expansionButtonText: PropTypes.string,
      autoCloseText: PropTypes.string,
      autoClosePlaceholder: PropTypes.string,
    }),
    errorMessage: PropTypes.shape({
      notEnoughItems: PropTypes.string,
      noTitle: PropTypes.string,
    }),
  };

  static defaultProps = {
    isAdmin: false,
    multiple: false,
    total: true,
    expansion: false,
    voted: false,
    clientId: null,
    data: null,
    autoClose: null,
    getData: null, // TODO: deprecate it
    onCreate: null,
    onUpvote: null,
    onExpand: null,
    onClose: null,
    text: {
      addButtonText: 'Add',
      titleInputPlaceholder: 'Title of this vote',
      addInputPlaceholder: 'Type title of new option here',
      removeButtonText: '×',
      closeButtonText: 'Close vote',
      createButtonText: 'Create',
      resultButtonText: 'Show result',
      goBackButtonText: 'Go back to vote',
      voteButtonText: 'Upvote',
      votedText: 'Voted',
      totalText: 'Total',
      multipleCheckbox: 'Multiple choice?',
      expansionCheckbox: 'Expandable?',
      expansionPlaceholder: 'Add an option yourself',
      expansionButtonText: 'Add',
      autoCloseText: 'AutoClose number: ',
      autoClosePlaceholder: 'type autoClose number',
    },
    errorMessage: {
      notEnoughItems: 'Need at least 2 item!',
      noTitle: 'Need a title!',
    },
    styles: {},
  };

  // TODO: check the case when is multiple and voted every options
  state = {
    showResult: false,
    items: this.props.data ? this.props.data.items : [],
    data: {
      ...this.props.data,
      title: this.props.data && this.props.data.title,
      items: this.props.data && this.props.data.items,
      voters: (this.props.data && this.props.data.voters) || [],
      closed: (this.props.data && this.props.data.closed) || false,
    },
    isAdmin: this.props.isAdmin,
    total: this.props.total,
    expansion: this.props.expansion,
    voted: (this.props.clientId && !this.props.multiple && this.props.data.voters && this.props.data.voters.indexOf(this.props.clientId) > -1) || false,
    multiple: this.props.multiple,
    showMessage: false,
    errorMessage: false,
    autoClose: this.props.autoClose,
    voteTitle: '',
    addInput: '',
    autoCloseNumber: null,
    multipleCheck: false,
    expansionCheck: false,
    expansionInput: '',
  };

  componentWillMount() {
    if (this.props.getData) {
      console.error('props getData is deprecated. Please use onCreate, onUpvote, onClose, onExpand instead. getData will be deleted next update and it will break your application');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({ data: nextProps.data, items: nextProps.data.items, isAdmin: nextProps.isAdmin });
    }
  }

  onVoteTitleChange = (e) => {
    this.setState({ voteTitle: e.target.value });
  };

  onAddInputChange = (e) => {
    this.setState({ addInput: e.target.value });
  };

  onMultipleCheckChange = (e) => {
    this.setState({ multipleCheck: e.target.checked });
  };

  onExpansionCheckChange = (e) => {
    this.setState({ expansionCheck: e.target.checked });
  };

  onAutoCloseChange = (e) => {
    this.setState({ autoCloseNumber: e.target.value });
  };

  onExpansionInputChange = (e) => {
    this.setState({ expansionInput: e.target.value });
  };

  addItem = () => {
    const title = this.state.addInput;
    const items = this.state.items;
    if (!title || !title.trim()) return;
    items.push({ title, count: 0 });
    this.setState({ items, addInput: '' });
  };

  removeItem = (target) => {
    let items = this.state.items;
    items = items.filter((item, index) => index !== target);
    this.setState({ items });
  };

  createVote = () => {
    const { onCreate, getData, errorMessage: { noTitle, notEnoughItems } } = this.props;
    const items = this.state.items;
    const title = this.state.voteTitle;
    const multiple = this.state.multipleCheck;
    const expansion = this.state.expansionCheck;
    const autoClose = this.state.autoCloseNumber ? parseInt(this.state.autoCloseNumber, 10) : false;
    const data = {
      title,
      items,
      multiple,
      expansion,
      closed: false,
    };
    if (autoClose && !Number.isNaN(autoClose)) {
      data.autoClose = autoClose;
    }
    if (!title || !title.trim()) {
      return this.setState({ showMessage: true, errorMessage: noTitle });
    }
    if (!data.expansion && data.items.length < 2) {
      return this.setState({ showMessage: true, errorMessage: notEnoughItems });
    }
    this.setState({ data, showMessage: false, multiple, expansion, autoClose, items });
    if (getData && typeof getData === 'function') { // TODO: deprecate it
      getData(data);
    }
    if (onCreate && typeof onCreate === 'function') {
      return onCreate(data.title, data);
    }
    return true;
  };

  expandVote = () => {
    const { onExpand, getData } = this.props;
    const title = this.state.expansionInput;
    if (!title || !title.trim()) {
      return false;
    }
    const data = this.state.data;
    const item = {
      title,
      count: 0,
      voters: [],
    };
    data.items.push(item);
    this.setState({ data, items: data.items, expansionInput: '' });
    if (getData && typeof getData === 'function') { // TODO: deprecate it
      getData(data);
    }
    if (onExpand && typeof onExpand === 'function') {
      return onExpand(data.title, item, data);
    }
    return true;
  };

  showResult = () => {
    this.setState({ showResult: true });
  };

  showVoting = () => {
    this.setState({ showResult: false });
  };

  closeVote = () => {
    const { getData, onClose } = this.props;
    const data = this.state.data;
    data.closed = true;
    this.setState({ data });
    if (getData && typeof getData === 'function') { // TODO: deprecate it
      getData(data);
    }
    if (onClose && typeof onClose === 'function') {
      onClose(data.title, data);
    }
  };

  upvote = (idx) => {
    const { items, data, autoClose } = this.state;
    const { getData, onUpvote } = this.props;
    const currentTotal = items.reduce((prev, current) => prev + current.count, 0);
    items[idx].count += 1;
    items[idx].voted = true;
    const clientId = this.props.clientId;
    if (!items[idx].voters) {
      items[idx].voters = [];
    }
    items[idx].voters.push(clientId);
    data.items = items;
    if (data.voters) {
      if (data.voters.indexOf(clientId) === -1) {
        data.voters.push(clientId);
      }
    } else {
      data.voters = [clientId];
    }
    this.setState({ voted: true, items, data });
    if (getData && typeof getData === 'function') { // TODO: deprecate it
      getData(data, items[idx].title);
    }
    if (onUpvote && typeof onUpvote === 'function') {
      onUpvote(data.title, idx, data);
    }
    if (autoClose) {
      if (currentTotal + 1 >= autoClose) {
        return this.closeVote();
      }
    }
    return true;
  };

  renderCreationView() {
    const { styles, text } = this.props;
    return (
      <div>
        <input
          className={styles.titleInput}
          value={this.state.voteTitle}
          onChange={this.onVoteTitleChange}
          placeholder={text.titleInputPlaceholder}
        />
        <div className={styles.addWrapper}>
          {this.renderItems(this.state.items)}
          <div>
            <input
              className={styles.addInput}
              value={this.state.addInput}
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
                checked={this.state.multipleCheck}
                onChange={this.onMultipleCheckChange}
              />
            </label>&nbsp;
            <label htmlFor="expansion">{text.expansionCheckbox}
              <input
                id="expansion"
                type="checkbox"
                checked={this.state.expansionCheck}
                onChange={this.onExpansionCheckChange}
              />
            </label>&nbsp;
            <label htmlFor="autoClose">{text.autoCloseText}
              <input
                id="autoClose"
                value={this.state.autoClose}
                onChange={this.onAutoCloseChange}
                placeholder={text.autoClosePlaceholder}
              />
            </label>
          </div>
        </div>
        {this.state.showMessage &&
        <div className={styles.errorMessage}>{this.state.errorMessage}</div>}
        <div className={styles.buttonWrapper}>
          <button className={styles.createButton} onClick={this.createVote}>
            {text.createButtonText}
          </button>
        </div>
      </div>
    );
  }

  renderItems = (items) => {
    let i = 0;
    return (
      <div>
        {items.map((item) => {
          const j = i;
          const { styles, text, clientId } = this.props;
          const isAlreadyVoted = (clientId && item.voters && item.voters.indexOf(clientId) > -1);
          const checkVoted = item.voted || isAlreadyVoted
            ? <span className={styles.votedText}>{text.votedText}</span>
            : (this.state.multiple || !this.state.voted)
            && <button
              onClick={() => this.upvote(j)}
              className={styles.voteButton}
            >
              {text.voteButtonText}
            </button>;
          const itemComponent = (
            <div key={`react-vote-item-${j}`} className={styles.itemWrapper}>
              <div className={styles.itemTitle} title={item.title}>
                {item.title}
              </div>
              {this.state.data.title
                ? checkVoted
                : (
                  <button
                    onClick={() => this.removeItem(j)}
                    className={styles.removeButton}
                  >
                    {text.removeButtonText}
                  </button>
                )}
            </div>
          );
          i += 1;
          return itemComponent;
        })}
      </div>
    );
  };

  renderResult = (items) => {
    let i = 0;
    const total = items.reduce((prev, current) => prev + current.count, 0);
    const styles = this.props.styles;
    const isAlreadyVoted = (this.props.clientId && !this.state.multiple && this.state.data.voters.indexOf(this.props.clientId) > -1);
    const text = this.props.text;
    return (
      <div>
        <div className={styles.voteTitle}>{this.state.data.title}</div>
        <div>
          {items.map((item) => {
            const percentage = total === 0 ? 0 : ((item.count / total) * 100).toFixed(2);
            const itemComponent = (
              <div key={`react-vote-result-${i}`} className={styles.itemWrapper}>
                <div
                  className={styles.itemTitle}
                  title={item.title}
                >
                  {item.title}
                </div>
                <div className={styles.itemCount}>{`${item.count}(${percentage}%)`}</div>
              </div>
            );
            i += 1;
            return itemComponent;
          })}
          {this.state.total && <div className={styles.itemWrapper}>
            <div className={styles.itemTitle}>{text.totalText}</div>
            <div className={styles.itemCount}>{total}</div>
          </div>}
        </div>
        {!this.state.data.closed && !isAlreadyVoted &&
        <div className={styles.buttonWrapper}>
          <button
            className={styles.goBackButton}
            onClick={this.showVoting}
          >
            {text.goBackButtonText}
          </button>
        </div>}
      </div>
    );
  };

  render() {
    const { styles, text, clientId } = this.props;
    const isAlreadyVoted = (clientId && !this.state.multiple && this.state.data.voters.indexOf(clientId) > -1);
    const checkVotingClosed = this.state.data.closed;
    const isVotingClosed = this.state.data.title && (checkVotingClosed || this.state.showResult || isAlreadyVoted);
    const canExpanded = this.state.expansion && (!this.state.voted || this.state.multiple);
    const ongoingOnClosed = isVotingClosed
      ? this.renderResult(this.state.items)
      : (
        <div>
          <div className={styles.voteTitle}>{this.state.data.title}</div>
          {this.renderItems(this.state.items)}
          {canExpanded &&
          <div className={styles.itemWrapper}>
            <input
              className={styles.expansionInput}
              value={this.state.expansionInput}
              onChange={this.onExpansionInputChange}
              placeholder={text.expansionPlaceholder}
            />
            <button
              className={styles.expansionButton}
              onClick={this.expandVote}
            >
              {text.expansionButtonText}
            </button>
          </div>}
          <div className={styles.buttonWrapper}>
            <button
              className={styles.resultButton}
              onClick={this.showResult}
            >
              {text.resultButtonText}
            </button>
            {this.state.isAdmin && <button
              className={styles.closeButton}
              onClick={this.closeVote}
            >
              {text.closeButtonText}
            </button>}
          </div>
        </div>
      );
    return (
      <div className={styles.voteWrapper}>
        {this.state.data.title ? ongoingOnClosed : this.renderCreationView()}
      </div>
    );
  }
}

export default ReactVote;
