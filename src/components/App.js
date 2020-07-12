import React, { createContext } from 'react'
import styled from 'styled-components'
import { useRender } from 'hooks/render'
import Form from './Form'
import TodoList from './TodoList'

export const DispatchContext = createContext()

function App() {
  const [todos, dispatch] = useRender('http://localhost:3001/get_todos')

  return (
    <TodoWrap>
      <DispatchContext.Provider value={dispatch}>
        <TodoList todos={todos} />
        <Form />
      </DispatchContext.Provider>
    </TodoWrap>
  )
}

const TodoWrap = styled.div``

export default App
