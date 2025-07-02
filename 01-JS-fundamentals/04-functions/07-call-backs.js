//introducing function call backs
//a callback is a function which is passed as an argument to another function













//example
//write a function to say bye
//pass it as an argument to be called inside another function called greetUser
//when we invoke greetUser, it should print Hi! and then print bye!
 function sayBye() {
    console.log("bye");
}

//sayBye() //bye!!

function greetUser(param) {
    console.log('hi');
    param();
}

greetUser(sayBye());




















/* function sayGreetings(callback) {
    console.log('hello')
    console.log(callback())
}

function sayBye() {
    return 'bye'
}

sayGreetings(sayBye); */


//why do we need callbacks??
//To delay execution until a certain point.
//to keep your code modular






