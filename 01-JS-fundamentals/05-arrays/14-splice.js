//examples4
//summary

//splice
 //changes the content of the original array
 //by deleting or replacing exisiting elements 
 //or adding new elemenets

 //syntax
 // array.splice(start,deleteCount,item1,item2,...)


 //const fruits = ["apple","orange","banana"];

 //example 1
 
 //fruits.splice(1,2) //??  [apple]

 //console.log(fruits); 







 //example 2
 //modify 
 //
 // orange with strawberry
 
//look at the original syntax and guide me

//syntax
 // array.splice(start,deleteCount,item1,item2,...)

 //fruits.splice(1,1,"strawberry");
 //console.log(fruits);










 //fruits.splice(1,1,"strawberry")
 //console.log(fruits);







//example 3
 //now modify both orange and banana with strawberry and watermelon
 // // array.splice(start,deleteCount,item1,item2,...)


/* fruits.splice(1,2,"strawberry","watermelon");
console.log(fruits); */







 
 //fruits.splice(1,2,"strawberry","watermelon");
 //console.log(fruits);







 //example 4
 const fruits = ["apple","orange","banana"];
 //now lets just add new elements to the array
 //add muskmelon and berry towards the end
 //what is the syntax?? 
 // // array.splice(start,deleteCount,item1,item2,...)
 fruits.splice(2,0,"muskmelon","berry")
 console.log(fruits);







 /* fruits.splice(4,0,"muskmelon","berry")
 console.log(fruits); */







 //example 4
 //now lets just add new elements to the array
 //add muskmelon and berry from index 1
 // // array.splice(start,deleteCount,item1,item2,...)









 //summary
 //what is the difference between slice and splice??
 





 


 //slice does not modify original array but splice does
 //slice has a range but splice doesn't
 //slice can only extract
 //splice can insert, remove or replace









 