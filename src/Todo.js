
const Todo = ({ title, description, priority }) => {

  return (
    <>
      <h3> {title} (priority: {priority})</h3>
      <p> {description}</p>
    </>
  )
};

export default Todo;