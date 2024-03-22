import {useStore,actions} from './store'
import { useRef } from 'react'
function App () {
  const [state,dispatch] = useStore()
  const {Todos,Todoinput} = state
  const inputRef = useRef()
  const handleAdd = () => {
    dispatch(actions.addTodo(Todoinput))
    actions.setTodoInput('')
    inputRef.current.focus()
  }
  const handleDelete = (index) => {
    dispatch(actions.deleteTodo(index))
  }
  return (
    <div style={{padding : 20}}>
      <h1>ToDoList</h1>
      <input 
        ref={inputRef}
        value={Todoinput}
        placeholder='Enter your ...'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
        />
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {Todos.map((Todo,index) => {
          return <li key={index}>{Todo}
            <span 
              style={{marginLeft : 10,
                      cursor : 'pointer'
              }}  
              onClick={() => {handleDelete(index)}}
            >
              X
            </span>
          </li>
        } )}
      </ul>
    </div>
  )
}

export default App
