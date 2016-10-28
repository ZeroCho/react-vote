import React from 'react';
import ReactDOM from 'react-dom';
import ReactVote from './ReactVote';
import styles from './Demo.css';

document.addEventListener('DOMContentLoaded', () => {
  const rootNode = document.createElement('div');
  const basicCss = {
    voteWrapper: styles.voteWrapper,
    voteTitle: styles.voteTitle,
    titleInput: styles.titleInput,
    addWrapper: styles.addWrapper,
    addInput: styles.addInput,
    addButton: styles.addButton,
    itemTitle: styles.itemTitle,
    itemCount: styles.itemCount,
    itemWrapper: styles.itemWrapper,
    buttonWrapper: styles.buttonWrapper,
    removeButton: styles.removeButton,
    createButton: styles.createButton,
    resultButton: styles.resultButton,
    goBackButton: styles.goBackButton,
    voteButton: styles.voteButton,
    votedText: styles.votedText,
    errorMessage: styles.errorMessage,
    closeButton: styles.closeButton,
    expansionButton: styles.expansionButton,
    expansionInput: styles.expansionInput,
  };
  const customText = {
    voteButtonText: 'I\'m gonna vote this!',
    resultButtonText: 'Give me the result!',
    goBackButtonText: 'Let\'s go back!',
    closeButtonText: 'I\'ll close this vote',
    votedText: 'I chose this',
    totalText: 'Total number of vote is:',
  };
  const getData = (data) => {
    console.log(data);
  };
  const isAdmin = () => true;
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <div>
      <ReactVote
        styles={basicCss}
        getData={getData}
        isAdmin={isAdmin()}
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Ongoing Vote with Custom Text', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], done: false }}
        text={customText}
        isAdmin={isAdmin()}
        getData={getData}
        voted
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Multiple Vote and not-Admin', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], done: false }}
        isAdmin={false}
        getData={getData}
        multiple
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Expansion Vote', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], done: false }}
        isAdmin={isAdmin()}
        getData={getData}
        expansion
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Closed Vote', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], done: true }}
        getData={getData}
      />
    </div>,
    rootNode
  );
});
