#React Vote
React component for simple voting system, easy to customize and internationalize

##How to install
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)
```
npm install react-vote --save
```

##How to use
For a new vote do **NOT** put data prop. And put **getData** callback function to get vote data and to connect data with database
```
var ReactVote = require('react-vote');
<ReactVote styles={customStyle} text={customText} getData={voteCallback} />
```
You can get data parameter which looks like `{ title: 'title of this vote', items: [{ title: 'option1', count: 5}, { title: 'option2', count: 3}], done: false }`
```
function voteCallback (data) {
 // save data into the database here!
}
```

For ongoing vote or vote result, fetch vote data from the database and put it into the **data** prop. This component will read the **data** prop and execute it. The structure of data prop is detailed below.
```
var ReactVote = require('react-vote');
<ReactVote data={data} styles={customStyle} text={customText} getData={voteCallback} />
```
ES2015 style
```
import ReactVote from 'react-vote';
```

##Result
I know, the style of this component looks crappy, but it's for **customization**. I didn't put any css codes for your **customization**. You can use **styles** prop to style it in your own way. **styles** prop is detailed in below. Also, you can change texts by using **text** prop. 
![reactvote](https://cloud.githubusercontent.com/assets/10962668/19356993/a2becc44-91aa-11e6-9cfd-98406f47e367.png)
##Props
### isAdmin: Boolean, Default: true
Tell react-vote whether the client is an admin or not. Only admins can close vote.

### data: Object
- title: String. Title of vote.
- items: Array. Array of objects composed with title and count 
`[{ title: 'vote option 1', count: 5 }, { title: 'vote option 2', count: 3 }]`
- done: Boolean. Tell you whether this vote is done or not. If done prop is true, you can only see the result, else you can toggle between voting window and result window.

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
- confirmButton
- resultButton
- goBackButton
- voteButton
- votedText
- closeButton
- errorMessage

### text: Object
A group of texts in this voting component. You can change these for **i18n**(internationalization).
- titleInputPlaceholder
- addInputPlaceholder
- addButtonText
- removeButtonText
- confirmButtonText
- resultButtonText
- goBackButtonText
- voteButtonText
- closeButtonText
- votedText: Text which shows that you already voted this item.

### errorMessage: Object
Messages of error, triggered when you try something invalid.
- notEnoughItems: When you create vote with less than two items.
- noTitle: When you create vote without title.

## Demo
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)

## TODO
- multiple vote
- result graph
- total vote

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
