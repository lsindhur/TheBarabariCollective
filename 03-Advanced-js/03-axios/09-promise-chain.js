//step 1
//define a function named abc() which takes age as parameter and returns a promise
//If age > 18, it calls resolve(...) → promise is fulfilled with the message "You can vote"
//Otherwise, it calls reject(...) → promise is rejected with the message "You can not vote"

//step 2
//Call the function and start a chain
//Now we can attach .then() calls.
//First .then() → receives resolved value
//Second .then() → gets previous return
//....and so on

//step 3
//question


function abc(age) {
    return new Promise((resolve,reject) => {
        if(age>18) {
            resolve('You can vote')
        } else {
            reject('You can not vote')
        }
    })
}

abc(17)
.then((res) => {
    console.log(res); //you can vote
    return 'Where are you from? '
})
.then(res => {
    console.log(res); //Where are you from?
    return 'To whom do you want to vote?'
})
.then(res => {
    console.log(res) //To whom do you want to vote?
})
.catch(err => console.log(err))





















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





/* function abc(age) {
    return new Promise((resolve, reject) => {
        if(age>18) {
            resolve('You can vote')
        } else {
            reject('You can  not vote')
        }
    })
}
 */




/* abc(19)
.then(res => {
    console.log(res)
    return 'Where are you from?'
})
.then(res => {
    console.log(res)
    return 'To whom do you want to vote?'
})
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})
 */












   









