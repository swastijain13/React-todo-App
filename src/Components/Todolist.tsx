import { todoItem } from "../App";
import TodoItem from "./TodoItem";

type TodolistProps = {
    list : todoItem[],
    handleComplete : (id : string) => void,
    handleDelete : (id: string) => void
}

//const TodoItem : FC<TodoItemProps>
const Todolist  = ({ list, handleComplete, handleDelete }: TodolistProps) => {

    return (
      <ul>
        {list.map((todo, index) => (
          <TodoItem
          key={index}
          index={index}
          title={todo.title}
          done={todo.done}
          onComplete={() => handleComplete(todo.id)}
          onDelete={() => handleDelete(todo.id)}
        />
        ))}
      </ul>
    );
  };

export default Todolist