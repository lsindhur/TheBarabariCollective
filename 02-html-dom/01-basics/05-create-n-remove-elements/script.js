//now tht we have understood how to access and change element values
//let us how we can create and delete elements from js itself


//2 step process
//step 1 - create the element  
//create a button

const button = document.createElement('button')
button.innerText = "Click me";
console.log(button)


//how do we show it on screen?

//step 2 - add to the DOM 
//node.append(el) //adds  inside at the end of the node
const ul = document.querySelector('ul')
//ul.append(button);



//node.prepend(el) //adds in the beginning of the node insde
//ul.prepend(button);



//node.before(el) //adds outside before the node
//ul.before(button);

//node.after(el) //adds outside aftr the node
ul.after(button);

button.remove()


//assignment
//study the differences between
//append and appendChild
//remove and removeChild




/* //when adding dom elements
🟢 No quotes → you're passing a DOM element
🔴 Quotes → you're passing a string (text)
*/

