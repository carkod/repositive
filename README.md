## Installation

The usual `npm install` and `npm start` should work

## Tests

The usual `npm run test`. Couldn't do much more as it would exceed time too much. Only focused on testing for purposes of the test.


## Notes

Code Challenge for Repositive. Completed:
- [x] React application
- [x] Shows name, occurrences and bar.
- [x] Largest bar on top. Data manipulation:
1. Turn object into a proper  `{ name: key, value: value }` type of array of objects (I would argue against doing this in front-end, but for the purposes of this test, I did it). Console.log shows the input data
2. Separate data in the container component (App.js gets fed data only)
- [x] Simple unit tests and one undefined test check
- [x] Random colors, bar colors change in each refresh.
- [x] Bar color fading (Simple math, I believe it is pretty efficient, at first I thought of doing it with switch)
- [x] Functional style (higher order functions that can be expanded, very simple components for max reusability)
- [x] CSS composition using BEM methodology, colors, mixins, would be imported into a central style.scss which would be imported in all components, modular component styles these optionally imported into each component that needs it.

Time restrictions did not allow (although I can do)
- [ ] No API, no mock services
- [ ] No state management. There are no actions, so there was no need for redux or state management
- [ ] No async calls. The way I would deal with it, is using redux-saga, this avoids what I call the "Promise hell".then().then().then().then()....
