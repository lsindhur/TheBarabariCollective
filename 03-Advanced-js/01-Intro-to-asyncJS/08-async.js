//output
//hi,0,1,2,3,4,5,bye,after 5 seconds 0,1,2,3,4,5

console.log('Hi');
for(let i=0; i<=5; i++) {
    console.log(i);
    setTimeout(()=> {
        console.log(i);
    },5000);
}

console.log('Bye')

