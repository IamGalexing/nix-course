import { useEffect, useContext } from 'react'
import { ARTICLES, themes } from '../constants'
import { ThemeContext } from '../context/ThemeContext'
import { Article } from './Article'

export const BlogPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.body.style.color = theme === themes.light ? themes.dark : themes.light
    document.body.style.backgroundColor = theme === themes.light ? themes.light : themes.dark
  }, [theme])

  const handleThemeChange = () => {
    toggleTheme()
  }

  return (
    <div>
      <header>
        <h1>Blog Page</h1>
        <button onClick={handleThemeChange}>
          {theme === themes.light ? 'Switch to dark mode' : 'Switch to light mode'}
        </button>
      </header>
      <main>
        <h2>Articles</h2>
        <ul>
          {ARTICLES.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
      </main>
    </div>
  )
}
