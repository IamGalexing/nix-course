import { useCount } from './useCount'

export const Count = () => {
  const { count, prevCount, increaseCount } = useCount()

  return (
    <div>
      <p>
        Current value: {count}, previous value: {prevCount ?? 'just initialized'}
      </p>
      <button onClick={increaseCount}>Increase counter!</button>
    </div>
  )
}
