import styled from "styled-components"
import { MdAdd, MdOutlineClose } from 'react-icons/md'
import { useEffect, useState } from "react"

const AppStyles = styled.div`
  button {
    cursor: pointer;
    transition: transform 150ms linear;
    &:active {
      transform: scale(.95);
    }
  }

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

    .input-container {
      width: 100%;
      padding: .5rem 1rem;
      margin-bottom: 1rem;
      display: flex;
      flex-flow: row;
      align-items: center;

      input { 
        width: 100%;
        border-radius: 5px 0 0 5px;
        padding: 0 1rem;
        font-size: 1rem;
        color: #333;
      }

      button { 
        color: white;
        width: 3rem;
        border-radius: 0 5px 5px 0;
      }

      input, button {
        height: 3rem;
      }
    }

    .todo-container {
      width: 100%;
      min-height: 2rem;
      border-radius: 5px;
      height: 2.5rem;
      background: #fefefe;
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      
      button {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 5px;
        color: white;
      }

      span {
        padding: 0 2rem;
      }
    }
  }
`

function App() {
  const [todoInput, settodoInput] = useState<string>('')
  const [todos, settodos] = useState<string[]>([])

  const addTodo = () => {
    if (todoInput !== '') {
      settodos([...todos, todoInput])
      settodoInput('')
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
            <div className="input-container">
              <input
                type="text"
                placeholder="Todo..."
                value={todoInput}
                onInput={ ({ target }) => { settodoInput((target as any).value) } }
              />
              <button className="bg-primary" onClick={addTodo}>
                <MdAdd size={40} />
              </button>
            </div>
            {
              todos.length > 0 ? todos.map((todo: string, index: number) => (
                <div className="todo-container" key={index}>
                  <span>{ todo }</span>
                  <button 
                    className="bg-alert"
                    onClick={() => { removeTodo(index) }}
                  >
                    <MdOutlineClose size={30}/>
                  </button>
                </div>
              ))
              : <></>
            }
            <span>{ todos.length }{ (todos.length > 0).toString() }, [{todos.toString()}]</span>
          </div>
        </div>
      </div>
    </AppStyles>
  )
}

export default App
