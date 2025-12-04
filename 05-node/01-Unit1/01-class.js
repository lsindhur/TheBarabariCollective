//access readline

const readline = require('readline');
const multiply = require('./math.js');

//console.log(readline);
 
const rl = readline.createInterface({
   input: process.stdin,
   output:process.stdout
})

rl.question('Hey! What is your name?: ', (name) => {
    console.log(`hey ${name}`);
    rl.close();
}) 