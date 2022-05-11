import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const EditableTodo = ({ todo, deleteTodo, updateTodoData }) => {
  const [isEdit, setIsEdit] = useState(false);

  function handleDelete(evt) {
    // let td = evt.target;
    console.log("editable todo:", evt.target.id);
    let tdId = evt.target.id;

    deleteTodo(tdId);
  }

  function handleEdit() {
    setIsEdit(true);
  }

  return (
    <>
      {!isEdit && (
        <div>
          <Todo todo={todo} />
          <button onClick={handleEdit}>Edit</button>
          <button id={todo.id} onClick={handleDelete}>
            Del
          </button>
        </div>
      )}
      {isEdit && <TodoForm todoData={todo} updateTodoData={updateTodoData}/>}
    </>
  );
};

export default EditableTodo;
