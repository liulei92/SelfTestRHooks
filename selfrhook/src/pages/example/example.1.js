import React, { useState } from 'react'
import Example2 from './example.2'

const Example = () => {
  const [count, setCount] = useState(0) // 数组解构

  return (
    <div style={{zoom: 1.5}}>
      <p>你点击了 {count} 次</p>
      <button onClick={() => { setCount(count + 1) }}>点击</button>
    </div>
  )
}
export default Example
