const StatusButton = (props) =>{
    
    // ステータスボタンの状態を変更⇔完了で変更
    const updateStatus = () => {
        const todos = [...props.todoList]; 
        todos[props.index].status === '作業中' ? todos[props.index].status = '完了' : todos[props.index].status = '作業中';    
        props.setTodoList(todos); 
    } 

    return (
        <button onClick={()=>{updateStatus()}}>{props.status}</button>
    )
}

export default StatusButton;