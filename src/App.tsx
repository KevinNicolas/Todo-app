import styled from "styled-components"
import { MdAdd, MdOutlineClose } from 'react-icons/md'
import { useEffect, useState } from "react"
import { TodoList } from "./components/Todo-list"
import { TodoInput } from "./components/Todo-input"

const AppStyles = styled.div`
  .todos-container {
    --header-height: 5rem;
    
    background: #eaeaea;
    display: grid;
    min-width: 80%;
    min-height: 80%;
    padding: 0 1rem;
    border-radius: 5px;
    grid-template-rows: var(--header-height) calc(100% - var(--header-height));
  }

  .header-container {
    display: flex;
    flex-flow: row;
    align-items: center;
    padding: 1rem 1rem;
    margin: 0 1rem;

    border-bottom: 2px solid #333;
    
    h1, h1 > span {
      font-size: 2rem;
    }

    .divider {
      width: 100%;
      height: 2px;
      margin: 0 2rem;
      background: #333;
    }
  }

  .todos-container {
    display: flex;
    flex-flow: column;
    gap: .5rem;
  }
`

function App() {
  const [todos, settodos] = useState<string[]>([])

  const addTodo = (value: string) => {
    if (value !== '') {
      settodos([...todos, value])
    }
  }

  const removeTodo = (index: number) => {
    const newTodos = todos
    newTodos.splice(index, 1)
    settodos([...newTodos])
  }

  useEffect(() => {}, [todos])

  return (
    <AppStyles>
      <div className="page-container center">
        <div className="todos-container">
          <div className="header-container">
            <h1><span className="text-primary">React</span>-todo-list</h1>
          </div>
          <div className="todos-container">
            <TodoInput 
              addTodo={addTodo}
            />
            <TodoList 
              todos={todos}
              removeTodo={removeTodo}
            />
          </div>
        </div>
      </div>
    </AppStyles>
  )
}

export default App
