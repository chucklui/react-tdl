import TopTodo from "./TopTodo";
import NewForm from "./NewForm";
import TodoList from "./TodoList";

const TODOLIST = [
  { title: "Code!", description: "Write some code", priority: 2 },
  { title: "Make dinner", description: "Cook something healthy", priority: 1 },
  { title: "Go to bed", description: "get some sleep", priority: 3 },
];

const TodoApp = () => {
  return (
    <>
      {/* <TopTodo /> */}
      <TodoList todoList={TODOLIST}/>
      {/* <NewForm /> */}
    </>
  );
};

export default TodoApp;
