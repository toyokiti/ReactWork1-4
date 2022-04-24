
const DeleteButton = (props) =>{

    const onClickDelete = () => {
        const todos = props.todoList.filter((value, index) => {
            return props.index !== index;
        }); 
        props.setTodoList([...todos]); //todoListを上書き
    }   

    return (
        <button onClick = {()=>{onClickDelete()}}>削除</button>
    )
}
export default DeleteButton;