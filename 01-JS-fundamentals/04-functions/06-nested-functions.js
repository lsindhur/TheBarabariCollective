let college = "GDC"

function outer() {
    let city = "Hyderabad"
    console.log('This is the outer function')
    function inner() {
        console.log(`This is the inner function.${city},${college}`) 
        function innerInner() {
            console.log('something')
        }

        innerInner();
    }
    inner();
}



 //function is not defined //inner function will work //ignores the bloclk

outer();

/* inner(); */

//output?? //what do you think will print?




//you can not access inner function from outside the outer function
//The inner function has access to the variables and parameters of the outer function.
//lexical scope









