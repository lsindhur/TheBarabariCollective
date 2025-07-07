/*
Select the <h1> using getElementById and:

Log its innerText

Change its innerHTML to include a <span> tag that says "Student" (e.g., Welcome <span>Student</span>)

*/

 const h1 = document.getElementById('main-heading');
//console.log(h1.innerText);
h1.innerHTML = 'Welcome <span>Student</span>'


//console.log(h1.innerText);
//console.log(h1.innerHTML);
 
console.dir(h1);


/*
Use getElementsByClassName to select the <p> and:

Change its textContent to "DOM is powerful"

Change its text color to blue using .style.color
*/

//const p = document.getElementsByClassName('description');
//console.log(p[0].innerText)
//p[0].innerText = "DOM is powerful";
//p[0].style.color = "blue";



//what happens when I use a query selector?
/* const p = document.querySelector('.description');
p.innerText = "DOM is fun" */



//what happens when I use a query selectorAll?
const p = document.querySelectorAll('.description')
p[0].innerText = "DOM is fun";




/*

Use querySelectorAll to:

Select both buttons

Change the second button’s innerText to "Clicked!"

*/
const buttons = document.querySelectorAll('button')
//console.log(buttons);
buttons[1].innerText = "clicked!"





/*

Use querySelector to select the <span> inside the <div> and:

Log both innerText and textContent to compare

*/

const hiddenSpan = document.querySelector('div span')

console.log(hiddenSpan);

console.log(hiddenSpan.innerText);
console.log(hiddenSpan.textContent)









