//what are the major difference between primitives and non primitives??

//stored by value vs reference
//mutable vs immutable
//compared by value vs reference

//today let us learn about two more imp array methods called map and for each

//for..in is used for iterating over keys 
//for..of is used to loop over values


/* const arr = [1,2,3]

for(let i of arr) {
    console.log(i); //loops over values //1,2,3
}

for(let i in arr) {
    console.log(i); //0,1,2
} */

let arr = [1,2,3]
//double its value 

/*   for(let i in arr) {
    //console.log(arr[i]); //0
   arr[i] = arr[i]*2; 
}  
 */
//console.log(arr); //2,4,6

/* for(let i of arr) {
    //console.log(i); //1,2,3
    arr[arr.indexOf(i)] = i*2;
} */

//console.log(arr);

//what happens when your array has duplicate values?

/* let duplicateArr = [3,3,2];
for(let i of duplicateArr) {
    //console.log(duplicateArr.indexOf(i)); //0,0,2 but indexes should have been 0,1,2
} */
//this is because indexOf only returns the first index which matches the value


/* const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
  console.log(fruit); //apple banana cherry //doesn't return a new array
}); //do something with each value

//this returns a new array
let fiteredFruits = fruits.filter((fruit) => fruit.length>3)
console.log(fiteredFruits); */

const arr1 = arr.forEach((ele) => ele*2); //foreach is defined to return undefined
console.log(arr1); //undefined

//the purpose of for each is to only perform a function on each value
//✅ Works well if you just want to perform an action (e.g., logging)



const arr2 = arr.map((ele) => ele*2);
console.log(arr2);

