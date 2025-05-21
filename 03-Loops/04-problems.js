//two problems

//problem 1
/**
 * Write a program to print table of 3
 * 3 x 1 = 3
 * 3 x 2 = 6
 * 3 x 3 = 9
 */

//+ - concatenation means adding both strings without giving space
//, - jst prints the same values by giving space

/* for(let i=1; i<=3; i++) {
    console.log("3 x", i,"=",i*3);
}  


   for(let i=1; i<=3; i++) {
        console.log("3 x"+ i+"="+i*3);
    
    }   */




//another example
//3 + 1 = 4
//3 + 2 = 5
//3 + 3 = 6





/* for(let i=1; i<=3; i++) {
    console.log(i+3);
} */

/*  for(let i=1; i<=3; i++) {
    console.log("3 +"+i+"= "+i+3);
}  */


//another example
//3 + 1 = 4
//3 + 2 = 5
//3 + 3 = 6

//template literals
/* for(let i=1; i<=3; i++) {
    console.log(`3 + ${i} = ${i+3}`)
} */
//backticks







//3 + 1 = 4
//3 + 2 = 5
//3 + 3 = 6
 
//identify the bug and why is it a bug??
/*  for (let i = 1; i <= 3; i++) {
    console.log(`3 + ${i} =  3 + ${i}`);
}  */
//3 + 1 = 3 + 1 
//3 + 2 = 3 + 2 
//3 + 3 = 3 + 3 


//template literals
//The whole thing is a string (enclosed in backticks ` `).
//Anything you put inside ${...} is evaluated as JavaScript code — variables, expressions, even function calls.
//The result of that expression is converted to a string and inserted into the final output.




//problem 2 : version 1
// **** 
//console.log('****');
//use for loop
//you can google and try to understand
//don't use AI








/* 
let sum ='';
for(let i=0; i<4; i++) {
    sum+="*"
    
}

console.log(sum);

  */


//sum = ""; initialized sum with empty string





//problem 2 : version 2
//what happens when I change it to sum+=sum;
//use a pen and paper to give me the answer


for(let i=0; i<4; i++) {
    let sum ='*';
    sum+=sum;
}
console.log(sum);


//16 //8




//problem 3: version 3
//what happens when we delcare sum = '' inside the loop and not outside??

//what will be the result??
//use a pen and paper to give me the answer

/* for(let i=0; i<4; i++) {
    let sum ='';
    sum+="*"
}

console.log(sum);   */








