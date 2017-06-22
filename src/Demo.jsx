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
  const onCreate = (title, data) => {
    console.log('created', title, data);
  };
  const onUpvote = (title, index, data) => {
    console.log('upvoted', title, index, data);
  };
  const onClose = (title, data) => {
    console.log('closed', title, data);
  };
  const onExpand = (title, item, data) => {
    console.log('expanded', title, item, data);
  };
  const onReset = (title, data) => {
    console.log('reset', title, data);
  };
  const isAdmin = () => true;
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <div>
      <ReactVote
        styles={basicCss}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onExpand={onExpand}
        onReset={onReset}
        isAdmin={isAdmin()}
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Ongoing Vote with Custom Text', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], closed: false }}
        text={customText}
        isAdmin={isAdmin()}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onReset={onReset}
        onExpand={onExpand}
        clientId="tester"
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Ongoing voted Vote', voters: ['tester'], items: [{ title: 'a', count: 5 }, { title: 'b', count: 3, voters: ['tester'] }], closed: false }}
        text={customText}
        isAdmin={isAdmin()}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onExpand={onExpand}
        onReset={onReset}
        clientId="tester"
        voted
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Multiple Choice Vote && not-Admin', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], closed: false }}
        isAdmin={false}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onExpand={onExpand}
        onReset={onReset}
        clientId="tester"
        multiple
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Expandable Vote', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], closed: false }}
        isAdmin={isAdmin()}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onExpand={onExpand}
        onReset={onReset}
        expansion
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Expandable && Multiple Vote', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], closed: false }}
        isAdmin={isAdmin()}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onExpand={onExpand}
        onReset={onReset}
        expansion
        multiple
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{ title: 'Closed Vote', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], closed: true }}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onExpand={onExpand}
        onReset={onReset}
      />
      <br />
      <ReactVote
        styles={basicCss}
        data={{
          title: 'Auto Closing Vote for designated number',
          items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }],
        }}
        onCreate={onCreate}
        onUpvote={onUpvote}
        onClose={onClose}
        onExpand={onExpand}
        onReset={onReset}
        autoClose={9}
      />
    </div>,
    rootNode,
  );
});
