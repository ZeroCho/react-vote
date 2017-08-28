# React Vote
React component for simple voting system, easy to customize and internationalize

## How to install
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)
```
npm install react-vote --save
```

## Change in v3
All options such as multiple, expansion, downvote, autoClose, showTotal, etc. are now available in the **data** object.
You can now control the whole vote system with one **data** object.
Thus, multiple, expansion, total, downvote, autoClose props are omitted.

## How to use
For a new voting system, Do **NOT** put the **data** prop.

Put **onCreate, onEdit, onUpvote, onDownvote, onClose, onReset, onExpand** callback functions to get voting data and connect with database.

Use unique identifier of client IP address as **clientId** to check whether the client already voted or not.

You can only create, edit, reset or close vote when **isAdmin** prop is true. Make it false when you open vote to others.

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

You can get voting data as a parameter inside the callback function. See **Props** section below for more information.
```
function onCreate (data, diff) {
 // Save data into the  databasehere!
 console.log(data); // { title: 'title of this vote', items: [{ title: 'option1', count: 5, voters: ['a', 'b', 'c', 'd', 'e'] }, { title: 'option2', count: 3, voters: ['f', 'g', 'h'] }], closed: false, multiple: false, expansion: false, voters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] }
}
```

For ongoing vote or voting result, fetch vote data from the database and put it into the **data** prop.
This component will read the **data** prop and execute it. The structure of data prop is detailed below.
```
<ReactVote
  data={data} // put data object here and you will get ongoing vote
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
Tell react-vote whether the client is an admin or not. Only admins can close and reset vote.

### clientId: String/Number
Put unique identifier of client here. React-vote will check whether that client already voted or not. Good example of identifiers are IPs or ObjectIds

### data: Object
Object that contains the whole information about the vote

```
{
  title: String, // Title of vote
  items: [ // Array of vote options
    {
      title: String, // Title of option
      count: Number, // Number of votes
      total: Number, // Number of total votes(including downvote)
      reason: Boolean, // Need to put reason why voted
      reasons: [String], // Array of reasons why voted
      voters: [String/Number] // Array of unique identifers of all voters for this option
      downvoters: [String/Number] // only downvoters
      upvoters: [String/Number] // only upvoters
      adder: String/Number // Unique identifier of the one who added this item(for expandable vote)
    }
  ],
  closed: Boolean, // Whether this vote is closed or not. If this prop is true, you can only see the result, otherwise you can toggle between voting view and result view.
  voters: [String/Number] // Array of unique identifiers of all voters.
  autoClose: Number // Number which closes vote when reached
  multiple: Boolean // Whether voters can choose multiple options
  expansion: Boolean // Whether voters can add new option
  downvote: Boolean // Whether to allow downvote
  showTotal: Boolean // Whether to show total votes in result view
  creator: String/Number // Unique identifier of the one who create this vote.
}
```

### onCreate: Function(data: Object)
It's an callback function triggered when you create a new vote. The only parameter is a whole vote data.

### onEdit: Function(data: Object)
It's an callback function triggered when you edit an existing vote. The only parameter is a whole vote data(edited)

### onUpvote: Function(data: Object, diff: Object)
It's an callback function triggered when you upvote. The first parameter is a whole vote data, the second is the difference between previous and current data.

```
// diff object
{
  index: Number,
  item: Object,
  voter: String/Number
}
```

### onDownvote: Function(data: Object, diff: Object)
It's an callback function triggered when you downvote. The first parameter is a whole vote data, the second is the difference between previous and current data.

### onClose: Function(data: Object)
It's an callback function triggered when the vote is closed. The only parameter is a whole vote data.

### onReset: Function(data: Object)
It's an callback function triggered when the vote is reset. The only parameter is a whole vote data.

### onExpand: Function(data: Object, item: Object)
It's an callback function triggered when you add a new option. The first parameter is a whole vote data, the second is the added item.

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
- voteButtons: Wrapper of voteButton and downvoteButton
- voteButton
- downvoteButton
- votedText
- closeButton
- resetButton
- errorMessage
- expansionButton
- expansionInput
- settingButton

### text: Object
A group of texts in this voting component. You can change these for **i18n**(internationalization).

- addButtonText: 'Add',
- titleInputPlaceholder: 'Title of this vote',
- addInputPlaceholder: 'Title of a new option',
- removeButtonText: '×',
- closeButtonText: 'Close vote',
- resetButtonText: 'Reset vote',
- createButtonText: 'Create',
- resultButtonText: 'Show result',
- goBackButtonText: 'Go back',
- voteButtonText: 'Upvote',
- downvoteCheckbox: 'Allow downvote?',
- downvoteButtonText: 'Downvote',
- votedText: 'Voted',
- totalText: 'Total',
- multipleCheckbox: 'Multiple choice?',
- expansionCheckbox: 'Expandable?',
- showTotalCheckbox: 'Show total?',
- expansionPlaceholder: 'Add an option yourself',
- expansionButtonText: 'Add',
- autoCloseText: 'AutoClose number: ',
- autoClosePlaceholder: 'AutoClose number',
- settingButtonText: 'Settings',
- editButtonText: 'Edit',
- closeCheckbox: 'Closed?',
- reasonCheckbox: 'Need reason?'
- reasonInputPlaceholder: 'Type reason why you voted this'

### errorMessage: Object
Messages of error, triggered when you try something invalid.

- notEnoughItems: Default: 'Need at least 2 item!', When you create vote with less than two items.
- noTitle: Default: 'Need a title', When you create vote without title.

## Demo
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)

## TODO
- ban

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
