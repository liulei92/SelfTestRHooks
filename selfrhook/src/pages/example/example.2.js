import React, { useState } from 'react'

const Example2 = () => {
  const [age, setAge] = useState(18)
  const [sex, setSex] = useState('男')
  const [job, setJob] = useState('前端')

  return (
    <div>
      <p>age: {age} </p>
      <p>sex: {sex} </p>
      <p>job: {job} </p>
    </div>
  )
}

export default Example2
