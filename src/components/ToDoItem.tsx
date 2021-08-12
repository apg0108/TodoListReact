
function ToDoItem (props : any) {
    //Solo se ejecuta el evento onClick
    return <li onClick={() => {props.onChecked(props.id)}}>{props.text}</li>
    //return <li onClick={() => {props.onChecked(props.id)}}>{props.text}</li>
    //De esta forma se ejecuta y renderiza
}

export default ToDoItem;