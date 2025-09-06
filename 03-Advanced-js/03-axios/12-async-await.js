import readlineSync from 'readline-sync'
import axios from 'axios'

//activity
//https://jsonplaceholder.typicode.com/users/1/todos
//use async await to print the todos of first 5 user ids
//and use console.time and console.timeEnd to measure how long it takes to run the code for this activty

async function hitAPI() {
  try {
    for (let i = 1; i <= 5; i++) {
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${i}/todos`
      );
      console.log(res.data);
    }
  } catch (error) {
    console.log(error)
  } finally {
    console.timeEnd('12-async-await.js')
  }
  
}

console.time('12-async-await.js')
hitAPI()



























/* async function hitAPI() {
    try {
        for(let i=1; i<=5; i++) {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${i}/todos`)
        console.log(result.data)
    }
    } catch (error) {
        console.log(error)
    }

    finally {
        console.timeEnd('12-async-await.js')
    }
    
}

console.time('12-async-await.js')

hitAPI()
 */















