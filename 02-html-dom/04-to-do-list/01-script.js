
const addBtn = document.getElementById('add-task-btn');
const input = document.getElementById('new-task');
const taskList = document.getElementById("task-list");
let tasks = [];
let filterArr = [];
let currentFilter = 'all';
const buttons = document.querySelectorAll(".filter-btn");
const counterSpan = document.getElementById("counter-span")
const completedBtn = document.getElementById("completed-btn");

addBtn.addEventListener("click",() => {
    let taskText = input.value;
    //console.log(taskText);

    addTask(taskText)
    //tasks.push(taskText);
    //console.log(tasks);
    input.value = '';
})


input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let taskText = input.value;
    //console.log(taskText);
    tasks.push(taskText);
    //console.log(tasks);

    input.value = '';
  }
});

document.addEventListener("DOMContentLoaded", () => {
    applyFilter()
})

completedBtn.addEventListener("click", () => {
    tasks = tasks.filter((ele) => ele.completed !== true);
    applyFilter();
})


function addTask(userInput) {
    if(userInput.trim() !== '') {
        const newTask = {
        id : generateTaskId(),
        text:userInput,
        completed:false
    }
     tasks.push(newTask);
    applyFilter();
    
}
    }
    //console.log('the new task is',newTask)
   
 function updateCounter() {
    const activeTasks = tasks.filter(task => task.completed === false).length
    //console.log(activeTasks)
    
    counterSpan.textContent = `${activeTasks} items left`
 }

function generateTaskId() {
  return Math.floor(1000 + Math.random() * 9000);
}
 


function showTasks() {
    taskList.innerHTML = "";
    if(tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-message">Your to-do list is empty</li>'
    }
    filterArr.forEach((task) => {
      
     let li=document.createElement("li");
    li.setAttribute("data-id",task.id);
    //create elements inside li
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');


    //adding attributes and values
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed; //false


    checkbox.addEventListener("change", () => {
        handleToggle(task.id);
    })

    span.innerText = task.text;
    if(checkbox.checked === true) {
        span.classList.add('completed')
    }
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter((ele) => ele.id !== task.id);
        applyFilter();
    })

    //append inside li
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);
 
    console.log(li)
    taskList.append(li);
    })
}

function handleToggle(id) {
    //grab the array of objects
    //rght now each object has completed status false
    //don't change completed status in any of those objects
    //except the one on which user clicked
    tasks = tasks.map((task) => {
        if(task.id === id) {
            return {...task,completed:!task.completed}
        } else {
            return task
        }
    })

    applyFilter();
}

//console.log(buttons);

buttons.forEach((btn) => {
    btn.addEventListener("click",() => {
        buttons.forEach((b) => {
            b.classList.remove("active")
        })
        btn.classList.add('active')
        currentFilter = btn.getAttribute("data-filter");
        console.log(currentFilter);
        applyFilter();
    })
})
 

function applyFilter() {
    if(currentFilter === 'all') {
        filterArr = tasks;
    } else if(currentFilter === 'active') {
        filterArr = tasks.filter(task => task.completed === false);
    } else {
        filterArr = tasks.filter(task => task.completed === true);
    }
    showTasks()
   // console.log(tasks);
    updateCounter();
}