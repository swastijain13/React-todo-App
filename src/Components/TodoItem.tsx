type TodoItemProps = {
    index : number,
    title : string,
    done : boolean,
    onComplete : () => void;
    onDelete : () => void;
}

const TodoItem = ({index, title, done, onComplete, onDelete} : TodoItemProps) => {
    return (
        <div className="flex justify-center mt-6">

            <div className="w-full bg-white shadow-md rounded px-4 py-3 flex justify-between items-center">

                <span>{index + 1}.  </span>

                <span>{title}</span>

                <button onClick={onComplete} disabled={done}
                className={`px-3 py-1 rounded shadow-md ${
                    done ? "bg-green-500 text-white" : "text-green-600"
                    }`}>
                    {done ? "Completed" : "Complete"}
                </button>
                
                <button className="text-red-600 px-3 py-1 rounded shadow-md " onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
