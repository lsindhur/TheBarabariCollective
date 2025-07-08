//date object
//date constructor function
//decoding time string
//utc - world's standard reference time for all time zones
//utc vs ist - reference locations
//browser environment vs node environment
//node to browser time format - toString()
//browser to node format - new Date('')


let now = new Date();
console.log(now); //utc

let now1 = new Date().toString();
console.log(now1);//ist

let utcTime = new Date('Tue Jul 08 2025 15:47:16 GMT+0530 (India Standard Time)')
console.log(utcTime);//ist to utc