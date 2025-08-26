// Take everyones username from the group and put it inside an array and sort the array.
// I want name, followers, following of all the students in the group
// but get the details in the same order of sorted array
























import axios from "axios"

const usernames = ['lsindhur','fawaz-exe','mojombo']

const sortedArray = usernames.sort() //'fawaz-exe', 'lsindhur', 'mojombo' 


/*

Promise.all() is a method in JavaScript that allows you to run multiple promises in parallel and wait until all of them are settled (fulfilled or rejected).

It takes an array (or iterable) of promises and returns a single promise:

✅ If all promises are fulfilled, the returned promise resolves with an array of their results (in the same order as given).
[
{status:200,config:{},data:{}},{status:200,config:{},data:{}},{status:200,config:{},data:{}}
]


❌ If any promise rejects, the returned promise immediately rejects with the reason of the first rejection

👉 Use Promise.all() when you want all promises to finish successfully before moving on, and you’re okay with the whole thing failing if even one fails.
*/


//step 1 : create an array of promises
//step 2: Hand over all promises to Promise.all
//step 3: Receive all resolved results
//Step 4: Extract useful info




























/* const promises = sortedArray.map(user => axios.get(`https://api.github.com/users/${user}`))

Promise.all(promises)
.then(results => {
    results.forEach(result => {
        const userData = result.data

        console.log(userData.name);
        console.log(userData.followers)
        console.log(userData.following)
    })
})
.catch(err => {
    console.log(err)
}) */























