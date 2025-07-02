//today we are going to learn about a few array methods
//array methods are built in functions in JS that are available for all array objects

//these methods help you manipulate, access or transform the data inside an array



//inserting elements at the end of an array : push

const arr = [1,2,3];

arr.push(23);

console.log(arr); //?? [1,2,3,23]


//Inserts new elements at the beginning of the array.

arr.unshift("Mars");

console.log(arr); //?? [mars,1,2,3,23]


// .pop() = deletes the last element
arr.pop();

console.log(arr); //?? [mars,1,2,3]


//.shift() = removes elements from the start of the array

arr.shift();
console.log(arr); //?? [1,2,3]
