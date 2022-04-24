import {RADIO_STATUS} from '../utils/radioStatus'

const RadioButtonView = (props) => {


    const changeStatusView = (event) => {
        props.setRadioVal(event.target.value);
        const todos =  [...props.todoList]; 
        
        switch (event.target.value) {
            case RADIO_STATUS.All:
                props.setFilteringTodo(todos);
                break;
            case RADIO_STATUS.Working:
                const workingTodo = todos.filter((todo) => {
                    return todo.status === '作業中'; 
                });
                props.setFilteringTodo(workingTodo);
                break;
            case RADIO_STATUS.Complete:
                const completeTodo = todos.filter((todo)=>{
                    return todo.status === '完了';
                })
                props.setFilteringTodo(completeTodo);
                break;
            default:
                break;
        } 
    } 
    

    return (
        <div className="radiobuttonArea">
        <input type="radio" name="radiobutton" onChange = {changeStatusView} value="all" checked={props.RadioVal === 'all'} />すべて
        <input type="radio" name="radiobutton" onChange = {changeStatusView} value="working" checked={props.RadioVal === 'working'} />作業中
        <input type="radio" name="radiobutton" onChange = {changeStatusView} value="complete" checked={props.RadioVal === 'complete'} />完了
    </div> 
    );
    
}

export default RadioButtonView;