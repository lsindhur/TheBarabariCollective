//revise: what is a promise??
//A Promise in JavaScript is an object that represents the eventual completion (fulfilled) or failure (rejected) of an asynchronous task.

// Take everyones username from the group and put it inside an array.
// Print name, followers, following of all the students in the group

//url : https://api.github.com/users/${username}

import axios from "axios"

const usernames = ['lsindhur','fawaz-exe','mojombo']
















/* function hitAPI(username) {
    return axios.get(`https://api.github.com/users/${username}`)
    }

usernames.forEach(user => {
    hitAPI(user)
    .then(res => {
        console.log(res.data.name)
        console.log(res.data.followers)
        console.log(res.data.following)
    })
    .catch(err => console.log(err))
})
 */
