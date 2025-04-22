import { useState, FormEvent } from "react";
import { todoItem } from "../App";

type NewTodoFormProps = {
    addTodo: (todo: todoItem) => void;
  };

const NewTodoForm = ({addTodo} : NewTodoFormProps) => {
    const [newTodoTitle, setNewTodoTitle] = useState<string>("")

    function handleSubmit(e: FormEvent){
        e.preventDefault()
        console.log("Add button clicked")
        if (newTodoTitle.trim() === "") return;
        
        const newTodo : todoItem = {
            id: crypto.randomUUID(),
            title: newTodoTitle,
            done: false
        }
        addTodo(newTodo);
        setNewTodoTitle("");
    }

    return (
        <div className = "flex justify-center mt-8">
            <form onSubmit={handleSubmit} className="flex items-center space-x-4 mt-4">
                <label htmlFor="item" className="font-medium text-gray-700">Title</label>
                <input
                type="text"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                id="item"
                placeholder = "Enter task"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            <button type="submit" className="bg-grey text-black font-semibold py-2 px-4 shadow">Add</button>
            </form>
        </div>
      )
}

export default NewTodoForm