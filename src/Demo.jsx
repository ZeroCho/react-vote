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
    removeButton: styles.removeButton,
    confirmButton: styles.confirmButton,
    resultButton: styles.resultButton,
    goBackButton: styles.goBackButton,
    voteButton: styles.voteButton,
  };
  const customText = {
    voteButtonText: 'I\'m gonna vote this!',
    resultButtonText: 'Give me the result!',
    goBackButtonText: 'Let\'s go back!',
  };
  const getData = (data) => {
    console.log(data);
  };
  document.body.appendChild(rootNode);
  ReactDOM.render(
    <div>
      <strong>New Vote</strong>
      <ReactVote styles={basicCss} getData={getData} />
      <br />
      <strong>Ongoing Vote</strong>
      <ReactVote styles={basicCss} data={{ title: 'Ongoing', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], done: false }} text={customText} />
      <br />
      <strong>Done Vote</strong>
      <ReactVote styles={basicCss} data={{ title: 'Done', items: [{ title: 'a', count: 5 }, { title: 'b', count: 3 }], done: true }} />
    </div>,
    rootNode
  );
});
