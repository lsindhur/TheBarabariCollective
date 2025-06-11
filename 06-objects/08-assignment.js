/* const user = {
  username: "srija_dev",
  email: "srija@example.com",
  city: "Hyderabad"
};

const input = prompt("what do you want?")

if(input in user) {
    console.log(user[input]);
} else {
    console.log('the detail is not present')
} */

/* 
const marks = {
    math: 70,
    english: 65,
    science: 80
  };

const updatedMarks = {}

for(let key in marks) {
    updatedMarks[key] = marks[key] + 5;
}

console.log(updatedMarks) */


/* const book =  {
  title: "The Mystery Box",
  author: "A. Writer",
  publishedYear: 2010,
  isAvailable: true
};

book.title = "The secret key";
book.genre = "thriller";
delete book.isAvailable;
delete book["author"];

console.log(book); */


const book = {
    name : 'wild',
    price: 399,
    discount: 20,

    calculateFinalPrice: function () {
        return this.price - (this.price* (this.discount/100)  )
    },

    updatedDiscount : function(newDiscount) {
        this.discount = newDiscount;
        return this.price - (this.price * (this.discount/100))
    }
}

console.log(book.updatedDiscount(20));