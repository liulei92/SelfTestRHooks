import React, { useReducer } from 'react'
// Reducer
// const CountReducer = (state, action) => {
//   switch (action.type) {
//     case 'add':
//       return state + 1
//     case 'sub':
//       return state - 1
//     default:
//       return state
//   }
// }

const Example5 = () => {
  // const [state, dispatch] = useReducer(reducer, initialState, init)
  const [core, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      default:
        return state
    }
  }, 0)

  return (
    <div>
      <h2>现在的分数是 { core }</h2>
      <button onClick={() => dispatch({ type: 'add' })}>加</button>
      <button onClick={() => dispatch({ type: 'sub' })}>减</button>
    </div>
  )
}

export default Example5
