import React, { Component, PropTypes } from 'react';

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
      done: PropTypes.bool,
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
    getData: PropTypes.func,
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
      multipleCheckbox: 'multiple?',
      expansionCheckbox: 'expansion?',
      expansionPlaceholder: 'Add an option yourself',
      expansionButtonText: 'Add',
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
      done: (this.props.data && this.props.data.done) || false,
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
  };

  componentWillMount() {
    if (this.props.data && this.props.data.done) {
      console.error('data.done is deprecated. Please use data.closed instead. data.done prop will be deleted next update and it will break your application');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({ data: nextProps.data, items: nextProps.data.items, isAdmin: nextProps.isAdmin });
    }
  }

  addItem = () => {
    const title = this.addInput.value;
    const items = this.state.items;
    if (!title || !title.trim()) return;
    items.push({ title, count: 0 });
    this.setState({ items });
    this.addInput.value = '';
  };

  removeItem = (target) => {
    let items = this.state.items;
    const title = this[target].innerHTML;
    items = items.filter(item => item.title !== title);
    this.setState({ items });
  };

  createVote = () => {
    const items = this.state.items;
    const title = this.voteTitle.value;
    const multiple = this.multipleCheck.checked;
    const expansion = this.expansionCheck.checked;
    const autoClose = this.autoClose.value ? parseInt(this.autoClose.value, 10) : false;
    const data = {
      title,
      items,
      multiple,
      expansion,
      done: false,
      closed: false,
    };
    if (autoClose && !Number.isNaN(autoClose)) {
      data.autoClose = autoClose;
    }
    if (!title || !title.trim()) {
      return this.setState({ showMessage: true, errorMessage: this.props.errorMessage.noTitle });
    }
    if (data.items.length < 2) {
      return this.setState({ showMessage: true, errorMessage: this.props.errorMessage.notEnoughItems });
    }
    this.setState({ data, showMessage: false, multiple, expansion, autoClose, items });
    return this.props.getData && this.props.getData(data);
  };

  expandVote = () => {
    const title = this.expansionInput.value;
    if (!title || !title.trim()) {
      return false;
    }
    const data = this.state.data;
    const item = {
      title,
      count: 0,
    };
    data.items.push(item);
    this.setState({ data, items: data.items });
    this.expansionInput.value = '';
    return this.props.getData && this.props.getData(data);
  };

  showResult = () => {
    this.setState({ showResult: true });
  };

  showVoting = () => {
    this.setState({ showResult: false });
  };

  closeVote = () => {
    const data = this.state.data;
    data.done = true;
    data.closed = true;
    this.setState({ data });
    return this.props.getData && this.props.getData(data);
  };

  upvote = (idx) => {
    const items = this.state.items;
    const data = this.state.data;
    const total = items.reduce((prev, current) => prev + current.count, 0);
    if (total === this.state.autoClose) {
      return this.closeVote();
    }
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
    return this.props.getData && this.props.getData(data);
  };

  renderCreationView() {
    const { styles, text } = this.props;
    return (
      <div>
        <input
          className={styles.titleInput}
          ref={(c) => { this.voteTitle = c; }}
          placeholder={text.titleInputPlaceholder}
        />
        <div className={styles.addWrapper}>
          {this.renderItems(this.state.items)}
          <div>
            <input
              className={styles.addInput}
              ref={(c) => { this.addInput = c; }}
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
            <label htmlFor="multiple">
              <input id="multiple" type="checkbox" ref={(c) => { this.multipleCheck = c; }} />{text.multipleCheckbox}
            </label>
            <label htmlFor="expansion">
              <input id="expansion" type="checkbox" ref={(c) => { this.expansionCheck = c; }} />{text.expansionCheckbox}
            </label>
            <label htmlFor="autoClose">autoClose: <input id="autoClose" ref={(c) => { this.autoClose = c; }} /></label>
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
              <div
                className={styles.itemTitle}
                ref={(c) => { this[`react-vote-item-${j}`] = c; }}
              >
                {item.title}
              </div>
              {this.state.data.title ? checkVoted :
                <button
                  onClick={() => this.removeItem(`react-vote-item-${j}`)}
                  className={styles.removeButton}
                >
                  {text.removeButtonText}
                </button>}
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
                  ref={(c) => { this[`react-vote-result-${i}`] = c; }}
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
        {(!this.state.data.done && !this.state.data.closed) && !isAlreadyVoted &&
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
    const checkVotingClosed = this.state.data.done || this.state.data.closed;
    const isVotingClosed = this.state.data.title && (checkVotingClosed || this.state.showResult || isAlreadyVoted);
    const canExpanded = this.state.expansion && (!this.state.voted || this.state.multiple);
    const ongoingOnClosed = isVotingClosed
      ? this.renderResult(this.state.items)
      : (<div>
        <div className={styles.voteTitle}>{this.state.data.title}</div>
        {this.renderItems(this.state.items)}
        {canExpanded &&
        <div className={styles.itemWrapper}>
          <input
            className={styles.expansionInput}
            ref={(c) => { this.expansionInput = c; }}
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
