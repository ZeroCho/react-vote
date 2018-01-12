import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreationView from './components/CreationView';
import ExpansionInput from './components/ExpansionInput';
import VoteItems from './components/VoteItems';

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
      settingButton: PropTypes.string,
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
      settingButtonText: PropTypes.string,
      closeCheckbox: PropTypes.string,
      reasonCheckbox: PropTypes.string,
      reasonInputPlaceholder: PropTypes.string,
    }),
    errorMessage: PropTypes.shape({
      notEnoughItems: PropTypes.string,
      noTitle: PropTypes.string,
    }),
    onCreate: PropTypes.func,
    onEdit: PropTypes.func,
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
      title: '',
      items: [],
      voters: [],
      closed: false,
      multiple: false,
      expansion: false,
      showTotal: true,
      downvote: false,
      autoClose: undefined,
    },
    onCreate: null,
    onEdit: null,
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
      settingButtonText: 'Settings',
      editButtonText: 'Edit',
      closeCheckbox: 'Closed?',
      reasonCheckbox: 'Need reason?',
      reasonInputPlaceholder: 'Type reason why you voted this',
    },
    errorMessage: {
      notEnoughItems: 'Need at least 2 items!',
      noTitle: 'Need a title!',
    },
    styles: {},
  };

  state = {
    showResult: false,
    showSetting: false,
    data: this.props.data,
    voted: (this.props.clientId && !this.props.data.multiple && this.props.data.voters && this.props.data.voters.indexOf(this.props.clientId) > -1) || false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState(() => ({ data: nextProps.data }));
    }
  }

  setData = (data) => {
    this.setState(() => ({
      data,
      showSetting: false,
    }));
  };

  expandVote = (data, item) => {
    const { onExpand } = this.props;
    this.setState(() => ({ data }));
    if (onExpand && typeof onExpand === 'function') {
      return onExpand(data, item);
    }
    return true;
  };

  goToSetting = () => {
    this.setState(() => ({ showSetting: true }));
  };

  toggleView = () => {
    this.setState(prevState => ({ showResult: !prevState.showResult }));
  };

  closeVote = () => {
    const { onClose } = this.props;
    const { data } = this.state;
    data.closed = true;
    this.setState(() => ({ data }));
    if (onClose && typeof onClose === 'function') {
      onClose(data);
    }
  };

  resetVote = () => {
    const { onReset } = this.props;
    const { data } = this.state;
    data.voters = [];
    data.closed = false;
    data.items.forEach((item) => {
      item.count = 0;
      item.total = 0;
      item.voters = [];
      item.upvoters = [];
      item.downvoters = [];
      item.voted = null;
    });
    this.setState(() => ({ data, voted: false }));
    if (onReset && typeof onReset === 'function') {
      onReset(data);
    }
  };

  upvote = (idx, reason) => () => {
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
    }
    if (!newItems[idx].downvoters) { // TODO: remove at v4
      newItems[idx].downvoters = [];
    }
    if (!newItems[idx].upvoters) { // TODO: remove at v4
      newItems[idx].upvoters = [];
    }
    if (!newItems[idx].reasons) {
      newItems[idx].reasons = [];
    }
    newItems[idx].voters.push(clientId);
    newItems[idx].upvoters.push(clientId);
    if (newItems[idx].reason && (!reason || !reason.trim())) {
      return false;
    }
    if (reason) {
      newItems[idx].reasons.push(reason.trim());
    }
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

  downvote = (idx, reason) => () => {
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
    }
    if (!newItems[idx].downvoters) { // TODO: remove at v4
      newItems[idx].downvoters = [];
    }
    if (!newItems[idx].upvoters) { // TODO: remove at v4
      newItems[idx].upvoters = [];
    }
    if (!newItems[idx].reasons) {
      newItems[idx].reasons = [];
    }
    if (newItems[idx].reason && (!reason || !reason.trim())) {
      return false;
    }
    if (reason) {
      newItems[idx].reasons.push(reason.trim());
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

  render() {
    const { voted, data, showSetting, showResult } = this.state;
    const { onCreate, errorMessage, onUpvote, onEdit, onDownvote, clientId, isAdmin } = this.props;
    const checkVotingClosed = data.closed;
    const isVotingClosed = data.title && (checkVotingClosed || showResult);
    const canExpanded = data.expansion && (!this.state.voted || data.multiple);
    const text = Object.assign({}, ReactVote.defaultProps.text, this.props.text);
    const styles = Object.assign({}, ReactVote.defaultProps.styles, this.props.styles);
    return (
      <div className={styles.voteWrapper}>
        {data.title && !showSetting
          ? (
            <div id={isVotingClosed ? 'result-view' : 'vote-view'}>
              {isAdmin && onEdit && <button className={styles.settingButton} onClick={this.goToSetting}>{text.settingButtonText}</button>}
              <div className={styles.voteTitle}>{data.title}</div>
              <VoteItems
                voted={voted}
                data={data}
                styles={styles}
                text={text}
                upvote={this.upvote}
                downvote={this.downvote}
                clientId={clientId}
                onUpvote={onUpvote}
                onDownvote={onDownvote}
                resultView={isVotingClosed}
              />
              {canExpanded && !data.closed && <ExpansionInput
                data={data}
                clientId={clientId}
                styles={styles}
                text={text}
                expandVote={this.expandVote}
              />}
              <div className={styles.buttonWrapper}>
                {!data.closed &&
                <button
                  className={showResult ? styles.goBackButton : styles.resultButton}
                  onClick={this.toggleView}
                >
                  {showResult ? text.goBackButtonText : text.resultButtonText}
                </button>}
                {isAdmin &&
                <button
                  className={styles.resetButton}
                  onClick={this.resetVote}
                >
                  {text.resetButtonText}
                </button>}
                {isAdmin && !data.closed &&
                <button
                  className={styles.closeButton}
                  onClick={this.closeVote}
                >
                  {text.closeButtonText}
                </button>}
              </div>
            </div>
          )
          : <CreationView
            styles={styles}
            text={text}
            clientId={clientId}
            setData={this.setData}
            data={data}
            errorMessage={errorMessage}
            onCreate={onCreate}
            onEdit={onEdit}
            setting={showSetting}
          />}
      </div>
    );
  }
}

export default ReactVote;
