//use reduce to build complex structures
const numbers = [1, 2, 3, 4, 5, 6];
/*
{
  odd: [1, 3, 5],
  even: [2, 4, 6]
}
*/

//create an object
//create two arrays inside it
//push numbers into each array based on even or odd





















/* const obj = numbers.reduce((accumulator,number) => {
    //console.log(number);
    const type = number%2 === 0? "even" : "odd"

    if(!accumulator[type]) {
        accumulator[type] = [];
    }

    accumulator[type].push(number)

    return accumulator
},{})

console.log(obj) */