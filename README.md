# React Vote
React component for simple voting system, easy to customize and internationalize

## How to install
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)
```
npm install react-vote --save
```

## How to use
For a new voting system, **DO NOT** put the **data** prop.
Put **onCreate, onUpvote, onClose** callback function to get voting data and connect with database.
Use unique identifier of client IP adress as **clientId** to check whether the client already voted or not.
You can only create or close vote when **isAdmin** prop is true. Make it false when you open vote to others.
```
var ReactVote = require('react-vote'); // or import ReactVote from 'react-vote';
<ReactVote
  styles={customStyle}
  text={customText}
  onCreate={onCreate}
  onUpvote={onUpvote}
  onClose={onClose}
  onReset={onReset}
  isAdmin={true}
  clientId={clientId}
/>
```

You can get voting data inside the callback function. See **Props** section below for more information.
```
function onCreate (title, data) {
 // Save data into the  databasehere!
 console.log(data); // { title: 'title of this vote', items: [{ title: 'option1', count: 5, voters: ['a', 'b', 'c', 'd', 'e'] }, { title: 'option2', count: 3, voters: ['f', 'g', 'h'] }], done: false, multiple: false, expansion: false }
}
```

For ongoing vote or voting result, fetch vote data from the database and put it into the **data** prop.
This component will read the **data** prop and execute it. The structure of data prop is detailed below.
```
<ReactVote
  data={data}
  onUpvote={onUpvote}
  isAdmin={false}
  clientId={clientId}
  styles={customStyle}
  text={customText}
  errorMessage={customMessage}
/>
```

## Preview
I didn't put any css codes for your **customization**. You can use **styles** prop to style it in your own way. **styles** prop is detailed in below. Also, you can change texts by using **text** prop.

![reactvote](https://user-images.githubusercontent.com/10962668/27418372-b20345d8-5755-11e7-8e84-3373f7fa6b54.png)

## Props

### isAdmin: Boolean, Default: false
Tell react-vote whether the client is an admin or not. Only admins can close vote.

### multiple: Boolean, Default: false
If true, people can choose multiple options instead of one.

### total: Boolean, Default: true
If true, you can show total number of votes at result.

### expansion: Boolean, Default: false
If true, voters can add an option(See demo)

### autoClose: Number
If set, vote closed automatically when voting count equals the number of autoClose.

### clientId: String/Number
Put unique identifier of client here. React-vote will check whether that client already voted or not. Good example of identifiers are IPs or ObjectIds

### data: Object
Object that contains the whole information about the vote

- title: String. Title of vote.
- items: Array. Array of objects composed with title and count `[{ title: 'vote option 1', count: 5, voters: ['a', 'b', 'c', 'd', 'e'] }, { title: 'vote option 2', count: 3, voters: ['f', 'g', 'h'] }]`
- closed: Boolean. Tell you whether this vote is done or not. If done prop is true, you can only see the result, else you can toggle between voting window and result window.
- voters: Array. Array of unique identifier of voters.

### onCreate: Function(title: String, data: Object)
It's an callback function triggered when you create a new vote. The first parameter is the title of vote, and the second is a whole vote data.

### onUpvote: Function(title: String, index: Number, data: Object)
It's an callback function triggered when you upvoted. The first parameter is the title of vote, and the second is the index of upvoted item, and the third is a whole vote data.

### onClose: Function(title: String, data: Object)
It's an callback function triggered when the vote is closed. The first parameter is the title of vote, and the second is a whole vote data.

### onReset: Function(title: String, data: Object)
It's an callback function triggered when the vote is reset. The first parameter is the title of vote, and the second is a whole vote data.

### onExpand: Function(title: String, item: Object, data: Object)
It's an callback function triggered when you add a new option. The first parameter is the title of vote, and the second is the added item, and the third is a whole vote data.

### getData: Function(data: Object, diff: itemTitle)
**Obsolete** It's an callback function and if you put it as prop, you can get data when **a new vote is confirmed**, **somebody upvotes**, or **the vote is closed**. So you can put voting data into the **database** with this function.
When somebody upvotes, this function provides the second argument that shows the title of upvoted item.

### styles: Object
A group of classNames in this voting component. You can change these for style **customization** by mapping **classNames** with css files.

- voteWrapper: The ancestor of all divs
- voteTitle
- titleInput
- addWrapper: Wrapper of addInput, checkboxes, and addButton
- addInput
- addButton
- itemTitle
- itemCount
- itemWrapper: Wrapper of itemTitle and itemCount
- buttonWrapper: Wrapper of bottom buttons
- removeButton
- createButton
- resultButton
- goBackButton
- voteButton
- votedText
- closeButton
- resetButton
- errorMessage
- expansionButton
- expansionInput

### text: Object
A group of texts in this voting component. You can change these for **i18n**(internationalization).

- titleInputPlaceholder: Default: 'Title of this vote'
- addInputPlaceholder: Default: 'Type title of new option here'
- addButtonText: Default: 'Add'
- removeButtonText: Default: '×'
- resultButtonText: Default: 'Show result'
- goBackButtonText: Default: 'Go back to vote'
- voteButtonText: Default: 'Upvote'
- createButtonText: Default: 'Create'
- closeButtonText: Default: 'Close vote'
- resetButtonText: Default: 'Reset vote'
- votedText: Default: 'Voted'
- totalText: Default: 'Total'
- multipleCheckbox: Default: 'Multiple choice?'
- expansionCheckbox: Default: 'Expandable?'
- expansionPlaceholder: Default: 'Add an option yourself'
- expansionButtonText: Default: 'Add'
- autoCloseText: Default: 'AutoClose number: '
- autoClosePlaceholder: Default: 'type autoClose number'

### errorMessage: Object
Messages of error, triggered when you try something invalid.

- notEnoughItems: Default: 'Need at least 2 item!', When you create vote with less than two items.
- noTitle: Default: 'Need a title', When you create vote without title.

## Demo
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)

## TODO
- result graph
- option change while voting
- downVote

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
