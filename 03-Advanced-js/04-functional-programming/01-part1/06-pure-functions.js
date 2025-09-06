//what are pure function 
//For a given set of inputs, it always returns the same output.
//No side effects:It does not modify anything outside of itself 
    //(like global variables, DOM, files, databases, etc.).



    //example 1
function square(n) {
  return n * n;
}
  

/* console.log(square(2));
console.log(square(2));
console.log(square(2)); */


//example 2

 function greet(name) {
  console.log("Hello " + name);
} 




//example 3

function getCurrentTime() {
  return Date.now();
}

getCurrentTime();










//example 4
//update the array 

/* let arr = [1,2,3]

function isArray(newArr, num) {
  newArr.push(num);
  return newArr;
}
console.log(isArray(arr,4))
console.log(arr); */


//////////////


let arr = [1,2,3]

function isArray(newArr, num) {
  return [...newArr,num]
}
console.log(isArray(arr,4))
console.log(arr);








/*  const arr = [1,2,3];

function addElemenet(num) {
     arr.push(num) 
    
} */





/* addElemenet(4);
console.log(arr);

addElemenet(4);
console.log(arr); */




//Even though addElemenet doesn’t return anything, it changes arr, which lives outside the function.
//That change is an output effect (a side effect).
//breaks both rules of pure functions



//example 5

/* const arr = [1,2,3];

function addElement(a,num) {
     a.push(num);
}

addElement(arr, 4);
console.log(arr);  */






//////////////////////////////////////////////////////////////////////////

//example 6
/* const arr = [1,2,3];

function addElement(a,num) {
     return [...a,num]
}

console.log(addElement(arr,4))
console.log(arr); */