
/*

💡 Promises in JavaScript

A Promise in JavaScript is an object that represents the eventual completion (fulfilled) or failure (rejected) of an asynchronous task.

Fulfilled (resolve): The task finished successfully.

Rejected: The task failed.

Pending: While the task is still running.

*/

//return promise inside getData
//comparison between nested callbacks and promises using .then and .catch

function getData(id) {
    return new Promise((resolve,reject)=> {
        if(id<10) {
            setTimeout(()=> {
            console.log(`data of ${id}`)
            resolve(`data sent for id ${id}`)
        },3000)
        } else {
            reject('error')
        } 
    })
}

getData(1)
.then(() => {
    return getData(2)
})
.then(()=> {
    return getData(5)
})
.then(()=> {
     return getData(126)
}).catch((err)=> {
    console.log(err);
})








/* 
function getData(id) {
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            if(id<5) {
                console.log(`data of ${id}`);
                resolve(`success for ${id}`)
            } else {
                reject(`Error:no data found for data id: ${id}`)
            }
        },4000)
    })
} */



/* getData(4)
.then((res) => {
    console.log(res)
    return getData(2)
})
.then(res => {
    console.log(res)
    return getData(1)
})
.catch(err => {
    console.log(err)
}) */
