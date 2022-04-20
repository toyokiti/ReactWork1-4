import StatusButton from './StatusButton';
import Deletebutton from './DeleteButton';

const TaskItem = (props) => {
    
    return (
        <>
        <td>{props.index+1}</td>
        <td>{props.todo.text}</td>
        <td>
            <StatusButton
                index={props.index} 
                todoList={props.todoList}
                setTodoList={props.setTodoList}
                status={props.todo.status}
            />
            <Deletebutton
                index={props.index} 
                todoList={props.todoList}
                setTodoList={props.setTodoList}
            />
        </td>
        </>               
    );
}

export default TaskItem;
