import axios from "axios";

/* Lab 1 :
Write a Javascript program to implement the following instructions
Step 1: Fetch the data
Use axios to access this API : https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json


Step 2: Extract only what you need
From each restaurant, take:
    name
    grades → an array of numbers



Step 3: Return a new array of objects
each object inside the array should look like this
{
  name: "Restaurant Name",
  grades: [2,6,8,10,11]  
}

*/


axios.get('https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json')
.then((res) => {
    const restaurants = res.data;
    //console.log(restaurants)
    
    const newRestaurantsArray = restaurants.map(restaurantObj => {

        let gradesArr = restaurantObj.grades; //represent grades array
        let sum = 0;

        gradesArr.forEach(grade => {
            sum += grade; 
        });

        let avg = sum/gradesArr.length

        const newObject = {
            name : restaurantObj.name,
            gradeAvg: avg, //restaurantObj.grades //gradeAvg : 
        }
        return newObject;
    })
    console.log(newRestaurantsArray);
})
.catch(() => {
    
}) 





/*
//next challenge

Then calculate the average grade for that restaurant.

Step 3: Return a new array of objects
each object inside the array should look like this.

Hint: use foreach to calculate sum of the grades inside the array and then divide by the length of the array

{
  name: "Restaurant Name",
  avgGrade: 85   // (calculated average)
}

*/




//step 1: we are gtting the names and grades array but we don't need the grades array, we want the average instead
//step 2: to calculate avg, first we have calculate sum of numbers and then divide by length of the array






















/* axios.get('https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json')
.then(res => {
    const restaurntsData = res.data

    const restaurantsArray = restaurntsData.map(ele=> {
        const restaurantObject = {
            name : ele.name,
            grades: ele.grades
        }
        return restaurantObject
    })
    console.log(restaurantsArray)
})
    .catch(err => {
        console.log(err)
    })
 */

/* axios.get('https://gist.githubusercontent.com/Shadid12/18642d735214920921f4f470300be11e/raw/6dcf7b456c40f110c313bbb1678474b01756bc1a/restaurants.json')
.then(res => {
    const restaurntsData = res.data

    const restaurantsArray = restaurntsData.map(ele=> {

        //calculat the sum
        let sum = 0;
        ele.grades.forEach(grade => {
            sum+= grade;
        });

        let gradeAvg = sum/ele.grades.length
        //divide it by the length of the array

        const restaurantObject = {
            name : ele.name,
            grades: gradeAvg
        }
        return restaurantObject
    })
    console.log(restaurantsArray)
})
    .catch(err => {
        console.log(err)
    })

 */













