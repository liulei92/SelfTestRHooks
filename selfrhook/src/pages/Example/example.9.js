// 自定义hooks函数
import React, { useState, useEffect, useCallback } from 'react'

// 自定义 hooks 需要 use 开头命名
const useWinSize = () => {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })
  // 缓存方法
  const onResize = useCallback(
    () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    },
    []
  )

  useEffect(() => {
    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventLister('resize', onResize, false)
    }
  }, [])

  return size
}

const Example9 = () => {
  const size = useWinSize()
  return (
    <div>
      页面Size： {size.width} * {size.height}
    </div>
  )
}

export default Example9