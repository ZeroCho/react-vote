import React, { Component, PropTypes } from 'react';

class ReactVote extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool,
    total: PropTypes.bool,
    multiple: PropTypes.bool,
    data: PropTypes.shape({
      title: PropTypes.string.required,
      items: PropTypes.arrayOf(PropTypes.object).required,
      done: PropTypes.bool.required,
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
      removeButton: PropTypes.string,
      createButton: PropTypes.string,
      resultButton: PropTypes.string,
      goBackButton: PropTypes.string,
      voteButton: PropTypes.string,
      closeButton: PropTypes.string,
      errorMessage: PropTypes.string,
      votedText: PropTypes.string,
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
    data: this.props.data,
    isAdmin: this.props.isAdmin,
    total: this.props.total,
    voted: false,
    multiple: this.props.multiple,
    showMessage: false,
    errorMessage: false,
  };

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

  confirmVote = () => {
    const items = this.state.items;
    const title = this.voteTitle.value;
    const data = {
      title,
      items,
      done: false,
    };
    if (!title || !title.trim()) {
      return this.setState({ showMessage: true, errorMessage: this.props.errorMessage.noTitle });
    }
    if (data.items.length < 2) {
      return this.setState({ showMessage: true, errorMessage: this.props.errorMessage.notEnoughItems });
    }
    this.setState({ data, showMessage: false });
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
    this.setState({ data });
    return this.props.getData && this.props.getData(data);
  };

  upvote = (idx) => {
    const items = this.state.items;
    const data = this.state.data;
    items[idx].count += 1;
    items[idx].voted = true;
    data.items = items;
    this.setState({ voted: true, items, data });
    return this.props.getData && this.props.getData(data);
  };

  renderItems = (items) => {
    let i = 0;
    return (
      <div>
        {items.map((item) => {
          const j = i;
          const checkVoted = item.voted
            ? <span className={this.props.styles.votedText}> {this.props.text.votedText}</span>
            : (this.state.multiple || !this.state.voted) && <button onClick={() => this.upvote(j)} className={this.props.styles.voteButton}>{this.props.text.voteButtonText}</button>;
          const itemComponent = (
            <div key={`react-vote-item-${j}`} className={this.props.styles.itemWrapper}>
              <div
                className={this.props.styles.itemTitle}
                ref={(c) => { this[`react-vote-item-${j}`] = c; }}
              >
                {item.title}
              </div>
              {this.state.data ? checkVoted :
                <button
                  onClick={() => this.removeItem(`react-vote-item-${j}`)}
                  className={this.props.styles.removeButton}
                >
                  {this.props.text.removeButtonText}
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
    return (
      <div>
        {items.map((item) => {
          const percentage = total === 0 ? 0 : ((item.count / total) * 100).toFixed(2);
          const itemComponent = (
            <div key={`react-vote-result-${i}`} className={this.props.styles.itemWrapper}>
              <div
                className={this.props.styles.itemTitle}
                ref={(c) => { this[`react-vote-result-${i}`] = c; }}
              >
                {item.title}
              </div>
              <div className={this.props.styles.itemCount}>{`${item.count}(${percentage}%)`}</div>
            </div>
          );
          i += 1;
          return itemComponent;
        })}
        {this.state.total && <div>
          <div className={this.props.styles.itemTitle}>{this.props.text.totalText}</div>
          <div className={this.props.styles.itemCount}>{total}</div>
        </div>}
      </div>
    );
  };

  render() {
    const voting = (
      <div>
        <div className={this.props.styles.voteTitle}>{this.state.data && this.state.data.title}</div>
        {this.renderItems(this.state.items)}
        <button
          className={this.props.styles.resultButton}
          onClick={this.showResult}
        >
          {this.props.text.resultButtonText}
        </button>
        {this.state.isAdmin && <button
          className={this.props.styles.closeButton}
          onClick={this.closeVote}
        >
          {this.props.text.closeButtonText}
        </button>}
      </div>
    );
    const result = this.state.data &&
      <div>
        <div className={this.props.styles.voteTitle}>{this.state.data.title}</div>
        {this.renderResult(this.state.items)}
        {!this.state.data.done &&
        <button
          className={this.props.styles.goBackButton}
          onClick={this.showVoting}
        >
          {this.props.text.goBackButtonText}
        </button>}
      </div>;
    const isVotingDone = this.state.data && (this.state.data.done || this.state.showResult) ? result : voting;
    return (
      <div className={this.props.styles.voteWrapper}>
        {this.state.data ? isVotingDone : (
          <div>
            <input
              className={this.props.styles.titleInput}
              ref={(c) => { this.voteTitle = c; }}
              placeholder={this.props.text.titleInputPlaceholder}
            />
            {this.renderItems(this.state.items)}
            <div className={this.props.styles.addWrapper}>
              <input
                className={this.props.styles.addInput}
                ref={(c) => { this.addInput = c; }}
                placeholder={this.props.text.addInputPlaceholder}
              />
              <button
                className={this.props.styles.addButton}
                onClick={this.addItem}
              >
                {this.props.text.addButtonText}
              </button>
            </div>
            {this.state.showMessage &&
            <div className={this.props.styles.errorMessage}>{this.state.errorMessage}</div>}
            <button className={this.props.styles.createButton} onClick={this.confirmVote}>
              {this.props.text.createButtonText}
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ReactVote;
