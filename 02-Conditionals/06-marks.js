// You are given a variable marks. Your task is to print:

// - AA if marks is greater than 90
// - AB if marks is greater than 80  and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if the marks is less than or equal to 60


let marks=60;

if(marks>90) {
    console.log('Grade AA')
} else if (marks>80) {
    console.log('Grade AB')
} else if(marks>70) {
    console.log('Grade BB')
} else if(marks>60) {
    console.log('Grade BC')
} else {
    console.log('Grade CC')
}