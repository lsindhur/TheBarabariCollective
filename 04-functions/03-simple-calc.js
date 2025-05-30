///Write a function calculate(num1, num2, operator) where:
//operator is a string: "+", "-", "*", or "/".
////The function returns the result of applying the operator on num1 and num2.

//activity1
//so lets say if I write

//calculate(8,5,"+"") //it should return 8
//calculate(8,5,"-") //it should return 3


function calculate(num1,num2,operator) {
    switch(operator) {
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
    }
}

//console.log(calculate(2,3,"+")); //5












/*  function calculate(num1,num2,operator) {
    switch(operator) {
        case "+" :
            return (num1+num2);
        case "-" :
            return (num1-num2);
        case "*" :
            return (num1*num2);
        case "/":
            return(num1/num2);
    }
}  */

/* console.log(calculate(10,0,"/")); */








//activity2
//Write a function repeatString(str, times) that returns the string str repeated number of times.

//example
//Repeat String
//Write a function repeatString(str, n) that returns the string "n" number of times.
//repeatString("Hi! ", 4);  // returns "Hi! Hi! Hi! Hi! "

//use repeat method
//use loop

/* function repeatString(text,num) {
    let str = '';
    for(let i=0; i<num; i++) {
        str+=text+ ' ';
    }

    return str;
}

console.log(repeatString("hello",2)) */





