
//asssignment link : https://docs.google.com/document/d/1SBblSZhInvXw-3RqX0Y5rCMMqmJMEtSWDK6ctVkHOLg/edit?tab=t.0


import readlineSync from 'readline-sync'

function verifyAge() {
    return new Promise((resolve, reject) => {
        const age = parseInt(readlineSync.question('What is your age: '));

        if(age>18) {
            resolve('Age verified. Please provide your citizenship.')
        } else {
            reject('You must be at least 18 to register.')
        }
    })
}


function verifyCitizenship() {
    return new Promise((resolve, reject) => {
        const country = readlineSync.question('What is your country? ')
        if(country.toLowerCase() === 'india') {
            resolve('Citizenship verified. You can now register to vote.')
        } else {
            reject('You must be a citizen of India to register.')
        }
    })
}

verifyAge()
.then(res => {
    console.log(res)
    return verifyCitizenship()
})
.then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})
























/* //The readline-sync.question() function always returns the user's input as a string. 
//number will convert even string truthy values to 1
//but parseInt will only convert numbers in string Data type to Number data type
function verifyAge() {
    return new Promise((resolve, reject) => {
        const age = parseInt(readlineSync.question('Please enter your age: ')); 
        if(age> 18) {
             resolve('Age verified. Please provide your citizenship.');
        } else {
              reject('You must be at least 18 to register.');
        }
    })
}


function verifyCitizenship() {
    return new Promise((resolve, reject) => {
        const country = readlineSync.question('Please enter your country: ')

        if(country.toLowerCase() === 'india') {
             resolve('Citizenship verified. You can now register to vote.');
        } else {
             reject('You must be a citizen of India to register.');
        }
    })
}

verifyAge()
.then(res => {
    console.log(res);
    return verifyCitizenship();
})
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err)
}) */