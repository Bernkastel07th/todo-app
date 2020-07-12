/**
 * Reducer
 * @param {Array} todos 更新される直前のTODOリスト
 * @param {Object} action どのような更新かを示す[action.type]と更新された値及び項目を示すプロパティを格納する
 */
export const reducer = (todos, action) => {
  switch (action.type) {
    // 初回読み込み時にAPIからGETしたTODOオブジェクトリストをそのまま反映する
    case 'INIT_TODO':
      return action.todos
    // 現在のTODOリストの最後尾に、渡されたテキストを反映したTODOを追加する
    case 'ADD_TODO':
      return [
        ...todos,
        {
          text: action.text,
          isComplete: false,
        },
      ]
    // クリックされたボタンが何番目かを示すindexを元に、該当の配列を除いたTODOリストを作成する
    case 'REMOVE_TODO':
      const newTodos = []
      for (let i = 0; i < todos.length; i++) {
        if (action.index !== i) {
          newTodos.push(todos[i])
        }
      }
      return newTodos
    // クリックされたボタンが何番目かを示すindexを元に、該当のTODOのisCompleteを反転させる
    case 'TOGGLE_TODO':
      return todos.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            isComplete: !todo.isComplete,
          })
        }
        return todo
      })
    default:
      return [...todos]
  }
}
