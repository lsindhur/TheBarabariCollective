
setTimeout(function (){
    console.log("I'm just getting started with Advanced Javascript");
}, 4000);

console.log('The Start');

function abc(){
    console.log('Hello there');
    setTimeout(function (){
        console.log('Hello World');
    }, 3000);
}

abc();
console.log('The End');



//output
//The Start
//Hello there
//The End
//with 3 seconds delay //Hello World'
//with 4 seconds delay //I'm just getting started with Advanced Javascript