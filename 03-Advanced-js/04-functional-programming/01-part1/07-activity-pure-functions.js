//fix impure functions

//function 1
/* let total = 0;
function addToTotal(num) {
  total += num; 
} */

  let total = 0;

  function addToTotal(sum, num) {
    return sum+=num; 
} 

console.log(addToTotal(total,2));
console.log(total)
console.log(addToTotal(total,2));
//why is it impure?
//what is the pure version??






//function 2

function logMessage(msg) {
  return `${Date.now()}: ${msg}`; 
} 

//console.log(logMessage('Server started')) 














/* function addToTotal(sum,num) {
  return sum +num
}

addToTotal(total) */




