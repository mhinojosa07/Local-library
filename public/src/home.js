// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  let result = 0;
for (let i = 0; i < books.length; i++) {
  result += 1;
}
return result       
}

function getTotalAccountsCount(accounts) {
  let result = 0;
  for (let i = 0; i < accounts.length; i++) {
    result += 1;
  }
  return result
}
function getBooksBorrowedCount(books) {
let resultFilter = books.filter((book) => book.borrows[0].returned === false);
   
return resultFilter.length;
}

function getMostCommonGenres(books) {
  let results = {};
  let toArray = [];
results["Science"] = 0

results["Historical Fiction"] = 0

results["Classics"] = 0

results["Travel"] = 0

results["Young Adult"] = 0
results["Nonfiction"] = 0
  for (i = 0; i < books.length; i++) {
    const book = books[i]
switch (book.genre) {
case "Science":
let temp1 = 1 + results["Science"]
results["Science"] = temp1
break
case "Historical Fiction":
let temp2 = 1 + results["Historical Fiction"]
results["Historical Fiction"] = temp2
break
case "Classics":
let temp3 = 1 + results["Classics"]
results["Classics"] = temp3
break
case "Travel":
let temp4 = 1 + results["Travel"]
results["Travel"] = temp4
break
case "Young Adult":
let temp5 = 1 + results["Young Adult"]
results["Young Adult"] = temp5
break
case "Nonfiction":
let temp6 = 1 + results["Nonfiction"]
results["Nonfiction"] = temp6
break
default:
console.log("This book needs a genre") } }
for(let result in results) {
  toArray.push({name: result, count: results[result]})
  }
  const final = toArray.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1))
  
  return final.slice(0,5) 
} 




  function getMostPopularBooks(books) {
    const sliceEnd = books.length > 5 ? 5 : books.length;
    return books
    .map(book => {
        return {
          name: book.title,
          count: book.borrows.length
        }
      })
      .sort((a,b) => b.count - a.count)
      .slice(0, sliceEnd)
  
}


function getMostPopularAuthors (books, authors) {
  return authors.reduce((acc, author) => {
    const thisAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    };
    books.forEach(book => {
      if (book.authorId === author.id) {
        thisAuthor.count += book.borrows.length
      }
    });
    acc.push(thisAuthor);
    return acc;
  }, [])
    .sort((a,b) => b.count - a.count)
    .slice(0,5)
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
}