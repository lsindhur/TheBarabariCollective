//what do you think is a callback?
//callback function without arguments
//callback function with arguments
//callback within callback

//callback is a function passed to nother funtion
//as an argument to be executed later

function greet(name) {
  console.log(`hello ${name}`);
}


/* setTimeout(() => {
  greet('sindhu') //with 4 seconds delay

  setTimeout(() => { //after that this gets invoked
  greet('karthik')
},4000)

},4000) */



//after 2 seconds delay print 
//"hello sindhu"
//2 seconds after that
//"hello karthik"














setTimeout(() => {
  greet("sindhu");
  setTimeout(() => {
    greet("harihar");
    setTimeout(() => {
      greet("karthik");
      setTimeout(() => {
        greet("Asiya");
        setTimeout(() => {
          greet("Saniyya");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000); 


//you see how hard it is to ready nested callbacks??
//they do the job but it is extremely hard to read these functions
//that is why they are called callbackhell





