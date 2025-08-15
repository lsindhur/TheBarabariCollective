//predict the output
//hi
//0,1,2,3,4,5
//5 sec 0,1,2,3,4,5
//bye

console.log('Hi');
for(var i=0; i<=5; i++) {
    console.log(i);
    setTimeout(()=> {
        console.log(i);
    },5000);
}

console.log('Bye')




//output

//hi, bye, 0,1,2,3,4,5,6,6,6,6,6,6








