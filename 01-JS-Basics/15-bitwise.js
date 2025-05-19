//bitwise AND, OR, XOR 
//Bitwise operators work on the binary representations of numbers (0s and 1s). Unlike logical operators (which return true/false), bitwise operators perform operations at the bit level.
//AND, OR, XOR truth tables 
//3 activities

console.log(true && true) //true
console.log(true || false) //true
console.log(10 && 5 ); //5
console.log(10 && 5 && 6); //6
//falsy values = ' ',false, null, 0, undefined



//console.log(10&5);
//console.log(10|5);



//truth table

//A B A&B
//1 1 1
//0 1 0
//0 0 0
//1 0 0

console.log(10 & 5);

//binary representation of 10 and 5

//64 32 16 8 4 2 1   
//0  0  0  1 0 1 0 = 10
//0  0  0  0 1 0 1 = 5
//0  0  0  0 0 0 0 = 0



//activity

//console.log(12|4);


//16 8 4 2 1  //12-8 //4
//0  1 1 0 0 = 12
//0  0 1 0 0 = 4
//0  1 1 0 0 = 12





//console.log(6&2);


//bitwise OR
// A B A|B
// 1 0 1
// 1 1 1
// 0 1 1
// 0 0 0

//console.log(10|5);

//64 32 16 8 4 2 1





//activity
//console.log(25|26);
//console.log(8|6);



//bitwise XOR (exclusive OR)

//a b a^b
//1 0 1
//0 1 1
//1 1 0
//0 0 0

//console.log(10^12);

