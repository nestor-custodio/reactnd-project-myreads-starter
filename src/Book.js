import React from 'react';


class Book extends React.Component {

  render() {

    let authors = '(unknown)';
    if (this.props.book.authors.length > 0) authors = this.props.book.authors[0];
    if (this.props.book.authors.length > 1) authors += ', et al.';

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: ('url("' + this.props.book.imageLinks.thumbnail + '")') }}></div>
          <div className="book-shelf-changer">
            <select defaultValue="none">
              <option value="none" disabled>Move to...</option>
              {
                this.props.shelves.map((shelf) => {

                  return (
                    <option
                      key={shelf.code}
                      value={shelf.code}
                    >{shelf.name}</option>
                  )  // return (...)

                })  // *.shelves.map(...)
              }
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )  // return (...)

  }  // render() {...}

}  // class Book


export default Book;
