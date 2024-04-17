import { useState, useEffect, useMemo, useCallback } from "react";
import Task from "./components/Task/Task.js";
import './styles/app.css';

export default function App() {

  const [name, setName] = useState('Name Task...');
  const [description, setDescription] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem('Tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(()=>{
    const storageTask = localStorage.getItem('Tasks');
    
    if(storageTask){
      const convertedTasks = JSON.parse(storageTask);
      setTasks(convertedTasks);
    }

  }, []);

  const lengthTasks = useMemo(()=>{
    return tasks.length;
  }, [tasks]);

  const handleNameTask = useCallback((event)=> {
    const nameTask = event.target.value;
    setName(nameTask);
  }, []);

  const handleDescription = useCallback((event)=> {
    const descriptionTask = event.target.value;
    setDescription(descriptionTask);
  }, []);

  function createTask(event){
    event.preventDefault();
    if(name !== '' && description !== ''){
      const taskObj = [
        {
          name: name,
          desc: description
        }
      ];
      setTasks([ ...tasks, ...taskObj]);
      setDescription('');
      setName('Name Task...');
    }else{
      alert('Something is empyt...');
    }
  }

  function deleteTask(id){
    const updateTask = tasks.filter((task, index)=>{
      return index !== id;
    });
    setTasks(updateTask);
  }

  return (
    <div className="body">
      {
        lengthTasks > 1? <h1>Do you have {lengthTasks} tasks to do</h1> : <h1>Do you have {lengthTasks} task to do</h1>
      }
      <div className="container-header">
        <h1 className="title">To Dev List</h1>
        <input type="text" placeholder="Task name..." value={name} onChange={handleNameTask}/>
        <textarea value={description} onChange={handleDescription}></textarea>
        <button onClick={createTask} className="create-button">Create</button>
      </div>
      <div className="container-task">
          {tasks.map((itemTask, id)=>{
            return(
              <Task key={id} nameTask={itemTask.name} description={itemTask.desc} deleteTask={() => {deleteTask(id)}}/>
            );
          })}
        </div>
    </div>
  );
}