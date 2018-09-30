import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpansionInput extends Component {
  static propTypes = {
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
    expandVote: PropTypes.func.isRequired,
    clientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  static defaultProps = { clientId: null };

  state = {
    expansionInput: '',
    reasonCheck: false,
  };

  onExpansionInputChange = (e) => {
    const expansionInput = e.target.value;
    this.setState(() => ({ expansionInput }));
  };

  onReasonChange = (e) => {
    const reasonCheck = e.target.checked;
    this.setState(() => ({ reasonCheck }));
  };

  expandVote = () => {
    const title = this.state.expansionInput;
    if (!title || !title.trim()) {
      return false;
    }
    const { data } = this.props;
    const item = {
      title: title.trim(),
      count: 0,
      total: 0,
      voters: [],
      upvoters: [],
      downvoters: [],
      adder: this.props.clientId,
    };
    data.items.push(item);
    this.setState(() => ({ expansionInput: '' }));
    return this.props.expandVote(data, item);
  };

  render() {
    const { styles, text } = this.props;
    const { reasonCheck } = this.state;
    return (
      <div className={styles.itemWrapper}>
        <input
          className={styles.expansionInput}
          value={this.state.expansionInput}
          onChange={this.onExpansionInputChange}
          placeholder={text.expansionPlaceholder}
        />
        <label htmlFor="reason">
          {text.reasonCheckbox}
          <input id="reason" type="checkbox" checked={reasonCheck} onChange={this.onReasonChange} />
        </label>
        <button
          className={styles.expansionButton}
          onClick={this.expandVote}
        >
          {text.expansionButtonText}
        </button>
      </div>
    );
  }
}

export default ExpansionInput;
