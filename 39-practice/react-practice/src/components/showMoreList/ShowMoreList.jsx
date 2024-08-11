import { useState } from 'react'
import { StyledButton } from './styles'
import PropTypes from 'prop-types'

export const ShowMoreList = ({ data }) => {
  const [showAll, setShowAll] = useState(false)

  if (!data || !Array.isArray(data)) return data

  const list = data.map((item) => item.name)

  const handleClick = () => {
    setShowAll(true)
  }

  return (
    <>
      {list.length <= 3 || showAll ? (
        <div>{list.join(', ')}</div>
      ) : (
        <div>
          {list.slice(0, 3).join(', ')}
          <StyledButton onClick={handleClick}>Show more...</StyledButton>
        </div>
      )}
    </>
  )
}

ShowMoreList.propTypes = {
  data: PropTypes.any,
}
