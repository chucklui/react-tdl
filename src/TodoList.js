import EditableTodo from "./EditableTodo";
import { v4 as uuid } from "uuid";

const TodoList = ({todoList, deleteTodo}) => {
  return (
    <>
    {todoList.map((todo, index) => 
      <EditableTodo todo={todo} key={uuid()} deleteTodo={deleteTodo}/>
    )}
    </>
  );
}

export default TodoList;