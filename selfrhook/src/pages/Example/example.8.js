// useRef 获取 jsx 上的dom; 可以保存变量
import React, { useRef, useState, useEffect } from 'react'
// const ref = useRef(initialValue)

const Example8 = () => {
  const inputRef = useRef(null)
  const textRef = useRef()

  const handleClick = () => {
    inputRef.current.value = 'hello, nihao'
    console.log(inputRef)
  }

  const [state, setstate] = useState('initialState')

  useEffect(() => {
    textRef.current = state
    console.log(textRef)
  })

  return (
    <>
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>在input上展示文字</button>
      <br/>
      <input value={state} type="text" onChange={(e) => setstate(e.target.value)}/>
    </>
  )
}

export default Example8