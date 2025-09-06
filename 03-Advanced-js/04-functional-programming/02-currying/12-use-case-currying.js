//some practical use case

//use case 1
//Avoid Repetition by partial application

//write a regular function which says hello [name]
//demonstrate how repeatition of hello can be avoided with partial application

 function greet(name, greeting) {
    return `${greeting}, ${name}!`;
}

/* greet('Priya','hello');

greet('Manasa','hello');

greet('Uma','hello');
 */



const greet2 = (greeting) => (name) => greeting + ' ' + name

const greetMe = greet2('hello'); //return the inner function 

console.log(greetMe); 

console.log(greetMe('Gayathri'));
;





//activity
//Part 1: Without Currying
/*
Write a function total(sign, amount) that takes two arguments:
    sign: a currency symbol
    amount: a number
    and returns them as a string.

    example : console.log(total('$', 350)) // $ 350
    example : console.log(total('$', 400)) // $ 400

    Notice: Every time you want a different amount, you have to repeat the currency sign argument.
*/

/* function total(sign,amount) {
    return `${sign} ${amount}`
} */



/*

Part 2: With Currying
Rewrite the function so that it takes one argument at a time (currying):
    First, pass in the sign.
    It should return another function that takes the amount.

    example : const totalEU = total('€') //alt + 0128
    example : const totalUS = total('$')


    Now call these functions with different amounts:
    example : console.log(totalEU(1000)) // € 1000
    example: console.log(totalUS(2000)) // $ 2000

*/

function total(sign) {
    return (amount) => {
        return `${sign} ${amount}`
    }
}

const totalUS = total('$');
const totalEuro = total('€')
console.log(totalUS(2000));
console.log(totalEuro(200000))












/* function total(sign,amount) {
    return `${sign} ${amount}`
}

console.log(total('$',2000))
console.log(total('€',2000)) */

/* function total(sign) {
    return (amount) => {
        return `${sign} ${amount}`
    }
}

const totalUS = total('$')
const totalEU = total('€')

console.log(totalEU(2000))
console.log(totalUS(2000)) */



