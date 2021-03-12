// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let results = authors.find((author) => author.id == id);
  return results
}

function findBookById(books, id) {
  let results = books.find((authors) => authors.id == id);
  return results
}

function partitionBooksByBorrowedStatus(books) {

    let borrowedBooklists = books.filter((book) => book.borrows[0].returned === false);
    let returnedBookList = books.filter((book) => book.borrows[0].returned !== false);
   
  
  return [borrowedBooklists, returnedBookList];

}
function getBorrowersForBook(book, accounts) {
  let result = [];
  let borrowArray = book.borrows;  
  borrowArray.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  console.log(result);
  return result.slice(0,10);
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
