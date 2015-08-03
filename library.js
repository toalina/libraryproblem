'use strict';

// LIBRARY
// can add/remove shelves (like todo list)
// store the shelves in an array

function Library() {
  this.shelfList = []; // Array to store shelves

  // Make shelf and add to array
  this.addShelf = function(shelfName) {
    var shelf = new Shelf(shelfName);
    this.shelfList.push(shelf);
    console.log('we have added the shelf ' + shelfName);
    return shelfName;
  };

  // remove shelf by looking for match in shelfName
  this.removeShelf = function(shelfName) {
    for (var i = 0; i < this.shelfList.length; i++) {
      if (this.shelfList[i].shelfName === shelfName) {
        console.log('we have removed the shelf ' + this.shelfList[i].shelfName);
        this.shelfList.splice(i, 1); // matching index, splice that item
        return; // break out of loop
      }
    }
    console.log('we do not have that shelf in our library');
  };
}

// display books
Library.prototype.showShelf = function(shelfList) {
  for (var i = 0; i < library.shelfList.length; i++) {
    $('#displayShelf').append('<li>' + library.shelfList[i].shelfName + '</li>');
  }
}; // end of display books

var library = new Library();
library.addShelf('Fiction');
library.addShelf('NonFiction');
library.addShelf('Humor');
library.removeShelf('Fiction');
library.removeShelf('SciFi');

library.showShelf(library.shelfList);

console.log(library.addShelf('Fiction'));
console.log(library.addShelf('NonFiction'));
console.log(library.addShelf('Humor'));
console.log(library.shelfList.length);

console.log(library.removeShelf('Fiction'));
console.log(library.removeShelf('SciFi'));
console.log(library.shelfList.length);
console.log(library);

