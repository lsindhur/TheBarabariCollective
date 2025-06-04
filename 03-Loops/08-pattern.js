
/*

 1 2 3 4 5
 6 7 8 9 10
 11 12 13 14 15
 16 17 18 19 20
 21 22 23 24 25

*/

//lets print the first line first
/* let temp = '';
for(let i=1; i<=5; i++) {
    temp+=i+' ';
}
console.log(temp);
 */
/*

 1 2 3 4 5
 6 7 8 9 10
 11 12 13 14 15
 16 17 18 19 20
 21 22 23 24 25

*/

//first principles thinking - breaking down a complex task into smaller tasks


//printing numbers from 1 to 25
/*  let count = 0;
for(let i=0; i<5; i++ ) {
    for(let j=0; j<5; j++) {
        count++
        console.log(count);
    }
}  */
//printing them line by line //introduce another variable to concatenate them
/* let count = 0;
let temp = '';
for(let i=0; i<5; i++) {
    for(let j=0; j<5; j++) {
        count++
        temp = temp + count + ' ';
    }
    console.log(temp);
}  */

//temp should be inside //to break the concatenation with every iteration of outerloop

/* let count = 0;
for(let i=0; i<5; i++) {
    let temp = '';
    for(let j=0; j<5; j++) {
        count++
        temp = temp + count + ' ';
    }
    console.log(temp);
}  */

