import React, { Component, PropTypes } from 'react';

class ReactVote extends Component {
  static propTypes = {
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
      confirmButton: PropTypes.string,
      resultButton: PropTypes.string,
      goBackButton: PropTypes.string,
      voteButton: PropTypes.string,
    }),
    getData: PropTypes.func,
    text: PropTypes.shape({
      titleInputPlaceholder: PropTypes.string,
      addInputPlaceholder: PropTypes.string,
      addButtonText: PropTypes.string,
      removeButtonText: PropTypes.string,
      confirmButtonText: PropTypes.string,
      resultButtonText: PropTypes.string,
      goBackButtonText: PropTypes.string,
      notEnoughItemMessage: PropTypes.string,
      voteButtonText: PropTypes.string,
    }),
  };

  static defaultProps = {
    text: {
      addButtonText: 'Add',
      titleInputPlaceholder: 'Title of this vote',
      addInputPlaceholder: 'Type title of new item here',
      removeButtonText: '×',
      confirmButtonText: 'Confirm',
      resultButtonText: 'Show result',
      goBackButtonText: 'Go back to vote',
      voteButtonText: 'Vote this',
      notEnoughItemMessage: 'Need more than two items!',
    },
  };

  state = {
    showResult: false,
    items: this.props.data ? this.props.data.items : [],
    data: this.props.data,
    voted: false,
  };

  addItem = () => {
    const title = this.addInput.value;
    const items = this.state.items;
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
    const data = {
      title: this.voteTitle.value,
      items,
      done: false,
    };
    if (data.items.length < 2) {
      return window.alert(this.props.text.notEnoughItemMessage);
    }
    this.setState({ data });
    return this.props.getData && this.props.getData(data);
  };

  showResult = () => {
    this.setState({ showResult: true });
  };

  showVoting = () => {
    this.setState({ showResult: false });
  };

  vote = (idx) => {
    const items = this.state.items;
    const data = this.state.data;
    items[idx].count += 1;
    data.items = items;
    this.setState({ voted: true, items, data });
    return this.props.getData && this.props.getData(data);
  };

  renderItems = () => {
    let i = 0;
    return (
      <div>
        {this.state.items.map((item) => {
          const j = i;
          const itemComponent = (
            <div key={`react-vote-item-${i}`} className={this.props.styles.itemWrapper}>
              <div
                className={this.props.styles.itemTitle}
                ref={(c) => { this[`react-vote-item-${i}`] = c; }}
              >
                {item.title}
              </div>
              {this.state.data ?
                !this.state.voted && <button
                  onClick={() => this.vote(j)}
                  className={this.props.styles.voteButton}
                >
                  {this.props.text.voteButtonText}
                </button> :
                <button
                  onClick={() => this.removeItem(`react-vote-item-${i}`)}
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

  renderResult = () => {
    let i = 0;
    return (
      <div>
        {this.state.items.map((item) => {
          const itemComponent = (
            <div key={`react-vote-result-${i}`} className={this.props.styles.itemWrapper}>
              <div
                className={this.props.styles.itemTitle}
                ref={(c) => { this[`react-vote-result-${i}`] = c; }}
              >
                {item.title}
              </div>
              <div className={this.props.styles.itemCount}>{item.count}</div>
            </div>
          );
          i += 1;
          return itemComponent;
        })}

      </div>
    );
  };

  render() {
    const isVotingDone = this.state.data && (this.state.data.done || this.state.showResult) ?
      <div>
        <div className={this.props.styles.voteTitle}>{this.state.data.title}</div>
        {this.renderResult()}
        {!this.state.data.done &&
          <button
            className={this.props.styles.goBackButton}
            onClick={this.showVoting}
          >
            {this.props.text.goBackButtonText}
          </button>}
      </div>
      :
      <div>
        <div className={this.props.styles.voteTitle}>{this.state.data && this.state.data.title}</div>
        {this.renderItems()}
        <button
          className={this.props.styles.resultButton}
          onClick={this.showResult}
        >
          {this.props.text.resultButtonText}
        </button>
      </div>;
    return (
      <div className={this.props.styles.voteWrapper}>
        {this.state.data ?
          isVotingDone
          :
          <div>
            <input
              className={this.props.styles.titleInput}
              ref={(c) => { this.voteTitle = c; }}
              placeholder={this.props.text.titleInputPlaceholder}
            />
            {this.renderItems()}
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
            <button className={this.props.styles.confirmButton} onClick={this.confirmVote}>
              {this.props.text.confirmButtonText}
            </button>
          </div>
        }
      </div>
    );
  }
}

export default ReactVote;
