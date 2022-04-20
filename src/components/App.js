import React, {useState} from 'react';
import '../App.css';
import AddTaskForm from './AddTaskForm';
import RadioButtonView from './RadioButtonView';
import MakeTaskPage from './MakeTaskPage';
import {RADIO_STATUS} from '../utils/radioStatus'

const App = (props) => {

  const [todoList, setTodoList] = useState([]); //todoListを管理するState
  const [todoText, setTodoText] = useState(''); // 新規タスクの追加のテキストフォームに入寮される文字を管理するState
  const [radioVal, setRadioVal] = useState(RADIO_STATUS.All);
  const [filteringTodo, setFilteringTodo] = useState([]);

  // 追加ボタンをクリックされると実行される関数
  const onClickAdd = () => {
    if (todoText === '') return; 
    const todo = {text: todoText, status: '作業中'};
    setTodoList([...todoList, todo]);
    setTodoText('');
  }

  return (
    <div className="App">
      <h1>TODOリスト</h1>

      <RadioButtonView
        todoList={todoList}
        setRadioVal={setRadioVal}
        RadioVal={radioVal}
        filteringTodo={filteringTodo}
        setFilteringTodo={setFilteringTodo}

      />
      <MakeTaskPage 
        todoList={todoList}
        onClickAdd={onClickAdd}
        setTodoList = {setTodoList}
        filteringTodo={filteringTodo}
        RadioVal={radioVal}
      />  
        
      <AddTaskForm
        todoText={todoText} 
        setTodoText={setTodoText}
        onClickAdd={onClickAdd}
      />

    </div>
  ); //return
}

export default App;