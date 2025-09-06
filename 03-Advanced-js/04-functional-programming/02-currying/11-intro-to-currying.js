//let us talk about currying and partial application in JS today

//currying means transforming a function that takes multiple arguments 
//into a series of functions, each taking one argument;

//addNum //curried version //shorter syntax with fat arrow

function addNum(a,b) {
    return a+b;
}

console.log(addNum(2,3))


function addNum2(a) {
    return (b) => {
        return a+b;
    }
}

const addNum3 = (a) => (b) => a+b;

console.log(addNum3(2)(3));

















