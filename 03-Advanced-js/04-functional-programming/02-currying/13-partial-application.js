
//partial application
//Partial application in JavaScript means fixing (or pre-filling) 
// some of the arguments of a function now, 
// and returning a new function that takes the rest of the arguments later.


const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('usernameError');

function minLength(min) {
    return function(value) {
        return value.length>=min; //if true, don't show the message
    }
}

const usernameValidator = minLength(5);

usernameInput.addEventListener("input",() => {
    if(usernameValidator(usernameInput.value)) {
        usernameError.textContent = ''
    } else {
        usernameError.textContent = 'Your username must be at least 5 characters long'
    }
})

























