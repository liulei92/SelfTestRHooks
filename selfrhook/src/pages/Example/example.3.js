import React, { useState, useEffect } from 'react'

const Example = () => {
  const [count, setCount] = useState(0) // 数组解构
  // 副作用 代替 componentDidMount 和 componentDidUpdate
  // 异步行为
  useEffect(() => {
    console.log(`进入 和更新 ${count}`) // 此时 代替 componentDidMount 和 componentDidUpdate
    // willMount 解绑 
    return () => {
      console.log('离开')
    }
  }, [count]) // 第二个参数是 确定相关state变更时会触发 解绑行为; 若为空数组，则willmount会执行解绑

  return (
    <div style={{zoom: 1.5}}>
      <p>你点击了 {count} 次</p>
      <button onClick={() => { setCount(count + 1) }}>点击</button>
    </div>
  )
}
export default Example
