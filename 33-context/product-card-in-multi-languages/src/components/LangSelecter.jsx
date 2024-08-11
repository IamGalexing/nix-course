import { useContext } from 'react'
import { LanguageContext } from '../providers/LanguageProvider'
import { languages } from '../constants'

export const LangSelecter = () => {
  const { language, changeLanguage } = useContext(LanguageContext)

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value)
  }

  return (
    <select className="header-lang-selecter" value={language} onChange={handleLanguageChange}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  )
}
