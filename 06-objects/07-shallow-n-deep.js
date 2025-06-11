//lets learn about Object.assign(target,source)
//can merge multiple objects or copy one object to another

/* let obj1 = {a:1}

let obj2 = obj1 
//console.log(obj2); //{a:1}

obj2.a = 2;
console.log(obj2); //{a:2}
console.log(obj1); //?? //1 //2 */

//when we assign, instead of creating anew copy, they just share the reference
/* let obj1 = {a:1};

let obj2 = Object.assign({},obj1); //oj1 gets copied into obj2
console.log(obj2); //{ a: 1 }

obj2.a = 2;
console.log(obj2); //{ a: 2 }

console.log(obj1); //{a:1}
 */



let person = {
    name : 'sindhura',
    gender : 'female',
    languages: ['french','german','arabic']
}

let copyPerson = JSON.parse(JSON.stringify(person));
console.log(copyPerson);

copyPerson.languages[2] = 'mandarin';
console.log(copyPerson);
console.log(person);





















/* const obj1 = {a:1};
/* const obj2 = obj1;

console.log(obj2); //same location or different location??
obj2.a = 2; 

console.log(obj1); // */

/* const obj2 = Object.assign({},obj1) */
//console.log(obj2);

//assign method creates a copy and doesn't assign the reference

/* obj2.a = 2; */
//console.log(obj2);
//console.log(obj1);

//bt there is a catch

/* const person = {
    name :'sindhura',
    languages:['german','french','mandarin']
} */

/* const copy = Object.assign({},person)
console.log(copy);

copy.name = 'sahana';


copy.languages[0] = 'hindi'
console.log(copy);
console.log(person); */

//why?? 
//assign method only creates a shallow copy
//it creates a copy of top level properties 
// It does not deeply clone nested structures (like arrays or objects).


//bt there is a workaround to create a deep clone

/* const copy = JSON.stringify({
    name :'sindhura',
    languages:['german','french','mandarin']
})

console.log(JSON.parse(copy)); */

















