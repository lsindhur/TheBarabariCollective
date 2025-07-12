//An algorithm is a step-by-step set of instructions 
// designed to solve a problem or perform a task.

//write an algorithm to get time 15 minutes ahead
const currentTime = new Date();
console.log(currentTime) //2025-07-10T08:45:42.384Z
console.log(currentTime.getTime()) //1752137142384
console.log(currentTime.getTime() + (15*60*1000))
console.log(new Date(currentTime.getTime() + (15*60*1000)))
/* const presentTime = new Date(currentTime.getTime()+15*60*1000);
console.log(presentTime);
 */


// Write an algorithm that tells me the time 5 hours backward.















/* 
let currentTime = +new Date(); //1751904480808
//console.log(currentTime)

console.log(new Date(currentTime).toString())

//now figure out how do I get time 15 minutes ahead

let futureTime = +new Date() + (15*60*1000);
console.log(new Date(futureTime).toString());

let pastTime = +new Date() - (5*60*60*1000)
console.log(new Date(pastTime).toString()) */