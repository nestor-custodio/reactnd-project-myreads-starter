import React from 'react';
import { Route } from 'react-router-dom';

import BookShelves from './BookShelves.js';
import BookSearch from './BookSearch.js';
import * as BooksAPI from './BooksAPI';

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
    BooksAPI.getAll().then((books) => { this.setState({ books: books }) });
  }  // componentDidMount() {...}

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookShelves
            books={this.state.books}
            shelves={this.state.shelves}
          />
        )} />

        <Route exact path="/search" render={() => (
          <BookSearch />
        )} />

      </div>
    )  // return (...)
  }  // render() {...}

}  // class BooksApp


export default BooksApp;
