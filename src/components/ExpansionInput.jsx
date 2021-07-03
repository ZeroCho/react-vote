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

  static defaultProps = {
    clientId: null,
  };

  state = {
    expansionInput: '',
  };

  onExpansionInputChange = e => {
    const expansionInput = e.target.value;
    this.setState(() => ({ expansionInput }));
  };

  expandVote = () => {
    const { data, expandVote, clientId } = this.props;
    const title = this.state.expansionInput;
    if (!title || !title.trim()) {
      return false;
    }
    const item = {
      title: title.trim(),
      count: 0,
      total: 0,
      voters: [],
      upvoters: [],
      downvoters: [],
      adder: clientId,
    };
    data.items.push(item);
    this.setState(() => ({ expansionInput: '' }));
    return expandVote(data, item);
  };

  render() {
    const { styles, text } = this.props;
    return (
      <div className={styles.itemWrapper}>
        <input
          className={styles.expansionInput}
          value={this.state.expansionInput}
          onChange={this.onExpansionInputChange}
          placeholder={text.expansionPlaceholder}
        />
        <button
          type="button"
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
