import axios from 'axios';

/* const url = 'https://jsonplaceholder.typicode.com/users/1/todos' */

//each user has a to do list. Print first to-do of 5 users

//try : try to print the to dos of 5 users by dynamically updating the
        //user id in the url

for(let i=1; i<=5; i++) {
    axios.get(`https://jsonplaceholder.typicode.com/users/${i}/todos`)
        .then(res => {
            const userData = res.data
            console.log(userData[0]);
        })
        .catch(err => {
            console.log(err)
        })
}









        


/* for(let i=1; i<=5; i++) {
    const url = `https://jsonplaceholder.typicode.com/users/${i}/todos`

    axios.get(url)
        .then(res => {
            const userData = res.data
            console.log(userData[0])
        })
        .catch(err => {
            console.log(err)
        })
} */
//output comes unordered. Resuls don't show from userId 1 to 5 in an order/
//this is because whatever gets resolved in a shorter time by the server returns faster