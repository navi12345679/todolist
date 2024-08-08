import React, { useState } from "react";
import './Todo.css'

function Todo(){

    const [tasks,SetTasks] = useState(["Cleanup the bed", "Go to shower", "Get ready"]);
    const [newTask,setNewTask] = useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTasks(){
        if(newTask.trim() !== ""){
      SetTasks( t => [...t,newTask]);
      setNewTask("");
    }
    }
    function deleteTask(index){
     const updatetasks = tasks.filter((_,i) => i !== index);
          SetTasks(updatetasks);
    }

    function moveupTask(index){
        if(index > 0){
            const updatetasks = [...tasks];
            [ updatetasks[index], updatetasks[index-1]] =
             [updatetasks[index-1],updatetasks[index]];
             SetTasks(updatetasks);
        }

    }

    function movedownTask(index){
        if(index > tasks.length - 1){
            const updatetasks = [...tasks];
            [ updatetasks[index], updatetasks[index+1]] =
             [updatetasks[index+1],updatetasks[index]];
             SetTasks(updatetasks);
        }

    }
    return(
        <div className="container">
        <div >
        <h1>To-Do List</h1>
        <input type='text' placeholder='Enter a Task' value={newTask} onChange={handleInputChange}/>
        <button className="add-button" onClick={addTasks}>Add</button>
        </div>
      <ol>
      {tasks.map((task,index) => <li key={index}>
       <span> {task} </span> <br/>
       <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button> <br/>
      <button className="move-button" onClick={() => moveupTask(index)}>☝🏻</button><br/>
      <button className="move-button" onClick={() => movedownTask(index)}>👇🏻</button><br/>
        </li>)}
        </ol>
      </div>
    );
}
export default Todo