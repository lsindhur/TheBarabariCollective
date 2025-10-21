import React, { useState } from 'react'
import './todos.css'

const ToDoList = () => {

    const [tasks, setTasks] = useState([
        {id:1,text:'Complete Assignment',completedStatus:false},
        {id:2,text:'Have Breakfast',completedStatus:false},
    ])

    const [newTask, setNewTask] = useState('')
   

    function handleChange(e) {
       setNewTask(e.target.value)
       //console.log(newTask);
    }

    function handleAddTask() {
        //we do not have id
        //I have id and I have the text
        //create the object
        //use the spread operator and push it into tasks array

        const newTaskObj = {
            id:Date.now(),
            text:newTask
        }

        setTasks([...tasks,newTaskObj])
    }

    function handleDelete(id) {
        //if the id we receieved is not equal to the id in tasks array
        //then we should keep those items in the tasks arry

        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    }

    function handleToggle(id) {
        //find that task in tasks array and only change the status of that task
      
        
    }

  return (
    <div>
        <h1>To-Do List</h1>

        <input 
        type="text"
        placeholder='Add text here..'
        onChange={handleChange}
        />
        <button
        onClick={handleAddTask}
        >Add Task</button>

        <ul>
            {
                tasks.map(task => {
                    return <li key={task.id} className='checkListStatus'>
                            <input 
                            type="checkbox" 
                            checked 
                            onChange={()=>handleToggle(task.id)}
                            />
                            <span>{task.text}</span>
                            <button
                            onClick={() =>handleDelete(task.id)}
                            >Delete</button>
                        </li>
                })
            }
            {/* <li>
                <input type="checkbox" />
                <span>Complete assignment</span>
                <button>Delete</button>
            </li> */}
        </ul>
    </div>
  )
}

export default ToDoList