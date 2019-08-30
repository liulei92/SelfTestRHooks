import React from 'react'
import { ColorContext, UPDATE_COLOR} from './Color'

const Buttons = props => {
  const { dispatch } = props.useContext(ColorContext) // 通过useContext 接收 context
  const dispatchEvent = color => {
    dispatch({
      type: UPDATE_COLOR,
      color
    })
  }
  return (
    <div>
      <button onClick={() => dispatchEvent('red')}>红色</button>
      <button onClick={() => dispatchEvent('yellow')}>黄色</button>
      <button onClick={() => dispatchEvent('green')}>绿色</button>
    </div>
  )
}

export default Buttons
