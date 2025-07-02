/*

https://blog.ioanatiplea.dev/core-javascript-primitive-vs-non-primitive-data-types#heading-object

*/

let name = "sindhura";
console.log(name[0]);

//auto boxing
//string are not objects
//but when you try to access a property like str[0],or call a method like
//str.touppercase(),JS automatically wraps them in temporary string objects (auto boxing)

console.log(typeof "sindhura"); //string
console.log(typeof new String("sindhura")); //object //auto boxing

//When you write:
"hello".toUpperCase();

//js implicitly does this:
new String("hello").toUpperCase();

//Then discards the object and gives you the result.

console.log(name.length);

//When does autoboxing kick in?
//Only when you access a property or call a method on the string, like:
//str.length   
//str[0] 
//str.toUpperCase() 

//In those moments, JavaScript internally does something like:
new String(str).length

//Then immediately discards the object after the operation.