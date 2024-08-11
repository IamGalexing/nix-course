import { ShowMoreList } from '../showMoreList'
import {
  StyledField,
  StyledFieldTitle,
  StyledFieldInfo,
  StyledHeader,
  StyledItemList,
  StyledLink,
  StyledDetails,
  StyledImg,
  StyledFields,
} from './styles'
import PropTypes from 'prop-types'

export const CardField = ({ cardData, CardInfo }) => {
  return (
    <StyledItemList>
      <StyledLink to={`${cardData.id}`}>
        <StyledImg src={cardData.src || cardData.image} alt="poster" />
        <StyledDetails>
          <StyledHeader>{cardData.name || cardData.vehicle_name}</StyledHeader>
          <StyledFields>
            {CardInfo.map((info) => (
              <StyledField key={info.title}>
                <StyledFieldTitle>{info.title}:</StyledFieldTitle>
                <StyledFieldInfo>
                  <ShowMoreList data={cardData[info.key]} />
                </StyledFieldInfo>
              </StyledField>
            ))}
          </StyledFields>
        </StyledDetails>
      </StyledLink>
    </StyledItemList>
  )
}

CardField.propTypes = {
  cardData: PropTypes.object.isRequired,
  CardInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
}
