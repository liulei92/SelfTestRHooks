import React, { useState, createContext, useContext } from 'react'

const CountContext = createContext()

const Counter = () => {
  let count = useContext(CountContext)
  console.log(CountContext, count)
  return (
    <h3>{count}</h3>
  )
}

const Example = () => {
  const [count, setCount] = useState(0) // 数组解构

  return (
    <div style={{zoom: 1.5}}>
      <p>你点击了 {count} 次</p>
      <button onClick={() => { setCount(count + 1) }}>点击</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
        {/* <CountContext.Consumer>
          {
            (context) => {
              console.log(context)
              return (
                <div>{context}</div>
              )
            }
          }
        </CountContext.Consumer> */}
      </CountContext.Provider>
    </div>
  )
}
export default Example
