//predict the output
//i = 1 //sum= 0+1 //1
//i = 2 //sum=1+2 //3
//i = 3 //sum=3+3 //6
//i = 4 //sum=6+4 //10

//after 4 seconds of delay //i am first

setTimeout(() => {
    console.log('I am first');
}, 4000);

var sum = 0;
for(var i = 1; i<=4; i++){
    sum += i;
}
console.log(sum);






