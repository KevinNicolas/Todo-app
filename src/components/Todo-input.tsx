import { useState } from "react"
import { MdAdd } from "react-icons/md"
import styled from "styled-components"

const TodoInputStyles = styled.div`
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
`

interface Props {
  addTodo: (value: string) => void
}

export const TodoInput = ({ addTodo }: Props) => {
  const [todoInput, settodoInput] = useState('')
  
  const addTodoEvent = () => {
    addTodo(todoInput)
    settodoInput('')
  }

  const keyPressEvent = ({ key }: KeyboardEvent) => { if (key === 'Enter') addTodoEvent() }

  return (
    <TodoInputStyles>
      <div className="input-container">
        <input
          type="text"
          placeholder="Todo..."
          value={todoInput}
          onInput={ ({ target }) => { settodoInput((target as any).value) } }
          onKeyDown={(keyPress: any) => { keyPressEvent(keyPress) }}
        />
        <button className="bg-primary" onClick={addTodoEvent}>
          <MdAdd size={40} />
        </button>
      </div>
    </TodoInputStyles>
  )
}
