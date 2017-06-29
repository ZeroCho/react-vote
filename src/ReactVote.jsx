import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreationView from './components/CreationView';
import VoteItems from './components/VoteItems';
import ResultView from './components/ResultView';

class ReactVote extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool,
    clientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.shape({
      title: PropTypes.string,
      voters: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
      items: PropTypes.arrayOf(PropTypes.object),
      closed: PropTypes.bool,
      multiple: PropTypes.bool,
      expansion: PropTypes.bool,
      autoClose: PropTypes.number,
      downvote: PropTypes.bool,
      showTotal: PropTypes.bool,
      creator: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
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
      downvoteCheckbox: PropTypes.string,
      downvoteButtonText: PropTypes.string,
      votedText: PropTypes.string,
      totalText: PropTypes.string,
      multipleCheckbox: PropTypes.string,
      expansionCheckbox: PropTypes.string,
      showTotalCheckbox: PropTypes.string,
      expansionPlaceholder: PropTypes.string,
      expansionButtonText: PropTypes.string,
      autoCloseText: PropTypes.string,
      autoClosePlaceholder: PropTypes.string,
    }),
    errorMessage: PropTypes.shape({
      notEnoughItems: PropTypes.string,
      noTitle: PropTypes.string,
    }),
    onCreate: PropTypes.func,
    onUpvote: PropTypes.func,
    onDownvote: PropTypes.func,
    onExpand: PropTypes.func,
    onReset: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    isAdmin: false,
    clientId: null,
    data: {
      items: [],
      voters: [],
      closed: false,
      multiple: false,
      expansion: false,
      showTotal: true,
      downvote: false,
      autoClose: null,
    },
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
      goBackButtonText: 'Go back',
      voteButtonText: 'Upvote',
      downvoteCheckbox: 'Allow downvote?',
      downvoteButtonText: 'Downvote',
      votedText: 'Voted',
      totalText: 'Total',
      multipleCheckbox: 'Multiple choice?',
      expansionCheckbox: 'Expandable?',
      showTotalCheckbox: 'Show total?',
      expansionPlaceholder: 'Add an option yourself',
      expansionButtonText: 'Add',
      autoCloseText: 'AutoClose number: ',
      autoClosePlaceholder: 'AutoClose number',
    },
    errorMessage: {
      notEnoughItems: 'Need at least 2 items!',
      noTitle: 'Need a title!',
    },
    styles: {},
  };

  state = {
    showResult: false,
    data: this.props.data,
    voted: (this.props.clientId && !this.props.data.multiple && this.props.data.voters && this.props.data.voters.indexOf(this.props.clientId) > -1) || false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState(() => ({
        data: nextProps.data,
      }));
    }
  }

  setData = (data) => {
    this.setState(() => ({ data }));
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
    const { onUpvote, clientId } = this.props;
    const { data } = this.state;
    const newData = Object.assign({}, data);
    const newItems = newData.items;
    const currentTotal = newItems.reduce((prev, current) => {
      if (!current.total) {
        current.total = current.count;
      }
      return prev + current.total;
    }, 0);
    newItems[idx].count += 1;
    newItems[idx].total += 1;
    newItems[idx].voted = true;
    if (!newItems[idx].voters) { // TODO: remove at v4
      newItems[idx].voters = [];
      newItems[idx].downvoters = [];
      newItems[idx].upvoters = [];
    }
    newItems[idx].voters.push(clientId);
    newItems[idx].upvoters.push(clientId);
    if (newData.voters) { // TODO: remove at v4
      if (newData.voters.indexOf(clientId) === -1) {
        newData.voters.push(clientId);
      }
    } else {
      newData.voters = [clientId];
    }
    const diff = {
      index: idx,
      item: newItems[idx],
      voter: clientId,
    };
    this.setState(() => ({ voted: true, data: newData }));
    if (onUpvote && typeof onUpvote === 'function') {
      onUpvote(newData, diff);
    }
    if (newData.autoClose) {
      const newTotal = currentTotal + 1;
      if (newTotal >= newData.autoClose) {
        return this.closeVote();
      }
    }
    return true;
  };

  downvote = (idx) => {
    const { clientId, onDownvote } = this.props;
    const { data } = this.state;
    const newData = Object.assign({}, data);
    const newItems = newData.items;
    const currentTotal = newItems.reduce((prev, current) => {
      if (!current.total) {
        current.total = current.count;
      }
      return prev + current.total;
    }, 0);
    newItems[idx].count -= 1;
    newItems[idx].total += 1;
    newItems[idx].voted = true;
    if (!newItems[idx].voters) { // TODO: remove at v4
      newItems[idx].voters = [];
      newItems[idx].downvoters = [];
      newItems[idx].upvoters = [];
    }
    newItems[idx].voters.push(clientId);
    newItems[idx].downvoters.push(clientId);
    if (newData.voters) { // TODO: remove at v4
      if (newData.voters.indexOf(clientId) === -1) {
        newData.voters.push(clientId);
      }
    } else {
      newData.voters = [clientId];
    }
    const diff = {
      index: idx,
      item: newItems[idx],
      voter: clientId,
    };
    this.setState(() => ({ voted: true, data: newData }));
    if (onDownvote && typeof onDownvote === 'function') {
      onDownvote(newData, diff);
    }
    if (newData.autoClose) {
      const newTotal = currentTotal + 1;
      if (newTotal >= newData.autoClose) {
        return this.closeVote();
      }
    }
    return true;
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
      <div id="result-view">
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
          {this.state.data.showTotal && <div className={styles.itemWrapper}>
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
          {this.props.isAdmin && <button
            className={styles.resetButton}
            onClick={this.resetVote}
          >
            {text.resetButtonText}
          </button>}
          {this.props.isAdmin && <button
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
    const { voted, data } = this.state;
    const { onCreate, errorMessage, onUpvote, onDownvote, clientId } = this.props;
    const checkVotingClosed = data.closed;
    const isVotingClosed = data.title && (checkVotingClosed || this.state.showResult);
    const canExpanded = data.expansion && (!this.state.voted || data.multiple);
    const text = Object.assign({}, ReactVote.defaultProps.text, this.props.text);
    const styles = Object.assign({}, ReactVote.defaultProps.styles, this.props.styles);
    const ongoingOrClosed = isVotingClosed
      ? (
        <ResultView
          styles={styles}
          text={text}
          onCreate=""
          errorMessage={errorMessage}
        />
      )
      : (
        <div id="vote-view">
          <div className={styles.voteTitle}>{data.title}</div>
          <VoteItems
            voted={voted}
            data={data}
            styles={styles}
            text={text}
            upvote={this.upvote}
            downvote={this.downvote}
            clientId={this.props.clientId}
            onUpvote={onUpvote}
            onDownvote={onDownvote}
          />
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
            {this.props.isAdmin && <button
              className={styles.resetButton}
              onClick={this.resetVote}
            >
              {text.resetButtonText}
            </button>}
            {this.props.isAdmin && <button
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
        {data.title
          ? ongoingOrClosed
          : <CreationView
            styles={styles}
            text={text}
            clientId={clientId}
            setData={this.setData}
            errorMessage={errorMessage}
            onCreate={onCreate}
          />}
      </div>
    );
  }
}

export default ReactVote;
