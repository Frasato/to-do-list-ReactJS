import { FaTrash } from "react-icons/fa";
import './task.css';

export default function Task(props){
    return(
        <div className="body-task">
            <div className="task">
                <div>
                    <h1>{props.nameTask}</h1>
                    <p>{props.description}</p>
                </div>
                <FaTrash onClick={props.deleteTask} className="icon"/>
            </div>
        </div>
    );
}