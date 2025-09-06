//example //loop through the array and calculate the final amount of all items
//activity //function chaining

 const orders = [
    {amount:250},
    {amount:400},
    {amount:100},
    {amount:325}
 ]

 
 //step 1 : use a loop to calculate the total amount
 //step 2: use reduce to calculate the total amount

/*  let sum = 0;
 for(let i=0; i<orders.length; i++) {
  sum += orders[i].amount
 }
console.log(sum)  *///1075


//using reduce
let sum = orders.reduce((total,order) => {
  console.log(total,order)
  return total + order.amount //250+400
}, 0)

console.log(sum)










//activity
/* Use function chaining to filter products with price > 500, 
applies 10% discount, and calculates the total amount after discount
*/

const products = [
  { name: "Notebook", price: 200 },
  { name: "Pen", price: 30 },
  { name: "Laptop", price: 50000 },
  { name: "Bag", price: 700 }
];


let finalSum = products
              .filter(p => p.price>500)
              .map(p => p.price*0.9)
              .reduce((total,price) => total+price,0)
console.log(finalSum)











 
 /* let sum = 0;
 for(let i=0; i<orders.length; i++) {
    sum += orders[i].amount
 }

 console.log(sum) */ //1075

 //let us implement this using reduce

/*  let sum = orders.reduce((total, order) => {
    console.log(total,order)
   return total + order.amount
 },0) 

 //even shorter version
/*  let sum = orders.reduce((total,order) => total+order.amount,0 ) */

// console.log(sum); //1075 */


/* 
const products = [
  { name: "Notebook", price: 200 },
  { name: "Pen", price: 30 },
  { name: "Laptop", price: 50000 },
  { name: "Bag", price: 700 }
];


let total = products
               .filter(product => product.price>500)
               .map(product => product.price*(90/100)) //returning only prices here
               .reduce((sum,price) => sum+price,0)


console.log(total) */