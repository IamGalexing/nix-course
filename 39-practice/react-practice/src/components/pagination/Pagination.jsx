import { useCallback, useEffect, useState } from 'react'
import { StyledWrapper, StyledButton } from './styles'
import PropTypes from 'prop-types'

const paginatorLength = 6

const calcItems = (pages, selected) => {
  const items = []

  for (let i = 0; i < pages; i++) {
    items.push(i + 1)
  }

  if (pages < paginatorLength) {
    return items
  }

  if (selected < paginatorLength - 2) {
    return [...items.slice(0, paginatorLength - 2), '...', pages]
  } else if (pages - paginatorLength + 2 < selected) {
    return [1, '...', ...items.slice(-paginatorLength + 2)]
  }

  const from = selected - paginatorLength / 2 + 2
  const to = selected + paginatorLength / 2 - 2
  return [1, '...', ...items.slice(from, to), '...', pages]
}

export const Pagination = ({ pages, onPageSelected, selected }) => {
  const [items, setItems] = useState([])

  const onPrev = useCallback(() => {
    if (selected > 1) {
      onPageSelected(selected - 1)
    }
  }, [selected, onPageSelected])

  const onNext = useCallback(() => {
    if (selected < pages) {
      onPageSelected(selected + 1)
    }
  }, [selected, pages, onPageSelected])

  const select = useCallback(
    (value) => {
      if (value !== '...') {
        onPageSelected(value)
      }
    },
    [onPageSelected]
  )

  useEffect(() => {
    setItems(calcItems(pages, selected))
  }, [selected, pages])

  return (
    <StyledWrapper>
      <StyledButton onClick={onPrev} aria-label="previous">
        {'<'}
      </StyledButton>
      {items.map((item, index) => (
        <StyledButton
          key={index}
          onClick={() => select(item)}
          aria-label={`page ${item}`}
          role="button"
          className={selected === item ? 'active' : ''}
        >
          {item}
        </StyledButton>
      ))}
      <StyledButton onClick={onNext} aria-label="next">
        {'>'}
      </StyledButton>
    </StyledWrapper>
  )
}

Pagination.propTypes = {
  pages: PropTypes.number,
  onPageSelected: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
}
