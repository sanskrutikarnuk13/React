import React, { useState } from 'react'
import "./Todo.css"
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [Todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }])

    const handleButton = () => {
        setTodos([...Todos, { task: inputData, id: uuidv4() }]);
        setInputData("")
    }

    const handleInput = (event) => {
        // console.log(event.target.value)
        setInputData(event.target.value)
    }


    const handleDelete = (id) => {
        setTodos(Todos.filter((todo) => todo.id != id))
    }

    return (
        <div className="todo-container">
            <h1 className="todo-title">Todo List</h1>

            <input
                className="todo-input"
                type='text'
                placeholder='Enter Task'
                value={inputData}
                onChange={handleInput}
            />

            <button className="todo-btn" onClick={handleButton}>ADD</button>

            <h5 className="todo-subtitle">All Task</h5>

            <ul className="todo-list">
                {Todos.map((Todo) => {
                    return (
                        <div key={Todo.id}>
                            <li className="todo-item">{Todo.task}
                                  <button onClick={() => handleDelete(Todo.id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            </li>
                          
                            </div>

                    )

                })}

            </ul>
        </div>
    )
}

export default Todo