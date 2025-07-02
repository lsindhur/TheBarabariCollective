/*
     8
    88
   888
  8888
 88888
*/

//how I would view this as is maybe I will just add 1s instead of all the spaces and print them

/*
 11118
 11188
 11888
 18888
 88888
*/

//let me print only ones

/* for(let i=5; i>0; i--) {
    let temp = '';
    for(let j=0; j<i; j++) {
        temp+=1
    }
    console.log(temp);
} */

//let me attach 8s and replace ones with space now
/* let num = '';
for(let i=5; i>0; i--) {
    let temp = '';
    num+=8
    for(let j=0; j<i; j++) {
        temp+= ' '
    }
    console.log(temp+num);
}  */


//remove space in the last line 
let num = '';
for(let i=5; i>0; i--) {
    let temp = '';
    num+=8
    for(let j=0; j<(i-1); j++) {
        temp+= ' '
    }
    console.log(temp+num);
} 








