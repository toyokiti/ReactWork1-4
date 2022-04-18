import StatusButton from './StatusButton'
import Deletebutton from './DeleteButton'

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
            {props.RadioVal === 'all' ? 
                <tbody id="todoBody">
                    {props.todoList.map((todo, index) => {
                        return (
                        <tr key={index+1}>
                            <td>{index+1}</td>
                            <td>{todo.text}</td>
                            <td>
                                <StatusButton
                                    index={index} 
                                    todoList={props.todoList}
                                    setTodoList={props.setTodoList}
                                    status={todo.status}
                                />
                                <Deletebutton
                                    index={index} 
                                    todoList={props.todoList}
                                    setTodoList={props.setTodoList}
                                />
                            </td>               
                        </tr>
                        ); //return 
                    })}
                </tbody>
                :
                {/* ラジオボタンが'作業中'または'完了'の場合*/}
                <tbody id="todoBody">
                    {props.filteringTodo.map((todo, index) => {
                    return (
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{todo.text}</td>
                        <td>
                            <StatusButton
                                index={index} 
                                todoList={props.todoList}
                                setTodoList={props.setTodoList}
                                status={todo.status}
                            />
                            <Deletebutton
                                index={index} 
                                todoList={props.todoList}
                                setTodoList={props.setTodoList}
                            />
                        </td>               
                    </tr>
                    ); //return 
                    })}
                </tbody>
            } 
        </table>
        </div>
    );

}

export default MakeTaskPage;