
const Todo = ({ todo }) => {
  console.log("TODO COMPONENT:", todo);
  return (
    <>
      <h3> {todo.title} (priority: {todo.priority})</h3>
      <p> {todo.description}</p>
    </>
  )
};

export default Todo;