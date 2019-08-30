// useMemo 优化性能
import React, { useState, useMemo } from 'react'

const ChildComponent = ({ name, children }) => {
  function changeGirl1 (name) {
    console.log(name)
    return name + ' girl1'
  }
  // const girl1 = changeGirl1(name) // 这种写法 ，只要父组件发生更新，就会执行
  const girl1 = useMemo(() => changeGirl1(name), [name]) // 当 name 发生变化时 才执行  changeGirl1(name)

  return (
    <>
      <div>{girl1}</div>
      <div>{children}</div>
    </>
  )
}

const Example7 = () => {
  const [girl1, setGirl1] = useState('girl1 waiting...')
  const [girl2, setGirl2] = useState('girl2 waiting...')

  return (
    <>
      <ChildComponent name={girl1}>{ girl2 }</ChildComponent>
      <button onClick={() => {setGirl1(new Date().getTime())}}>girl1</button>
      <button onClick={() => {setGirl2(new Date().getTime() + ' girl2')}}>girl2</button>
    </>
  )
}

export default Example7
