import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

/**
 * @file TodoListComponent
 * @param {Array} todos TODOリストオブジェクトの配列
 */
function TodoList({ todos }) {
  return (
    <Wrapper>
      {todos.map((todo, index) => (
        <Todo index={index} key={index} todo={todo} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ul``

export default TodoList
