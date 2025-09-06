//call method in js
//With the call() method, you can write a method that can be used on different objects.
//the first argument inside call method is always a reference to the this variable

//difference  between call and apply

//activity
//write a name object with first and last  name and use a greet method to log the names, later with the city
//use call and apply as applicable

let name = {
  firstName : 'Chetana',
  lastName : 'Sen'
}


let name1 = {
  firstName : 'Gayathri',
  lastName : 'T'
}
 function greet(city,age) {
    console.log(`Hello ${this.firstName} ${this.lastName} of ${age} from ${city}`)
  }


greet.call(name, 'hyd',19);
greet.apply(name1,['bombay',19] );






//assignment 1 //assignment 2














/////////////////////////////////////////

//assignment

const person1 = { name: "John" };
const person2 = { name: "Mary" };

//define sayAge function which logs '[person Name] is [person age] years old
//use the call method to use the sayAge function on person1 to print 'John is 25 years old'
//use the apply method to use the sayAge function on person1 to print 'Mary is 28 years old'

function sayAge(age) {
  console.log(`${this.name} is ${age} years old`)
}

sayAge.call(person1,25)
sayAge.apply(person2,[28])





//assignment 2

const button = {
  text: "Click me",
  click() {
    console.log(this.text);
  },
};

const anotherButton = { text: "Don’t click me" };

//How can you make button.click print "Don’t click me" without modifying button?
button.click.call(anotherButton);












