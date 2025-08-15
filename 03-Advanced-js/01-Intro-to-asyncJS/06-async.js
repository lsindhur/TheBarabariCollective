//hello
//1 sec- I am first
//1.5 sec - I am second
//5 sec = 

console.log('Hello');
setTimeout((id) =>{
    const user = {
        name: 'John Doe',
        age: 25
    };
    console.log(`User ID: ${id} : User Name : ${user.name}, User Age: ${user.age}`);
}, 5000,11);

setTimeout(()=>{
    console.log('Im First');
}, 1000);

setTimeout(()=>{
    console.log('I am second');
}, 1500);




//output
//hello
//1sst second //Im First
//1.5 second //I am second
//5 seconds //User ID: ${id} : User Name : ${user.name}, User Age: ${user.age}