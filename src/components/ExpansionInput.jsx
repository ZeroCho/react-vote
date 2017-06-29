import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpansionInput extends Component {
  static propTypes = {
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  state = {
    expansionInput: '',
  };

  onExpansionInputChange = (e) => {
    const expansionInput = e.target.value.trim();
    this.setState(() => ({ expansionInput }));
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
