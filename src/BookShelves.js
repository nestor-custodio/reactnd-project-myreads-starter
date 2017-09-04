import React from 'react';
import { Link } from 'react-router-dom';

import BookShelf from './BookShelf.js';


class BookShelves extends React.Component {

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads App</h1>
        </div>
        <div className="list-books-content">
          {
            this.props.shelves.map((shelf) => {

              let booksOnShelf = this.props.books.filter((book) => {
                return (book['shelf'] === shelf.code);
              });  // let booksOnShelf = *.books.filter(...)

              return (
                <BookShelf
                  key={shelf.code}
                  code={shelf.code}
                  name={shelf.name}
                  books={booksOnShelf}
                  shelves={this.props.shelves}
                />
              )  // return (...)

            })  // *.shelves.map(...)
          }
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )  // return (...)
  }  // render() {...}

}  // class BookShelves


export default BookShelves;
