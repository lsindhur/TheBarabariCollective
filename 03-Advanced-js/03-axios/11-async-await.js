//define async function hitAPI(). In the function :
// ask for username usng readlinesync
//use that name to call github api and fetch the user details
//log the result data

//https://api.github.com/users/${username}

import readlineSync from 'readline-sync'
import axios from 'axios'




async function hitAPI() {
    try {
        let username = readlineSync.question('Enter your username: ')
        let res = await axios.get(`https://api.github.com/users/${username}`)
        //whatever response you need to receive, wait until the promise is resolved

        console.log(res.data)
    } catch (error) {
        
    }
}

//if you don't await like her, it only immediately returns a promise and stores it in res 
//and not the resolved value
/* function hitAPI () {
    try { 
        let userName = readlineSync.question('Enter your username: ')
        let res = axios.get(`https://api.github.com/users/${userName}`)
        console.log('result: ', res.data)
    } catch (error) {
        console.log(error)
    }
}
 */
hitAPI()

/* axios.get(`https://api.github.com/users/${username}`)
.then(res => {
    console.log(res.data)
})
.catch(err => {
    console.log(err)
}) */
