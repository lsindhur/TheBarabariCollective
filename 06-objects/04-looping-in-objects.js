const book = {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
    published: 2018
  };
//use a for..in loop which gets the keys //bracket //dot

for(let i in book) {
  console.log(book[i]);  //title //autho 
}











//Explanation:
//Dot notation (book.i) looks for the property literally named "i".

//Bracket notation (book[i]) looks for the property whose name is the value stored in i.

//Only bracket notation can work when the key is in a variable.



//mutability vs immutability
//changing a value after t has been created
//which values are mutable?? non-primitive
//mutation vs reassignment?? 

//objects //2 ways of declare //object literal {} //object constructor 
//access/add properties .notation, []notation
//[]notation - when identifiers are not valid, when he values are dynamic
//loop through an object //for..in 