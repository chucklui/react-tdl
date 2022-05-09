import EditableTodo from "./EditableTodo";

const TodoList = ({todoList}) => {
  return (
    <>
    {todoList.map((todo, index) => 
      <EditableTodo todo={todo} key={index}/>
    )}
    </>
  );
}

export default TodoList;