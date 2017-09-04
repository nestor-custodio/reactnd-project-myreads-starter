import React from 'react';

import Book from './Book.js';


class BookShelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.map((book) => {

                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      shelves={this.props.shelves}
                      onReshelf={this.props.onReshelf}
                    />
                  </li>
                )  // return (...)

              })  // *.books.map(...)
            }
          </ol>
        </div>
      </div>
    )  // return (...)
  }  // render() {...}

}  // class BookShelf


export default BookShelf;
