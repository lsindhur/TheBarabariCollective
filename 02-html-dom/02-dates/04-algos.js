/**
 * Write an algorithm, function inputs from browser format.
 * To find if entered date is backdated or not?
 * 
 * Ex. Productivity tool, can deadline be backdated? backdated? [previous date];
 * 
 */

function checkDate(userTime) {
    let currentTime = new Date().toString()
    if(userTime < currentTime) {
        console.log('The time is backdated, please enter a valid date')
    }else {
        console.log('Valid time')
    }
}

//console.log(new Date().toString()); //Thu Jul 10 2025 14:50:01 GMT+0530 (India Standard Time)

checkDate('Thu Jul 10 2025 14:50:01 GMT+0530 (India Standard Time)')























/* 

console.log(new Date().toString());
//Mon Jul 07 2025 21:44:29 GMT+0530 (India Standard Time)

function isBackdated(browserDate) {
    let timeStamp = new Date(browserDate);
    let currentTime = new Date();

    if(currentTime > timeStamp) {
        console.log('Time is backdated')
    } else {
        console.log('date is valid')
    }
}

//isBackdated('Mon Jul 07 2025 21:44:29 GMT+0530 (India Standard Time)')

console.log(new Date('Mon Jul 07 2025 21:44:29 GMT+0530 (India Standard Time)')) */