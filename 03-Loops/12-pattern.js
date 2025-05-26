  /*  
    *
   ***
  *****
 *******
********* 
*/

/*
1111*1111
111***111
11*****11
1*******1
*********
*/

//first principles thinking
//1s,stars,1s
/*
1111
111
11
1
*/

/* for(let i=4; i>0; i--) { 
  let temp = '';
  for(let j=0;j<i; j++) {
    temp+='1';
  }
 console.log(temp);
} */

//lets add the stars
/*
1111*1111
111***111
11*****11
1*******1
*********
*/

let star = '*'
for(let i=4; i>=0; i--) {  
  let temp = '';
  for(let j=0;j<i; j++) {
    temp+=' ';
  }
 console.log(temp+star+temp);
 star+='*'+'*';
 
}

