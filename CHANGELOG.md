# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [3.3.0] - 2018-01-13
### Updated
- React@16
### Fixed
- closed vote cannot be expanded

## [3.2.1] - 2017-09-12
### Fixed
- spacebar in text input
- no blank reason

## [3.2.0] - 2017-08-29
### Added
- can choose whether to type reason why voted

## [3.1.1] - 2017-07-11
### Added
- onEdit prop
- you can now change options of vote in the vote system if you are an admin and provide onEdit prop.

## [3.0.0] - 2017-07-10
### Updated
- multiple, expansion, autoClose, downvote, showTotal are included in **data** object(BREAKING)
- onClose, onCreate, onReset, onExpand, onUpvote, onDownvote callback parameters are changed(BREAKING)

### Removed
- multiple, expansion, autoClose, downvote, total props(BREAKING)

## [2.1.0] - 2017-06-23
### Added
- downvote
- item.total, item.upvoters, item.downvoters

### Updated
- show who added a vote item
- item.total indicates total number of votes instead of item.count(item.count reflects downvote which is -1)
- total in result view shows count(number of votes which reflect downvote) and total(number of all votes)

## [2.0.0] - 2017-06-22
### Updated
- babel-prest-env
- the second parameter of onUpvote callback is difference object instead of index(BREAKING)

### Fixed
- reset && close button on result view
- voting shouldn't change view
- can vote again after reset

### Removed
- getData props(BREAKING)

## [1.4.0] - 2017-06-22
### Added
- reset vote

### Fixed
- prevent this.props from totally overriding defaultProps

## [1.3.7] - 2017-06-03
### Fixed
- prop-types warning
- expandable vote doesn't need minimum 2 items

## [1.3.5] - 2017-04-09
### Added
- yarn support
- react@15.5.0

## [1.3.4] - 2017-02-25
### Fixed
- libraryTarget

## [1.3.2] - 2017-02-25
### Updated
- webpack2

## [1.3.1] - 2017-02-22
### Added
- title shows when mouse is on the item

## [1.3.0] - 2017-02-19
### Added
- onCreate, onUpvote, onClose, onExpand event callback functions

## [1.2.1] - 2017-01-02
### Fixed
- Fix `autoClose` closing one before set number

## [1.2.0] - 2017-01-02
### Added
- CHANGELOG.md

### Changed
- Now provide upvoted title name as the second argument of `getData` prop.

## [1.1.1] - 2016-12-13
### Fixed
- Add dist folder back

## [1.1.0] - 2016-12-13
### Fixed
- Close vote not working correctly

### Changed
- Bump up dependencies

### Removed
- **done** prop
- dist folder

## [1.0.2] - 2016-11-23
### Changed
- Bump up dependencies

## [1.0.1] - 2016-11-18
### Changed
- Bump up dependencies
- Code cleanup

## [1.0.0] - 2016-11-10
### Added
- Add button wrapper style
- Feature: **autoClose**

### Changed
- Bump up dependencies
- Code cleanup

[Unreleased]: https://github.com/zerocho/react-vote/compare/v2.1.0...HEAD
[2.1.0]: https://github.com/zerocho/react-vote/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/zerocho/react-vote/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/zerocho/react-vote/compare/v1.3.7...v1.4.0
[1.3.7]: https://github.com/zerocho/react-vote/compare/v1.3.5...v1.3.7
[1.3.5]: https://github.com/zerocho/react-vote/compare/v1.3.4...v1.3.5
[1.3.4]: https://github.com/zerocho/react-vote/compare/v1.3.2...v1.3.4
[1.3.2]: https://github.com/zerocho/react-vote/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/zerocho/react-vote/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/zerocho/react-vote/compare/v1.2.1...v1.3.0
[1.2.1]: https://github.com/zerocho/react-vote/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/zerocho/react-vote/compare/v1.1.1...v1.2.0
[1.1.1]: https://github.com/zerocho/react-vote/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/zerocho/react-vote/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/zerocho/react-vote/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/zerocho/react-vote/compare/v1.0.0...v1.0.1