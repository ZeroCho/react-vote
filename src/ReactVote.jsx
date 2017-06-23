import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      autoClose: PropTypes.number,
    }),
    downvote: PropTypes.bool,
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
      voteButtons: PropTypes.string,
      voteButton: PropTypes.string,
      downvoteButton: PropTypes.string,
      closeButton: PropTypes.string,
      resetButton: PropTypes.string,
      errorMessage: PropTypes.string,
      votedText: PropTypes.string,
      expansionButton: PropTypes.string,
      expansionInput: PropTypes.string,
    }),
    onCreate: PropTypes.func,
    onUpvote: PropTypes.func,
    onDownvote: PropTypes.func,
    onExpand: PropTypes.func,
    onReset: PropTypes.func,
    onClose: PropTypes.func,
    text: PropTypes.shape({
      titleInputPlaceholder: PropTypes.string,
      addInputPlaceholder: PropTypes.string,
      addButtonText: PropTypes.string,
      removeButtonText: PropTypes.string,
      closeButtonText: PropTypes.string,
      resetButtonText: PropTypes.string,
      createButtonText: PropTypes.string,
      resultButtonText: PropTypes.string,
      goBackButtonText: PropTypes.string,
      voteButtonText: PropTypes.string,
      downvoteButtonText: PropTypes.string,
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
    downvote: false,
    data: null,
    autoClose: null,
    onCreate: null,
    onUpvote: null,
    onDownvote: null,
    onExpand: null,
    onClose: null,
    onReset: null,
    text: {
      addButtonText: 'Add',
      titleInputPlaceholder: 'Title of this vote',
      addInputPlaceholder: 'Title of a new option',
      removeButtonText: '×',
      closeButtonText: 'Close vote',
      resetButtonText: 'Reset vote',
      createButtonText: 'Create',
      resultButtonText: 'Show result',
      goBackButtonText: 'Go back to vote',
      voteButtonText: 'Upvote',
      downvoteButtonText: 'Downvote',
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState(() => ({
        data: nextProps.data,
        items: nextProps.data.items,
        isAdmin: nextProps.isAdmin,
        autoClose: nextProps.autoClose,
        multiple: nextProps.multiple,
        expansion: nextProps.expansion,
      }));
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

  onAutoCloseChange = (e) => {
    const autoCloseNumber = e.target.value.trim();
    this.setState(() => ({ autoCloseNumber }));
  };

  onExpansionInputChange = (e) => {
    const expansionInput = e.target.value.trim();
    this.setState(() => ({ expansionInput }));
  };

  addItem = () => {
    const title = this.state.addInput;
    const items = this.state.items;
    if (!title) return;
    items.push({ title, count: 0, total: 0, voters: [] });
    this.setState(() => ({ items, addInput: '' }));
  };

  removeItem = (target) => {
    let items = this.state.items;
    items = items.filter((item, index) => index !== target);
    this.setState(() => ({ items }));
  };

  createVote = () => {
    const { onCreate, errorMessage: { noTitle, notEnoughItems } } = this.props;
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
    if (!title) {
      return this.setState(() => ({ showMessage: true, errorMessage: noTitle }));
    }
    if (!data.expansion && data.items.length < 2) {
      return this.setState(() => ({ showMessage: true, errorMessage: notEnoughItems }));
    }
    this.setState(() => ({ data, showMessage: false, multiple, expansion, autoClose, items }));
    if (onCreate && typeof onCreate === 'function') {
      return onCreate(data.title, data);
    }
    return true;
  };

  expandVote = () => {
    const { onExpand } = this.props;
    const title = this.state.expansionInput;
    if (!title) {
      return false;
    }
    const data = this.state.data;
    const item = {
      title,
      count: 0,
      total: 0,
      voters: [],
      upvoters: [],
      downvoters: [],
      adder: this.props.clientId,
    };
    data.items.push(item);
    this.setState(() => ({ data, items: data.items, expansionInput: '' }));
    if (onExpand && typeof onExpand === 'function') {
      return onExpand(data.title, item, data);
    }
    return true;
  };

  toggleView = () => {
    this.setState(prevState => ({ showResult: !prevState.showResult }));
  };

  closeVote = () => {
    const { onClose } = this.props;
    const data = this.state.data;
    data.closed = true;
    this.setState(() => ({ data }));
    if (onClose && typeof onClose === 'function') {
      onClose(data.title, data);
    }
  };

  resetVote = () => {
    const { onReset } = this.props;
    const data = this.state.data;
    data.voters = [];
    data.items.forEach((item) => {
      item.count = 0;
      item.total = 0;
      item.voters = [];
      item.upvoters = [];
      item.downvoters = [];
      item.voted = null;
    });
    console.log(data);
    this.setState(() => ({ data, voted: false }));
    if (onReset && typeof onReset === 'function') {
      onReset(data.title, data);
    }
  };

  upvote = (idx) => {
    const { items, data, autoClose } = this.state;
    const { onUpvote } = this.props;
    const currentTotal = items.reduce((prev, current) => {
      if (!current.total) {
        current.total = current.count;
      }
      return prev + current.total;
    }, 0);
    items[idx].count += 1;
    items[idx].total += 1;
    items[idx].voted = true;
    const clientId = this.props.clientId;
    if (!items[idx].voters) {
      items[idx].voters = [];
      items[idx].downvoters = [];
      items[idx].upvoters = [];
    }
    items[idx].voters.push(clientId);
    items[idx].upvoters.push(clientId);
    data.items = items;
    if (data.voters) {
      if (data.voters.indexOf(clientId) === -1) {
        data.voters.push(clientId);
      }
    } else {
      data.voters = [clientId];
    }
    const diff = {
      index: idx,
      item: items[idx],
      voter: clientId,
    };
    this.setState(() => ({ voted: true, items, data }));
    if (onUpvote && typeof onUpvote === 'function') {
      onUpvote(data.title, diff, data);
    }
    if (autoClose) {
      const newTotal = currentTotal + 1;
      if (newTotal >= autoClose) {
        return this.closeVote();
      }
    }
    return true;
  };

  downvote = (idx) => {
    const { items, data, autoClose } = this.state;
    const { onDownvote } = this.props;
    const currentTotal = items.reduce((prev, current) => {
      if (!current.total) {
        current.total = current.count;
      }
      return prev + current.total;
    }, 0);
    items[idx].count -= 1;
    items[idx].total += 1;
    items[idx].voted = true;
    const clientId = this.props.clientId;
    if (!items[idx].voters) {
      items[idx].voters = [];
      items[idx].downvoters = [];
      items[idx].upvoters = [];
    }
    items[idx].voters.push(clientId);
    items[idx].downvoters.push(clientId);
    data.items = items;
    if (data.voters) {
      if (data.voters.indexOf(clientId) === -1) {
        data.voters.push(clientId);
      }
    } else {
      data.voters = [clientId];
    }
    const diff = {
      index: idx,
      item: items[idx],
      voter: clientId,
    };
    this.setState(() => ({ voted: true, items, data }));
    if (onDownvote && typeof onDownvote === 'function') {
      onDownvote(data.title, diff, data);
    }
    if (autoClose) {
      const newTotal = currentTotal + 1;
      if (newTotal >= autoClose) {
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
    const { clientId, downvote } = this.props;
    const styles = Object.assign({}, ReactVote.defaultProps.styles, this.props.styles);
    const text = Object.assign({}, ReactVote.defaultProps.text, this.props.text);
    const canVote = (this.state.multiple || !this.state.voted);
    return (
      <div>
        {items.map((item, i) => {
          const isAlreadyVoted = (clientId && item.voters && item.voters.indexOf(clientId) > -1);
          const checkVoted = item.voted || isAlreadyVoted
            ? <span className={styles.votedText}>{text.votedText}</span>
            : canVote
            && (
              <span className={styles.voteButtons}>
                <button
                  onClick={() => this.upvote(i)}
                  className={styles.voteButton}
                >
                  {text.voteButtonText}
                </button>
                {downvote && <button
                  onClick={() => this.downvote(i)}
                  className={styles.downvoteButton}
                >
                  {text.downvoteButtonText}
                </button>}
              </span>
            );
          const key = `react-vote-item-${i}`;
          return (
            <div key={key} className={styles.itemWrapper}>
              <div className={styles.itemTitle} title={item.title}>
                {item.title}
              </div>
              {this.state.data.title
                ? checkVoted
                : (
                  <button
                    onClick={() => this.removeItem(i)}
                    className={styles.removeButton}
                  >
                    {text.removeButtonText}
                  </button>
                )}
            </div>
          );
        })}
      </div>
    );
  };

  renderResult = (items) => {
    const total = items.reduce((prev, current) => prev + current.count, 0);
    const styles = Object.assign({}, ReactVote.defaultProps.styles, this.props.styles);
    const text = Object.assign({}, ReactVote.defaultProps.text, this.props.text);
    const wholeTotal = items.reduce((prev, current) => {
      if (!current.total) {
        current.total = current.count;
      }
      return prev + current.total;
    }, 0);
    const realTotal = total === wholeTotal ? '' : `(${wholeTotal})`;
    return (
      <div>
        <div className={styles.voteTitle}>{this.state.data.title}</div>
        <div>
          {items.map((item, i) => {
            const percentage = total === 0 ? 0 : ((item.count / total) * 100).toFixed(2);
            const key = `react-vote-result-${i}`;
            return (
              <div key={key} className={styles.itemWrapper}>
                <div
                  className={styles.itemTitle}
                  title={item.title}
                >
                  {item.title}
                </div>
                <div className={styles.itemCount}>{`${item.count}(${percentage}%)`}</div>
              </div>
            );
          })}
          {this.state.total && <div className={styles.itemWrapper}>
            <div className={styles.itemTitle}>{text.totalText}</div>
            <div className={styles.itemCount}>{total}{realTotal}</div>
          </div>}
        </div>
        {!this.state.data.closed &&
        <div className={styles.buttonWrapper}>
          <button
            className={styles.goBackButton}
            onClick={this.toggleView}
          >
            {text.goBackButtonText}
          </button>
          {this.state.isAdmin && <button
            className={styles.resetButton}
            onClick={this.resetVote}
          >
            {text.resetButtonText}
          </button>}
          {this.state.isAdmin && <button
            className={styles.closeButton}
            onClick={this.closeVote}
          >
            {text.closeButtonText}
          </button>}
        </div>}
      </div>
    );
  };

  render() {
    const checkVotingClosed = this.state.data.closed;
    const isVotingClosed = this.state.data.title && (checkVotingClosed || this.state.showResult);
    const canExpanded = this.state.expansion && (!this.state.voted || this.state.multiple);
    const text = Object.assign({}, ReactVote.defaultProps.text, this.props.text);
    const styles = Object.assign({}, ReactVote.defaultProps.styles, this.props.styles);
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
              onClick={this.toggleView}
            >
              {text.resultButtonText}
            </button>
            {this.state.isAdmin && <button
              className={styles.resetButton}
              onClick={this.resetVote}
            >
              {text.resetButtonText}
            </button>}
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
