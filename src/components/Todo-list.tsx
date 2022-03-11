import { MdOutlineClose } from 'react-icons/md'
import styled from 'styled-components'

const TodoListStyles = styled.div`
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
  }`

interface Props {
  todos: string[]
  removeTodo: (index: number) => void
}

export const TodoList = ({ todos, removeTodo }: Props) => {
  return (<>
    {
    todos.map((todo: string, index: number) => (
      <TodoListStyles>
        <div className="todo-container" key={index}>
          <span>{ todo }</span>
          <button 
            className="bg-alert"
            onClick={() => { removeTodo(index) }}
          >
            <MdOutlineClose size={30}/>
          </button>
        </div>
      </TodoListStyles>
    ))
    }
  </>)
}
