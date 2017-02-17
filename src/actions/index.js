export default function selectBook(book) {
  // selectBook is an ActionCreator, thus needs to return an actions
  // which is an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
