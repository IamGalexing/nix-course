import { createContext, useState } from 'react'
import { themes } from '../constants'
import PropTypes from 'prop-types'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === themes.light ? themes.dark : themes.light))
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
