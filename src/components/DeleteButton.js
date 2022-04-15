

const DeleteButton = (props) =>{

    const onClickDelete = () => {
        const todoList = props.todoList;
        console.log(todoList);
        todoList.splice(props.index, 1);
        console.log(todoList);
        props.setTodoList([todoList]);
    }   

    return (
        <button onClick = {()=>{onClickDelete()}}>削除</button>
    )
}
export default DeleteButton;