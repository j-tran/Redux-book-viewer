import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectBook from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li
        key={book.title}
        className="list-group-item"
        onClick={() => this.props.selectBook(book)}
      >{book.title}
      </li>
    ));
  }
  render() {
    return (
      <ul className="list-group col-lg-4 col-md-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as this.props inside of BookList
  return { books: state.books };
}

// Anything returned from this function will end up as props on BookList container
// i.e. the props passed to first arg in bindActionCreators. (this.props.selectBook)
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the return value should be passed to all reducers
  // bindActionCreator takes our action-creator and sends it to dispatch
  // dispatch takes function and sends it to all reducers
  return bindActionCreators({
    selectBook, //same as selectbook:selectbook (is destructuring)
  }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
