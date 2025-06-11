const arr = [[22, 33], [2, 3], [222, 333, 44, 55]];


console.log(arr.length) //3
console.log(arr[0].length);//2
console.log(arr[1].length);//2
console.log(arr[2].length);//4

//arr[0]       //arr[1] //arr[1][0] //arr[1][1]   //arr[2] //arr[2][0] //arr[2][1]..arr[2][3]
//arr[0][0]
//arr[0][1]

//3
//arr[0] //arr[1] //arr[2]
for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);    
    for(let j=0;j<arr[i].length;j++ ) {
        console.log(arr[i][j])

    }
} 


//slice
//splice
//looping through array
//fill and filter


//primitive vs non-primitives
//primitives are stored as value vs non-primitives are reference   //stack  
//comparison by value vs comparison by reference
//mutabilty vs immutability

let arr1 = [1,2,3]
let arr2 = [1,2,3]

console.log(arr1 === arr2); //false
//arr1 and arr2 are in different location
//non primitives are compared by reference

let x = 1;
let y = 1;

//x = y

console.log(x === y); //?? //true
//values are in different location
//primitives are compared by value only









