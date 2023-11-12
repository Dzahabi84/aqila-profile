import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const SetDarkTheme = () => setTheme('dark')

  const SetLightTheme = () => setTheme('light')

  return (
    <ThemeContext.Provider value={{ theme, SetDarkTheme, SetLightTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProviderContext