import { PlanItem } from './PlanItem'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

const PlanListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const PlanList = ({ items }) => {
  return (
    <PlanListContainer>
      {items?.map((item) => (
        <PlanItem key={uuidv4()} item={item} />
      ))}
    </PlanListContainer>
  )
}

PlanList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      explanation: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
}
