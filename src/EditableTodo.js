import Todo from "./Todo";
import NewForm from "./NewForm";

const EditableTodo = ({todo}) => {
  return (
    <>
      <Todo todo={todo}/>
      <NewForm />
    </>
  );
}

export default EditableTodo;