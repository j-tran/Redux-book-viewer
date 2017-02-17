// State arg is not application state, only state
// that this reducer is responsible for
// we use this state arg to modify it and return it
export default function (state = null, action) { // es6 syntax that sets default value if arg is undefined
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
