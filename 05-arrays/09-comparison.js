//so tell the answer to following comparisons

let a = 5;
let b = a; //b=5; //primitive data type //comparison happens by value

console.log(b === a) //?? //true //we didn't change the value of b afterwards, so it is true


let x = 5;
let y = 5; //primitive data type //compare by value


console.log(x === y); //?? //true //?? both are same values


let obj = {city:'hyd'}
let obj1 = obj; //non primitive //comparison happens by checking its reference

console.log(obj1===obj); //?? //true //bth have same reference //same address to the location in heap memory


let arr3 = [3,4]; 
let arr4 = [3,4];
//both of them have different locations in heap memory

console.log(arr3 === arr4); //?? false








//just like the way they are stored in memory,

//primitives are compared by value

//but non primitives are compared by reference