//what are comparison operators??
//examples
//activity 3
//intro to NaN - what is NaN, Number("hello")

//it will compare values and gives the result as true or false



/*
= //assignment x=6; x value becomes 6 //we have assigned 6 to x
== //loose equality => let x = 6 //console.log(x==8)
===
>
>=
<
<=
!=
!==
*/

let x = 5;
//console.log(x==5); //loose equality
//console.log(x=="5"); //even though 5 here is a string, it will convert this string
//into a number //it will treat it x == 5; //true
//console.log(x==="5"); //false //here it will keep the data type as it is //wnt convert string to number

//console.log(x != "5"); //it will turn strng 5 into number 5
//is 5 not equal to 5?? false
//console.log(x !== "5")//it will not change the data type of string
//is number 5 not equal to string 5?? //true

/* console.log(x=10);//10
console.log(x==5); //false 

console.log(x!=5); //true
console.log(x>=5); //true
console.log(x<=5); //false
console.log(x<5); //false
console.log(x>5);   //true */


//console.log(x=="5");  

//console.log(x==="5"); 





//activity2 //
x=5;

//console.log(x>="5");  //true 
//do you think it is asking is number 5 greater than or equal to string 5??
//OR
//is it checking is number 5 greater than or equal to number 5?
//it is converting the data type from string 5 to number 5

//console.log(x<"5");  //false //5 < 5 



//activity 3

console.log(5>"hello"); //false //why??
//JS will try to convert "hello" from string to number
//it fails!!! 
//when JS tries to perform numerical operations on non numerical data, it results
//in the value NaN //Not a Number
//is 5 > NaN //anything compared with NaN is always false 



console.log(5<"hello"); //same thing repeats
//is 5 less than NaN //false








//so what exactly is NaN??
//NaN stands for not a number
//it is the result when JS tries to convert something to a number but fails
//it belongs to the number data type but its broken cousin

//let try with few examples

//console.log(Number("hello")); 
console.log(5-"hello");  //NaN 
//5 - NaN //NaN



