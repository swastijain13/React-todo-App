import { useState } from "react"
import { FC } from "react"
import NewTodoForm from "./Components/NewTodoForm";
import Todolist from "./Components/Todolist";

export type todoItem = {
  id: string,
  title : string,
  done : boolean
}

const App : FC = () => {

  const [todoList, setTodoList] = useState<todoItem[]>([])
  const [filter, setFilter] = useState<"ALL" | "PENDING" | "COMPLETED">("ALL")


  const addTodo = (newTodo: todoItem) => {
    setTodoList([...todoList, newTodo]);
  };

  const handleComplete = (taskId : string) => {
    // const updatedList = [...todoList]
    // updatedList[index].done = true
    setTodoList(todoList.map((todo)=>taskId===todo.id? {...todo, done : !todo.done} : {...todo}))
  }

  const handleDelete = (taskId:string) => {
    const updatedList = todoList.filter((todo) => todo.id !== taskId);
    setTodoList(updatedList);
  };

  const filteredList = todoList.filter(todo => 
    filter === "ALL" ? true : 
    filter === "PENDING" ? !todo.done : 
    todo.done
  )

  return (
    <div className="text-center">
      
      <h2 className="text-3xl font-bold text-center mt-8">To-Do App</h2>

      <div className="flex justify-center mt-8">

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 ml-4 rounded" 
        onClick={() => setFilter("ALL")}>
        ALL
        </button>

        <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 ml-4 rounded" onClick={() => setFilter("PENDING")}>
          PENDING
        </button>

        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 ml-4 rounded" onClick={() => setFilter("COMPLETED")}>
          COMPLETED 
          </button>
      </div>

      <NewTodoForm addTodo = {addTodo}/>

      {filteredList.length > 0 && (<p className="text-left font-semibold text-gray-700 mb-4">Showing : {filter} tasks</p>)}

      <Todolist 
      list = {filteredList} 
      handleComplete = {handleComplete} 
      handleDelete = {handleDelete}
      />

    </div>
  )
}

export default App
