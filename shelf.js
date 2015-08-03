'use strict';

// SHELF
// can add/remove book
// store the books in an array
function Shelf(shelfName){
  this.shelfName = shelfName;
  this.bookList = []; // Array to store books
  // Make book and add to array
  // id # for possible search, easier assignment than string
  this.addBook = function(author, title, id) {
    var book = new Book(author, title, id);
    this.bookList.push(book);
    console.log('we have added ' + author + ' - ' + title + ' - ' + id);
  };
  // Remove book
  this.removeBook = function(author) {
    for (var i = 0; i < this.bookList.length; i++) {
      if (this.bookList[i].author === author) {
        console.log('we have removed the book by ' + this.bookList[i].author);
        this.bookList.splice(i, 1);
        return;
      }
    }
    console.log('we do not have this book on the shelf');
  };
}

// display books
Shelf.prototype.showBook = function(bookList) {
  for (var i = 0; i < shelf.bookList.length; i++) {
    $('#displayBook').append('<li>' + shelf.bookList[i].author + ' - ' + shelf.bookList[i].title + '</li>');
  }
}; // end of display books

var shelf = new Shelf('Fiction');
console.log(shelf);

shelf.addBook('Sedaris', 'Me Talk Pretty', 1);
shelf.addBook('Fisher', 'Love in a Dish', 2);
shelf.removeBook('Sedaris');
shelf.removeBook('Murakami');

shelf.showBook(shelf.bookList);

console.log(shelf.addBook('Sedaris', 'Me Talk Pretty', 'Humor', 1));
console.log(shelf.addBook('Fisher', 'Love in a Dish', 'NonFiction', 2));
console.log(shelf.bookList.length);

console.log(shelf.removeBook('Sedaris'));
console.log(shelf.removeBook('Murakami'));
console.log(shelf.bookList.length);
console.log(shelf);

