#React Vote
React component for simple voting system, easy to customize and internationalize

##How to install
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)
```
npm install react-vote --save
```

##How to use
```
var ReactVote = require('react-vote');
<ReactVote />
```

ES2015 style
```
import ReactVote from 'react-vote';
```

##Result
I know, the style of this component looks crappy, but it's for **customization**. I didn't put any css codes for your **customization**. You can use **styles** prop to style it in your own way. **styles** prop is detailed in below. Also, you can change texts by using **text** prop. 


##Props
- data: Object
-- title: String. Title of vote.
-- items: Array. Array of objects composed with title and count
---- title: String. Title of item. Different from title of vote
---- count: Number. Counts of vote
-- done: Bool. Tell you whether this vote is done or not
- getData: Function(data). It's an callback function and if you put it as prop, you can get data when **a new vote is confirmed** or **somebody votes this**. So you can put voting data into the **database** with this function
- styles: Object. A group of classNames in this voting component. You can change these for style **customization** by mapping **classNames** with css files.
-- voteWrapper
-- voteTitle
-- titleInput
-- addWrapper
-- addInput
-- addButton
-- itemTitle
-- itemCount
-- itemWrapper
-- removeButton
-- confirmButton
-- resultButton
-- goBackButton
-- voteButton
- text: Object. A group of texts in this voting component. You can change these for **i18n**(internationalization).
-- titleInputPlaceholder
-- addInputPlaceholder
-- addButtonText
-- removeButtonText
-- confirmButtonText
-- resultButtonText
-- gobackButtonText
-- notEnoughItemMessage
-- voteButtonText

## Demo
[Live Demo](https://www.zerocho.com/portfolio/ReactVote)

## Wanna Contribute?
Please contribute to this package via **Pull Request**, or you can open **Issues**!

## License
MIT
