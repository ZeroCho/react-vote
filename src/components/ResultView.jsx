import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ResultView extends Component {
  static propTypes = {
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
    onCreate: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
    errorMessage: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = {
    voteTitle: '',
    items: [],
    addInput: '',
    multipleCheck: false,
    expansionCheck: false,
    autoCloseNumber: '',
    errorMessage: false,
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

  onAutoCloseChange = (e) => {
    const autoCloseNumber = e.target.value.trim();
    this.setState(() => ({ autoCloseNumber }));
  };

  addItem = () => {
    const { title, items } = this.state;
    if (!title) return;
    items.push({ title, count: 0, total: 0, voters: [], upvoters: [], downvoters: [] });
    this.setState(() => ({ items, addInput: '' }));
  };

  removeItem = (target) => {
    let items = this.state.items;
    items = items.filter((item, index) => index !== target);
    this.setState(() => ({ items }));
  };

  createVote = () => {
    const { onCreate, errorMessage: { noTitle, notEnoughItems }, setData } = this.props;
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
    this.setState(() => ({ showMessage: false }));
    if (onCreate && typeof onCreate === 'function') {
      setData(data);
      return onCreate(data.title, data);
    }
    return true;
  };

  render() {
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
  }
}

export default ResultView;
