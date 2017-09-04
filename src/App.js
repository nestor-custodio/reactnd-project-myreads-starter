import React from 'react';
import { Route } from 'react-router-dom';

import BookShelves from './BookShelves.js';
import BookSearch from './BookSearch.js';
import * as BooksAPI from './BooksAPI';
// WHEN DEBUGGING API ISSUES:
// window.BooksAPI = BooksAPI;

import './App.css'


class BooksApp extends React.Component {

  state = {
    books: [],
    shelves: [
      {
        code: "currentlyReading",
        name: "Currently Reading"
      },
      {
        code: "wantToRead",
        name: "Want To Read",
      },
      {
        code: "read",
        name: "Read"
      }
    ]  // shelves: [...]
  };  // state = {...}

  componentDidMount() {
    this.resetAllBookData();
  }  // componentDidMount() {...}

  resetAllBookData() {
    BooksAPI.getAll().then((books) => {

      this.setState({ books: books });

    });  // BooksAPI.getAll().then(...)
  }  // resetAllBookData() {...}

  placeBookOnShelf(book, shelf) {
    BooksAPI.update(book, shelf).then((booksOnShelves) => {

      // Lazy reload of all book data and shelf contents. We could be smarter about how we're doing
      // this, but it works just fine, and -- given the tiny domain of available books -- should not
      // pose any significant performance problem.
      this.resetAllBookData();

    });  // BooksAPI.update(...).then(...)
  }  // placeBookOnShelf() {...}

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelves
            books={this.state.books}
            shelves={this.state.shelves}
            onReshelf={(book, shelf) => { this.placeBookOnShelf(book, shelf); }}
          />
        )} />

        <Route exact path="/search" render={() => (
          <BookSearch
            shelves={this.state.shelves}
            onReshelf={(book, shelf) => { this.placeBookOnShelf(book, shelf); }}
          />
        )} />

      </div>
    )  // return (...)
  }  // render() {...}

}  // class BooksApp


export default BooksApp;
