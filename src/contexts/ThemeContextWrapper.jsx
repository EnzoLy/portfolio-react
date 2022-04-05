import { useState, useEffect } from 'react'
import { ThemeContext, themes } from './ThemeContext'

export default function ThemeContextWrapper (props) {
  const localStorageTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(localStorageTheme || themes.light)

  const changeTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  useEffect(() => {
    if (document.documentElement.getAttribute('data-theme') === themes.dark) {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
