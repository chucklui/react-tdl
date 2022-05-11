import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const EditableTodo = ({todo, deleteTodo, id}) => {
  const [isEdit, setIsEdit] = useState(false);

  function handleDelete(evt) {
    // let td = evt.target;
    console.log("editable todo:", evt.target.id);
    let tdId = evt.target.id;
    
    deleteTodo(tdId);
  }

  return (
    <>
      <Todo todo={todo}/>
      <button>Edit</button>
      <button id={todo.id} onClick={handleDelete}>Del</button>
      {/* <TodoForm /> */}
    </>
  );
}

export default EditableTodo;