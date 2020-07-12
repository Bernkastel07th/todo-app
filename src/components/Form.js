import React, { useState, useContext } from 'react'
import { addTodo } from 'actions/actions'
import { DispatchContext } from './App'

function Form() {
  const [value, setValue] = useState('')
  const dispatch = useContext(DispatchContext)

  const submitHandler = (event) => {
    event.preventDefault()
    if (!value) return
    dispatch(addTodo(value))
    setValue('')
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="TODOを入力してください"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">TODOを登録する</button>
    </form>
  )
}

export default Form
