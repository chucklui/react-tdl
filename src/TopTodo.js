import Todo from "./Todo";

const TopTodo = ({todoData}) => {
  const getTopPriority = (todoData) => {
    let onePriority = todoData.find((td) => Number(td.priority) === 1);
    let twoPriority = todoData.find((td) => Number(td.priority) === 2);
    let threePriority = todoData.find((td) => Number(td.priority) === 3);
    return onePriority || twoPriority || threePriority;
  };
  console.log('TopTodo Component', getTopPriority(todoData));

  return (
    <Todo todo={getTopPriority(todoData)}/>
  )
};

export default TopTodo;