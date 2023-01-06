import {createContext, useCallback, useEffect, useState} from "react"
import {IThemeContext, IThemeProvider} from "../../interfaces/theme/theme";


export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const handleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}