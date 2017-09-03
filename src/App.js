import React from 'react';
import { Route } from 'react-router-dom';

import BookShelves from './BookShelves.js';
import BookSearch from './BookSearch.js';
// import * as BooksAPI from './BooksAPI'

import './App.css'

class BooksApp extends React.Component {
  state = {
    // shelves: {
    //   "wantToRead"      : "Want To Read",
    //   "currentlyReading": "Currently Reading",
    //   "read"            : "Read"
    // }
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelves />
        )} />

        <Route exact path="/search" render={() => (
          <BookSearch />
        )} />

      </div>
    )
  }
}

export default BooksApp;
