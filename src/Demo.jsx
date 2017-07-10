import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import ReactVote from './ReactVote';
import styles from './Demo.css';

const rootNode = document.getElementById('demo');
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
  voteButtons: styles.voteButtons,
  voteButton: styles.voteButton,
  downvoteButton: styles.voteButton,
  votedText: styles.votedText,
  errorMessage: styles.errorMessage,
  closeButton: styles.closeButton,
  expansionButton: styles.expansionButton,
  expansionInput: styles.expansionInput,
};
const customText = {
  voteButtonText: 'I\'m gonna vote this!',
  resultButtonText: 'Give me the result!',
  resetButtonText: 'Reset!!',
  goBackButtonText: 'Let\'s go back!',
  closeButtonText: 'I\'ll close this vote',
  votedText: 'I chose this',
  totalText: 'Total number of vote is:',
};
const onCreate = (data) => {
  console.log('created', data);
};
const onEdit = (data) => {
  console.log('edited', data);
};
const onUpvote = (data, diff) => {
  console.log('upvoted', data, diff);
};
const onClose = (data) => {
  console.log('closed', data);
};
const onExpand = (data, item) => {
  console.log('expanded', data, item);
};
const onReset = (data) => {
  console.log('reset', data);
};
const onDownvote = (data, diff) => {
  console.log('downvoted', data, diff);
};
const isAdmin = () => true;

const DOMRender = RV => (
  render(
    <AppContainer>
      <div>
        <RV
          styles={basicCss}
          onCreate={onCreate}
          onUpvote={onUpvote}
          onClose={onClose}
          onEdit={onEdit}
          onDownvote={onDownvote}
          onExpand={onExpand}
          onReset={onReset}
          clientId="zerocho"
          isAdmin={isAdmin()}
        />
        <RV
          styles={basicCss}
          onCreate={onCreate}
          onUpvote={onUpvote}
          onEdit={onEdit}
          onClose={onClose}
          onDownvote={onDownvote}
          onExpand={onExpand}
          onReset={onReset}
          data={{
            title: 'normal vote',
            items: [{
              title: 'a',
              count: 0,
              total: 0,
            }, {
              title: 'b',
              count: 0,
              total: 0,
            }, {
              title: 'c',
              count: 0,
              total: 0,
            }],
          }}
          isAdmin={false}
        />
      </div>
    </AppContainer>,
    rootNode,
  )
);

DOMRender(ReactVote);

if (module.hot) {
  module.hot.accept('./ReactVote', () => {
    const nextRV = require('./ReactVote').default;
    DOMRender(nextRV);
  });
}
