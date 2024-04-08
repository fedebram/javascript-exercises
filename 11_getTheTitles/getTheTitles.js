const getTheTitles = function(books) {
    let arr = [];
    let count = 0;
    books.map((book) => {
        arr.splice(count, 0, book.title);
        count ++;
    });
    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
