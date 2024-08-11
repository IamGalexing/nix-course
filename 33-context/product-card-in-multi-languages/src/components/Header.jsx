import { useContext } from 'react'
import { LangSelecter } from './LangSelecter'
import { NavList } from './NavList'
import { LanguageContext } from '../providers/LanguageProvider'
import { title } from '../constants'

export const Header = () => {
  const { language } = useContext(LanguageContext)

  return (
    <header className="header">
      <h1 className="header-title">{title[language].title}</h1>
      <div className="header-content">
        <NavList />
        <LangSelecter />
      </div>
    </header>
  )
}
