//tell me the order in which this code is executed

function abc(){
    console.log('Im just getting started with Adv JS');
} 

console.log('The Start'); 

function def(){
    console.log('Hello there');
} 
abc();  
def(); 
console.log('The End'); 

//Hello there ////The Start
//Im just getting started with Adv JS
//The Start //Hello there
//The End 

/*

function abc(){
    console.log('Im just getting started with Adv JS');
} // function declared, no output yet

console.log('The Start'); // 1️⃣ OUTPUT: The Start

function def(){
    console.log('Hello there');
} // function declared, no output yet

abc();// 2️⃣ OUTPUT: Im just getting started with Adv JS
def();// 3️⃣ OUTPUT: Hello there

console.log('The End');// 4️⃣ OUTPUT: The End

*/