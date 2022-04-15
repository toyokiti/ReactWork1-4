
const AddTaskForm = (props) => {

    const onChangeTodoText = (event) => {
        console.log(event.target.value);
        props.setTodoText(event.target.value)
    };

    return (
        <div id="inputTask">
            <h2>新規タスクの追加</h2>
            <input 
                type="text"
                value={props.todoText}
                onChange={onChangeTodoText}
            />
            <button onClick={props.onClickAdd}>追加</button>
        </div>
      ) //return
}

export default AddTaskForm;
