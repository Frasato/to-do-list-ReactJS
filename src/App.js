import { useState } from "react";
import Task from "./components/Task/Task.js";
import './styles/app.css';

export default function App() {

  const [name, setName] = useState('Name Task...');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleNameTask(event){
    setName(event.target.value);
  }

  function handleDescription(event){
    setDescription(event.target.value);
  }

  function createTask(event){
    event.preventDefault();
    const taskObj = [
      {
        name: name,
        desc: description
      }
    ];
    setTasks([ ...tasks, ...taskObj]);
  }

  function deleteTask(id){
    const updateTask =  tasks.filter((task, index)=>{
      return index !== id;
    });
    setTasks(updateTask);
  }

  return (
    <div>
      <h1>To Dev List</h1>
      <input type="text" placeholder="Task name..." value={name} onChange={handleNameTask}/>
      <textarea value={description} onChange={handleDescription}></textarea>
      <button onClick={createTask}>Create</button>
      {tasks.map((itemTask, id)=>{
        return(
          <Task key={id} nameTask={itemTask.name} description={itemTask.desc} deleteTask={() => deleteTask(id)}/>
        );
      })}
    </div>
  );
}