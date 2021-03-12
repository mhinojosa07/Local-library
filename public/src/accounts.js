// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id == id);
return result;
}



function sortAccountsByLastName(accounts) {
  
  let result = accounts.sort((nameA, nameB) => nameA.name.last < nameB.name.last ? -1 : 1);
  console.log(result)
  return result;
 
}



function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) { 
      if (book.borrows[i].id === account.id) {acc++;

  }}
  
  return acc; }, 0);
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed=[];
  books.forEach(book => {
    let borrowArray = book.borrows;
    if (borrowArray.find(borrow => borrow.id === account.id && borrow.returned === false)) {
      booksPossessed.push(book);
    }
  })
  
  booksPossessed.forEach(book=>{
    let author = authors.find(person => person.id === book.authorId);
    book['author'] = author;
  })
  console.log(booksPossessed);
  return booksPossessed;
  
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
