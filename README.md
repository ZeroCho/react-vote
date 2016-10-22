#React Vote
React component for simple voting system, easy to customize and internationalize

##How to install
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)
```
npm install react-vote --save
```

##How to use
For a new voting system, **DON'T** put data prop. And put **getData** callback function to get voting data and connect with database
```
var ReactVote = require('react-vote');
<ReactVote styles={customStyle} text={customText} getData={voteCallback} isAdmin={true} />
```

You can get data parameter inside the callback function
```
function voteCallback (data) {
 // save data into the database here!
 console.log(data); // { title: 'title of this vote', items: [{ title: 'option1', count: 5}, { title: 'option2', count: 3}], done: false, multiple: false, expansion: false }
}
```

For ongoing vote or voting result, fetch vote data from the database and put it into the **data** prop. This component will read the **data** prop and execute it. The structure of data prop is detailed below.
```
<ReactVote data={data} getData={voteCallback} isAdmin={true} styles={customStyle} text={customText} errorMessage={customMessage} />
```

ES2015(ES6) style
```
import ReactVote from 'react-vote';
```

##Result
I know, the style of this component looks crappy, but it's for **customization**. I didn't put any css codes for your **customization**. You can use **styles** prop to style it in your own way. **styles** prop is detailed in below. Also, you can change texts by using **text** prop. 
![reactvote](https://cloud.githubusercontent.com/assets/10962668/19619889/d797c13e-98ab-11e6-8836-30afd0e34186.png)

##Props

### isAdmin: Boolean, Default: false
Tell react-vote whether the client is an admin or not. Only admins can close vote.

### multiple: Boolean, Default: false
If true, you can choose multiple choices

### total: Boolean, Default: true
If true, you can show total number of vote at result.

### expansion: Boolean, Default: false
If true, voters can add option(See demo)

### data: Object
- title: String. Title of vote.
- items: Array. Array of objects composed with title and count `[{ title: 'vote option 1', count: 5 }, { title: 'vote option 2', count: 3 }]`
- closed: Boolean. Tell you whether this vote is done or not. If done prop is true, you can only see the result, else you can toggle between voting window and result window.
- done: Boolean. **Depreciated**. Alias of closed.

### getData: Function(data: Object)
It's an callback function and if you put it as prop, you can get data when **a new vote is confirmed**, **somebody upvotes**, or **the vote is closed**. So you can put voting data into the **database** with this function

### styles: Object
A group of classNames in this voting component. You can change these for style **customization** by mapping **classNames** with css files.

- voteWrapper: The ancestor of all divs
- voteTitle
- titleInput
- addWrapper
- addInput
- addButton
- itemTitle
- itemCount
- itemWrapper: Wrapper of itemTitle and itemCount
- removeButton
- createButton
- resultButton
- goBackButton
- voteButton
- votedText
- closeButton
- errorMessage
- expansionButton

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
- votedText: Default: 'Voted'
- totalText: Default: 'Total'
- multipleCheckbox: Default: 'multiple?'
- expansionCheckbox: Default: 'expansion?'
- expansionPlaceholder: Default: 'Add an option yourself'
- expansionButtonText: Default: 'Add'

### errorMessage: Object
Messages of error, triggered when you try something invalid.

- notEnoughItems: Default: 'Need at least 2 item!', When you create vote with less than two items.
- noTitle: Default: 'Need a title', When you create vote without title.

## Demo
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)

## TODO
- result graph
- check ones who already voted
- autoClose at certain number

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
