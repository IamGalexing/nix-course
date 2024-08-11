import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components'

const CardContainer = styled.div`
  font-weight: 700;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2px 0px #cbcbcb;
`

const Title = styled.h2`
  font-size: 16px;
`

const Price = styled.div`
  font-size: 45px;

  & sub {
    color: rgb(0, 0, 0, 0.7);
    position: relative;
    bottom: 10px;
    font-size: 14px;
    font-weight: 700;
  }
`

const Description = styled.div`
  font-size: 14px;
  color: rgb(0, 0, 0, 0.5);
`

const Button = styled.button`
  padding: 12px;
  margin: 30px 0;
  text-align: center;
  color: #fff;
  background-color: #5046e4;
  border: none;
  border-radius: 5px;
`

const Explanation = styled.div`
  font-size: 14px;
`

const ItemsList = styled.ul`
  padding-left: 30px;
  list-style: none;
  font-size: 14px;
  color: rgb(0, 0, 0, 0.5);
`

const ItemOfList = styled.li`
  margin: 15px 0;
  position: relative;
  &::before {
    position: absolute;
    left: -25px;
    top: 2px;
    content: '\\2714';
    font-size: 10px;
    color: #fff;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #5046e4;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const PlanItem = ({ item }) => {
  const { title, price, description, explanation, items } = item

  return (
    <CardContainer role="presentation">
      <Title>{title}</Title>
      <Price>
        $<span>{price}</span>
        <sub>/month</sub>
      </Price>
      <Description>{description}</Description>
      <Button type="button">Buy Plan</Button>
      <Explanation>{explanation}</Explanation>
      <ItemsList>
        {items.map((item) => (
          <ItemOfList key={uuidv4()}>{item}</ItemOfList>
        ))}
      </ItemsList>
    </CardContainer>
  )
}

PlanItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}
