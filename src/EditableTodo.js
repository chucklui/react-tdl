import Todo from "./Todo";
import TodoForm from "./TodoForm";

const EditableTodo = ({todo}) => {
  return (
    <>
      <Todo todo={todo}/>
      {/* <TodoForm /> */}
    </>
  );
}

export default EditableTodo;