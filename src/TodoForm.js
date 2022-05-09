import {useState} from 'react';


const TodoForm = ({updateTodoData}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 1
  });

  function handleClick(e) {
    e.preventDefault();
    updateTodoData(formData);
  }

  function handleChange(e) {
    let {name, value} = e.target;
    setFormData(formData => ({...formData, [name]:value}))
  }
  return (
    <form onSubmit={handleClick}>
      <label htmlFor="title">Title</label>
      <input id='title' type="text" placeholder='title' name='title' value={formData.title} onChange={handleChange}/>
      <label htmlFor="description">Description</label>
      <textarea id='description' placeholder='description' name='description' value={formData.description} onChange={handleChange}/>
      <label htmlFor="priority">Priority:</label>
      <select name="priority" id="priority" onChange={handleChange}>
        <option value="1">Uber Fast</option>
        <option value="2">Uber</option>
        <option value="3">Bus</option>
      </select>
      <button>Add Todo</button>
    </form>
  )
}

export default TodoForm;