//ternary operator in JS is like a shorthand for if else
//the word ternary comes from a latin word called ternarius 
//which means composed of three parts

//condition ? expression_if_true : expression_if_false

//exmple

 let marks = 75;

marks>40 ? console.log("passed") : console.log("failed");

//age to vote








//when not to use
//when it hurts readability

/* let score = 85;
let grade = score > 90 ? "A" : score > 80 ? "B" : score > 70 ? "C" : score > 60 ? "D" : "F";
console.log(grade); */


//Write a Javascript program to check whether a year is leap year or not.
//condition 1 - all years which are divisible by 4 but not the ones divisible by 100
//condition 2 - all years divisble by 400

/* let year = 2025;

if((year%4 === 0 && year%100 != 0) || (year%400 === 0)) {
    console.log(year,'is leap year');
} else {
    console.log(`${year} is not a leap year`);
} */


// Write a Javascript program to check whether a character is an alphabet, digit or a special character.

let char = 7;

if((char>='A' && char<='Z') || (char>='a' && char<='z')) {
    console.log(`${char} is an alphabet`);
} else if(char>=0 && char<=9) {
    console.log(`${char} is a number`);
} else {
    console.log(`${char} is a special character`);
}