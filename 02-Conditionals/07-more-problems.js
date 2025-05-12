/*Write a JavaScript program to check the divisibility of a number by 5 and 11. 
The program should:

Print "The number is divisible by both 5 and 11" if the number is divisible by both 5 and 11.

Print "The number is divisible by 5 but not 11" if the number is divisible by 5 but not by 11.

Print "The number is divisible by 11 but not by 5" if the number is divisible by 11 but not by 5.

Print "The number is neither divisible by 5 nor 11" if the number is divisible by neither 5 nor 11 
*/











let num = 20;
if(num%5 === 0 && num%11 === 0) {
    console.log("The number is divisible by both 5 and 11");
} else if(num%5 === 0) {
    console.log("The number is divisible by 5 but not 11");
} else if(num%11 === 0) {
    console.log("The number is divisible by 11 but not by 5");
} else {
    console.log("The number is neither divisible by 5 nor 11");
}







//Write a Javascript program to check whether a character is alphabet or not.












/* let char = 'A'; */

let alphabet = "b";
if ((alphabet >='a' && alphabet <='z') || (alphabet >= 'A' && alphabet <= 'Z')) {
    console.log("it is a alphabet");
}else {
    console.log ("not a alphabet");
}








/* if((char >= 'A' && char<='Z') || (char>='a' && char<='z')) {
    console.log('The character is an alphabet')
} else {
    console.log('The character is not an alphabet')
}  */


