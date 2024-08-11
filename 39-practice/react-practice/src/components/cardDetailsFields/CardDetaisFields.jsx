import {
  StyledWrapper,
  StyledImg,
  StyledHeader,
  StyledDetails,
  StyledFields,
  StyledField,
  StyledFieldTitle,
  StyledFieldInfo,
} from './styles'
import { ShowMoreList } from '../showMoreList'
import PropTypes from 'prop-types'

export const CardDetailsFields = ({ cardData, CardInfo }) => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  )
}

CardDetailsFields.propTypes = {
  cardData: PropTypes.object.isRequired,
  CardInfo: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
}
