import axios from 'axios';

const url = 'https://api.github.com/users';

//use axios to make a call to the api, 
//receive response object, 
//print the 1st element in the data sent back

axios.get(url)
    .then(res => {
        console.log(res.data[0])
    })
    .catch(err => {
        console.log(err)
    })










/* axios.get(url)
    .then(res => {
        console.log(res.data[0]);
    })
    .catch(err => {
        console.log(err)
    })  */ 
