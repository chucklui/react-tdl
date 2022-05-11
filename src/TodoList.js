import EditableTodo from "./EditableTodo";
import { v4 as uuid } from "uuid";

const TodoList = ({todoList, deleteTodo, updateTodoData}) => {
  return (
    <>
    <h1>Todo List</h1>
    {todoList.length > 0 && todoList.map((todo, index) => 
      <EditableTodo todo={todo} key={uuid()} deleteTodo={deleteTodo} updateTodoData={updateTodoData}/>
    )}
    {todoList.length < 1 && <p>No Todos!</p>}
    </>
  );
}

export default TodoList;