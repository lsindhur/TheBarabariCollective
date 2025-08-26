import axios from 'axios';
import readlineSync from 'readline-sync';

//using readlineSync to display its github details

//step 1 - define the function hitAPI to make the axios call. This function should
//take username as input and make an api call to the endpoint containing that username
//step 2 - ask the username using readlinesync
//step 3 - invoke the function taking the username input and get the github details of that user
/*
https://api.github.com/users/${username}
*/

//console.log(readlineSync)

function hitAPI(username){
    return axios.get(`https://api.github.com/users/${username}`)
}
const name = readlineSync.question('What is your name?: ');

hitAPI(name)
.then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
   







/* function hitAPI(username) {
    return axios.get(`https://api.github.com/users/${username}`)
}

const username = readlineSync.question('Enter your username: ');
//console.log(username); 

hitAPI(username)
    .then(res => {
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
 */




