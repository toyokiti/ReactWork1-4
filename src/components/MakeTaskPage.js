import {RADIO_STATUS} from '../utils/radioStatus';
import TaskItem from './Taskitem';


const MakeTaskPage = (props) => {
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
            {/* taskの表示 */}
            {props.RadioVal === RADIO_STATUS.All ? 
                <tbody id="todoBody">
                    {props.todoList.map((todo, index) => (
                        <tr key={index+1}>
                        <TaskItem
                        todoList={props.todoList}
                        setTodoList = {props.setTodoList}
                        index={index}
                        todo={todo}
                        />
                        </tr>
                        ))
                    }
                </tbody>
                :
                <tbody id="todoBody">
                    {props.filteringTodo.map((todo, index) => (
                        <tr key={index+1}>
                        <TaskItem
                        todoList={props.todoList}
                        setTodoList = {props.setTodoList}
                        index={index}
                        todo={todo}
                        />
                        </tr>
                        ))
                    }
                </tbody>
            } 
        </table>
        </div>
    );

}

export default MakeTaskPage;