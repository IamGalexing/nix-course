import { useContext } from 'react'
import { LanguageContext } from '../providers/LanguageProvider'
import PropTypes from 'prop-types'

export const NavItem = ({ navigation }) => {
  const { language } = useContext(LanguageContext)

  return (
    <li className="nav-item">
      <a href={navigation[language].url}>{navigation[language].name}</a>
    </li>
  )
}

NavItem.propTypes = {
  navigation: PropTypes.shape({
    en: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired,
    ua: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired,
  }).isRequired,
}
