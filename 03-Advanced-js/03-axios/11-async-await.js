//define async function hitAPI(). In the function :
// inside try block :
// ask for username usng readlinesync 
//use that name to call github api and fetch the user details
//log the result data

//https://api.github.com/users/${username}


//use promise and then asyn await

import readlineSync from 'readline-sync'
import axios from 'axios'




/* axios.get(`https://api.github.com/users/${username}`)
    .then((res) => {
        console.log(res.data)
    })
    .catch(err => console.log(err)) */

async function hitAPI() {
    try {
        const username = readlineSync.question('Enter your username: ')
        const res = await axios.get(`https://api.github.com/users/${username}`)
        console.log(res.data)
    } catch (error) {
        console.log(error.response.data.message)
    } 
}

hitAPI()














/* async function hitAPI() {
    try{
        const username = readlineSync.question('Enter your username: ')
        const response = await axios.get(`https://api.github.com/users/${username}`)
        console.log(response.data)
    }

    catch (err){
        console.log(err.response.data.message)
    }
} */













