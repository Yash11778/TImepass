import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  function addTodo(){
    let newTodos = []
    for(let i=0; i< todos.length; i++){
      newTodos.push(todos[i])
    }
    newTodos.push({
      title: "Learn React",
      description: "Learn React 2-3hr daily"
    })
    newTodos.push({
      title: "Hii Guys",
      description: "What's up"
    })

    setTodos(newTodos)
  }

   return (
      <div>
        <button onClick={addTodo}>Add a Random Todo</button>

        {todos.map(function(todo){
          return <Todo title={todo.title} description={todo.description} />
        })}

      </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
