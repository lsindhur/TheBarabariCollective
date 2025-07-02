//so lets learn about settimeout function
//setTimeOut is a built in JS function which executes the task after a certain delay
//activity


//write a function to say hello
//delay its execution by 2 seconds

/* const sayHello = function() {
    console.log('hello')
} */



//1 sec = 1000ms
//setTimeout(function,ms) //1000

setTimeout(() => {
    console.log('hello')
},5000);











/* const sayHello = function () {
    console.log('Hello!')
}
 */
//to delay it, we can use set time out 
//set time out takes 2 parameters

/* setTimeout(sayHello,3000)  */



//lets say we don't want to write a seperate function just to be used inside setTimeout
//then we can use an anonymous function to be used only inside setTimeout
//rewrite setTimeout using anonymous functions







/* setTimeout(function () {
    console.log('Hello!')
},3000
) */




setTimeout(() => {
    console.log('Hello!')
},3000
) 



//write a setTimeout function to print your name using all 3 different ways
//firstly use a function inside the settimeout
//secondly use anonymous function expression
//thirdly use anonymous arrow functin
//3 seconds delay