
setTimeout(()=>{
    console.log('I am First');
}, 1000); 
setTimeout(()=>{
    console.log('I am Second');
}, 1500); 
setTimeout(()=>{
    console.log('I am Third');
}, 3500); 
setTimeout(()=>{
    console.log('I am just getting started with Adv. JS'); 
    setTimeout(()=>{
        console.log('I am just getting started again.');
    }, 5000); 
}, 2000);


/*


setTimeout(()=>{
    console.log('I am First');
}, 1000); //1st seconds
setTimeout(()=>{
    console.log('I am Second');
}, 1500); //1.5 seconds
setTimeout(()=>{
    console.log('I am Third');
}, 3500); //3.5 seconds
setTimeout(()=>{
    console.log('I am just getting started with Adv. JS'); //2 seconds
    setTimeout(()=>{
        console.log('I am just getting started again.');
    }, 5000); //in 7 seconds
}, 2000);

*/