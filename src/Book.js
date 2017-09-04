import React from 'react';


class Book extends React.Component {

  render() {

    let authors = '(unknown)';
    if (this.props.book.authors) {
      if (this.props.book.authors.length > 0) authors = this.props.book.authors[0];
      if (this.props.book.authors.length > 1) authors += ', et al.';
    }  // if [we have author data]

    let default_image_url = '://via.placeholder.com/128x193.png?text=No+Image';
    let image_url = (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) || default_image_url;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${image_url}")` }}></div>
          <div className="book-shelf-changer">
            <select
              value={this.props.book.shelf || 'none'}
              onChange={(event) => { this.props.onReshelf(this.props.book, event.target.value); }}
            >
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
