import StatusButton from './StatusButton'
import Deletebutton from './DeleteButton'

const TaskView = (props) => {

    return (
        <div className="viewTaskArea">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>コメント</th>
                    <th>状態</th>
                </tr>
            </thead>
            <tbody id="todoBody">
                {/* taskの表示 */}
                
                {props.filteringTodo.map((todo, index) => (
                <tr key={index+1}>
                    <td>{index+1}</td>
                    <td>{todo.text}</td>
                    <td>
                        <StatusButton />
                        <Deletebutton
                            index={index} 
                            todoList={props.todoList}
                            setTodoList={props.setTodoList}
                        />
                    </td>               
                </tr>
                ) //return 
                )}
            </tbody>
        </table>
        </div>
    );

}

export default TaskView