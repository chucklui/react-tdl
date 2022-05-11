import {useState, useEffect} from 'react';
import TopTodo from "./TopTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TODOLIST = [
  { title: "Code!", description: "Write some code", priority: 2 },
  { title: "Make dinner", description: "Cook something healthy", priority: 1 },
  { title: "Go to bed", description: "get some sleep", priority: 3 },
];




const TodoApp = () => {
  const [todoData, setTodoData] = useState(TODOLIST);

  function updateTodoData(todo) {
    setTodoData((td) => ([...td, todo]));
  }

  return (
    <>
      <TopTodo todoData={todoData}/>
      {/* <TodoList todoList={todoData}/> */}
      {/* <TodoForm updateTodoData={updateTodoData}/> */}
    </>
  );
};

export default TodoApp;
