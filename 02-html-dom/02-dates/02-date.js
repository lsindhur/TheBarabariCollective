//intro to +new Date() /timestamp 
// epoch /time starting from a fixed point
//time conversion
//activity
//converting milliseconds back to a readable format


let now = +new Date();
console.log(now); //1751970213974 //timestamp

//1 sec = 1000 ms
// minute = 60 * 1000 ms
//1 hour = 60 * 60 * 1000ms
//1 day = 24 * 60 * 60 * 1000ms

console.log(now/(24 * 60 * 60 * 1000))





/* Because the Unix operating system, developed in the late 1960s and early 1970s, defined time starting from a fixed point:

🗓️ January 1, 1970, 00:00:00 UTC

This point is called the epoch, and it’s where Unix time begins. */

//js stores time as number of milliseconds that have passed since unix epoch
//or in other words, jan 1st, 1970 midnight UTC 


//time conversion








//activity
//calculate time right now in milliseconds
//and tell me how many dayes have passed/elapsed since epoch




//if you would like to convert a timestamp back to readable time format:



