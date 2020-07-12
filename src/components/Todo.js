import React, { useContext } from 'react'
import styled from 'styled-components'
import { DispatchContext } from './App'
import { removeTodo, toggleTodo } from 'actions/actions'

/**
 * @file TodoComponent
 * @param {Object} todo TODOの内容と達成状況を保持する
 * @param {Number} index 何番目のTODOリストかを表す
 */
function Todo({ todo, index }) {
  const dispatch = useContext(DispatchContext)

  const handleClickToggleTodo = () => {
    dispatch(toggleTodo(index))
  }

  const handleClickRemoveTodo = () => {
    dispatch(removeTodo(index))
  }

  return (
    <Wrapper>
      <Text>{todo.text}</Text>
      <ButtonList>
        <li>
          <button type="button" onClick={handleClickToggleTodo}>
            {todo.isComplete ? '未達成' : '達成'}
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClickRemoveTodo}>
            削除する
          </button>
        </li>
      </ButtonList>
    </Wrapper>
  )
}

const Wrapper = styled.li``

const Text = styled.p``

const ButtonList = styled.ul``

export default Todo
