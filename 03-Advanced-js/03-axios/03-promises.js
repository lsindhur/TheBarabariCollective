//use this api https://jsonplaceholder.typicode.com/users
//get the geo details of all users, store them in any array and log the array

//try: first try to log the geo details of 1st user

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

axios.get(url)
    .then(res => {
        const userData = res.data;
        console.log(userData.map(ele => (ele.address.geo)))
    })
    .catch(err => {
        console.log(err)
    })










/* axios.get(url)
    .then(res => {
        const userData = res.data
        console.log(userData.map(item => item.address.geo))
    })
    .catch(err => {
        console.log(err)
    })
 */
