import { useState } from "react";
import Task from "./components/Task/Task.js";

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

  return (
    <div>
      <h1>To Dev List</h1>
      <input type="text" placeholder="Task name..." value={name} onChange={handleNameTask}/>
      <textarea value={description} onChange={handleDescription}></textarea>
      <button>Create</button>
      {tasks.map((itemTask, id)=>{
        return(
          <Task id={id} nameTask={itemTask.name} description={itemTask.description}/>
        );
      })}
    </div>
  );
}