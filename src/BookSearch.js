import React from 'react';
import { Link } from 'react-router-dom';

import Book from './Book.js';
import * as BooksAPI from './BooksAPI';


class BookSearch extends React.Component {

  state = {
    booksFound: []
  };  // state = {...}

  runLookup(searchTerms) {
    BooksAPI.search(searchTerms, 20).then((books) => {

      const booksIsAnArray = (books.constructor === Array);
      this.setState({ booksFound: (booksIsAnArray ? books : []) });

    });  // BooksAPI.search(...).then(...)
  }  // runLookup() {...}

  render() {

    // Merge shelf data from "books" prop to "booksFound" state.
    let booksFoundWithShelfData = this.state.booksFound.map((bookFound) => {
      let shelfCode = this.props.books.reduce(
        (shelfCode, book) => {
          if (bookFound.id === book.id) return book.shelf;
          else return shelfCode;
        },  // () => {...}
        'none'
      );  // let shelfCode = *.books.reduce(...)
      bookFound.shelf = shelfCode;

      return bookFound;
    });  // booksFoundWithShelfData = *.booksFound.map(...)

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => { this.runLookup(event.target.value); }}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              booksFoundWithShelfData.map((book) => {

                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      shelves={this.props.shelves}
                      onReshelf={this.props.onReshelf}
                    />
                  </li>
                )  // return (...)

              })  // booksFoundWithShelfData.map(...)
            }
          </ol>
        </div>
      </div>
    )  // return (...)
  }  // render() {...}

}  // class BookSearch


export default BookSearch;
