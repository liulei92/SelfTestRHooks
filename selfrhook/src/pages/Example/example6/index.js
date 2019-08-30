// userReducer 和 useContext 实现 Redux
import React, { useEffect, useContext } from 'react'
import Buttons from './Buttons'
import ShowArea from './ShowArea'
import { Color } from './Color'

const Example6 = () => {
  useEffect(() => {
    console.log('didMout 或 didUpdate')
    return () => {
      console.log('willMount')
    }
  }, [])

  return (
    <Color>
      <Buttons useContext={useContext}/>
      <ShowArea useContext={useContext}/>
    </Color>
  )
}

export default Example6
