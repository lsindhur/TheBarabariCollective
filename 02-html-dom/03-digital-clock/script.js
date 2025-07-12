
const timeDiv = document.querySelector("#time");
const dateDiv = document.querySelector("#date")
const btn = document.querySelector('button');
let is24hours = false;


function updateTime() {

  if(is24hours) {
  timeDiv.innerText = new Date().toLocaleTimeString('en-IN',{
  hour12:false
})
  } else {
     timeDiv.innerText = new Date().toLocaleTimeString();
  }
}


function updateDate() {

  dateDiv.innerText = new Date().toLocaleDateString('en-IN')
}

btn.addEventListener("click",() => {
  console.log('hello');
  is24hours = !is24hours;
  is24hours?
  btn.innerText = 'Switch to 12-hour format'
  : btn.innerText = 'Switch to 24-hour format'
  updateTime();
})

console.log(new Date().toLocaleTimeString('en-IN',{
  hour12:false
}))

updateDate()
setInterval(updateTime,1000)
