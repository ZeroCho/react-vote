import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreationItems extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
    onRemove: PropTypes.func.isRequired,
  };

  render = () => {
    const { items, styles, text } = this.props;
    return (
      <div>
        {items.map((item, i) => {
          const key = `react-vote-item-${i}`;
          return (
            <div key={key} className={styles.itemWrapper}>
              <div className={styles.itemTitle} title={item.title}>
                {item.title}
              </div>
              <button
                onClick={() => this.props.onRemove(i)}
                className={styles.removeButton}
              >
                {text.removeButtonText}
              </button>
            </div>
          );
        })}
      </div>
    );
  };
}

export default CreationItems;
