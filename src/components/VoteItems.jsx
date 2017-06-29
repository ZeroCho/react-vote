import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteItems extends Component {
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    clientId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    styles: PropTypes.objectOf(PropTypes.any).isRequired,
    text: PropTypes.objectOf(PropTypes.any).isRequired,
    voted: PropTypes.bool.isRequired,
    upvote: PropTypes.func.isRequired,
    downvote: PropTypes.func.isRequired,
  };

  static defaultProps = {
    clientId: null,
  };

  render = () => {
    const { clientId, data: { title, items, multiple, downvote }, styles, text, voted } = this.props;
    const canVote = (multiple || !voted);
    return (
      <div>
        {items.map((item, i) => {
          const isAlreadyVoted = (clientId && item.voters && item.voters.indexOf(clientId) > -1);
          const key = `react-vote-item-${i}`;
          return (
            <div key={key} className={styles.itemWrapper}>
              <div className={styles.itemTitle} title={item.title}>
                {item.title}
              </div>
              {title && (item.voted || isAlreadyVoted)
                ? <span className={styles.votedText}>{text.votedText}</span>
                : canVote
                && (
                  <span className={styles.voteButtons}>
                    <button
                      onClick={() => this.props.upvote(i)}
                      className={styles.voteButton}
                    >
                      {text.voteButtonText}
                    </button>
                    {downvote && <button
                      onClick={() => this.props.downvote(i)}
                      className={styles.downvoteButton}
                    >
                      {text.downvoteButtonText}
                    </button>}
                  </span>
                )
              }
            </div>
          );
        })}
      </div>
    );
  };
}

export default VoteItems;
