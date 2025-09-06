//closure is a function bundled together with its lexical scope
//when a function returned from another function, they stll remember their lexical scope


//activity //assignment

/* function x () {
    let a = 25;

    function y() {
        console.log(a)
    }

    return y;
}

console.log(x())
const z = x();
z();
 */


for(var i=0; i<=3; i++) {
    setTimeout(() => {
        console.log(i)
    },2000)
}

















/* for(var i=0; i<3; i++) {
    setTimeout(() => {
        console.log(i)
    },2000)
} */










/* function x() {
    let a = 5;
    function y() {
        console.log(a)
    }

    //y()
    return y
} */


//console.log(x()); //function y has access to a because of lexical scoping 
//a function will have access to all the variables in which it is defined

//let z = x();
//z()


//activity 1
/*

Write a function counter() that returns another function 
which increments and prints the count each time it’s called.

const count = counter();
count(); // 1
count(); // 2
count(); // 3
*/


/* function counter() {
    let counter = 0;
    return function() {
        counter++
        console.log(counter)
    }
}

const count = counter();
count();
count();
count();
count(); */



