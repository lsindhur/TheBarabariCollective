//define a function named abc() which takes age as parameter
//the age funcction should return a promise
//the promise should be resolved if age>18 with the message "You can vote"
//the promise should be rejected in other cases with the message "You can not vote"

function abc(age) {
    return new Promise((res,reject) => {
        if(age>18) {
            res('You can vote');
        } else {
            reject('You can not vote');
        }
    })
}

abc(21)
    .then(res => {
        console.log(res);
        return 'Where are you from?'
    })
    .then(res=> {
        console.log(res);
        return 'Who do you want to vote?'
    })
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error)
    })



    /*
    Promise chain (.then chaining)

    Runs promises one after another.

    //Every .then call gives you a new promise.
    //If you return something → it’s like Promise.resolve(something).

    Each .then waits for the previous one to resolve.

    You can pass results forward to the next .then.

*/


//promise chaining is useful when 
/*
✅ Steps happen in order.
✅ Useful when the next step depends on previous data.
*/



/*

🔑 When to use chaining vs Promise.all

Use promise chaining when tasks are sequential (one needs the result of the previous).

Use Promise.all when tasks are independent and can run in parallel.

*/

    