
//examples
//summary

const arr1 = [1,2,3]; //panjagutta
//arr1 = panjagutta //[1,2]

//this variable only has a reference to the place in memory where this value is stored

const arr2 = arr1; 
//arr2 = panjagutta //[1,2]

//console.log(arr2); //[1,2,3]

//change value of arr2
arr2[0] = 2; 

//console.log(arr2); // [2,2,3] 
//console.log(arr1); //[2,2,3] 
//why do you think arr1 and arr2 change if we modify either of the variable values??

//using string

let city1 = 'hyderabad';
let city2 =  city1; //a new copy got created  //think of it like ms word
console.log(city2); //hyderabad

city2 = 'bombay';
console.log(city2); //bombay

console.log(city1); //hyderbad


//only an object is a non primitive data type
//everything else is a primitve data type

//what is the difference??
//major difference is the way they are stored in your memory
//primitive data type =>> their value is stored in memory
//non primitive dta type =>> a reference/pointer to the place in  memory where the value is stored

//contact saved in your phone
//save a contact called mom
//it only contains the phone number which connnects you to your mom 




let a = 5;
let b = a;

//b= 5;












//summary

//the major difference lies in the way they are stored
//while primitive data types hold the value directly
//but objects hold only a reference to that value in memory
//think of a phone number in your phone, it is only a pointer to someone







