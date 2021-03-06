import {useState, useEffect} from 'react';
import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {v4 as uuid} from "uuid";

const TODOLIST = [
  { title: "Code!", description: "Write some code", priority: 2, id: uuid() },
  { title: "Make dinner", description: "Cook something healthy", priority: 1, id: uuid() },
  { title: "Go to bed", description: "get some sleep", priority: 3, id: uuid() },
];


const TodoApp = () => {
  const [todoData, setTodoData] = useState(TODOLIST);

  function addTodoData(todo) {
    setTodoData((td) => ([...td, todo]));
  }

  function deleteTodo(tdId) {
    setTodoData((tds) => tds.filter((td) =>(td.id !== tdId)));
  }

  function updateTodoData(data){
    let id = data.id;
    let temp = todoData.map(function(td){
      if(td.id === id) td = data;
      return td;
    });
    setTodoData(temp);
  }

  return (
    <>
      <TodoList todoList={todoData} deleteTodo={deleteTodo} updateTodoData={updateTodoData}/> 
      <TopTodo todoData={todoData}/>
      <TodoForm addTodoData={addTodoData}/>
    </>
  );
};

export default TodoApp;
