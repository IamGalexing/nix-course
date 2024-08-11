import { useState, useEffect } from 'react'
import { useRef } from 'react'

export const useCount = () => {
  const [count, setCount] = useState(0)
  const prevCountRef = useRef()

  useEffect(() => {
    prevCountRef.current = count
  }, [count])

  const increaseCount = () => {
    setCount((prev) => prev + 1)
  }

  return {
    count,
    prevCount: prevCountRef.current,
    increaseCount,
  }
}
