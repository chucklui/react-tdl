import {useState} from 'react';
import {v4 as uuid} from "uuid";

const TodoForm = ({addTodoData, todoData, updateTodoData}) => {
  console.log("TodoForm data", todoData);
  const [formData, setFormData] = useState(todoData || {
    title: '',
    description: '',
    priority: 1,
    id: uuid(),
  });

  function handleClick(e) {
    e.preventDefault();
    if(todoData !== undefined){
      updateTodoData(formData);
    }else{
      addTodoData(formData);
    }
  }

  function handleChange(e) {
    let {name, value} = e.target;
    setFormData(formData => ({...formData, [name]:value}))
  }

  return (
    <form onSubmit={handleClick}>
      <label htmlFor="title">Title</label>
      <input id='title' type="text" placeholder='title' name='title' value={formData.title} required onChange={handleChange}/>
      <label htmlFor="description">Description</label>
      <textarea id='description' placeholder='description' name='description' value={formData.description} required onChange={handleChange}/>
      <label htmlFor="priority">Priority:</label>
      <select name="priority" id="priority" value={formData.priority} onChange={handleChange}>
        <option value="1">Uber Fast</option>
        <option value="2">Uber</option>
        <option value="3">Bus</option>
      </select>
      {todoData ? <button>Update Todo</button> : <button>Add Todo</button>}
    </form>
  )
}

export default TodoForm;