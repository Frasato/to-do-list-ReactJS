import { FaTrash } from "react-icons/fa";

export default function Task(props){
    return(
        <div>
            <div>
                <h1>{props.nameTask}</h1>
                <p>{props.description}</p>
            </div>
            <FaTrash onClick={props.deleteTask}/>
        </div>
    );
}