//JS doesn't require true or false to perform logical operations

//it treats some values as falsy and rest as truthy;
//falsy values are 
/*
""
NaN
undefined
false
0
null
*/

//rest are truthy











//for example what will be the result of below statement??

console.log(0&&20);  //falsy && truthy //falsy //0









console.log(""&&5);  //falsy && truthy //""


console.log(5&&20);//truthy && truthy //truthy //20

console.log(5&&7&&20); //truthy && truthy && truthy //truthy //20

console.log(10&&0&&30); //truthy && falsy //0









//activity

console.log(100 && 40 && undefined && 15); //undefined
console.log(100 && 40 && "" && 15); //""
console.log( undefined && null && NaN && "hello"); //undefined
console.log(5&&6&&7); //7









//OR

console.log("" || 0 || undefined || null || NaN || "hello"); //hello
console.log("" || "7"); //7






