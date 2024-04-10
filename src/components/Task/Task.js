export default function Task(props){
    return(
        <div key={props.id}>
            <div>
                <h1>{props.nameTask}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}