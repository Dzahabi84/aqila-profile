import { createContext, useContext, useState } from 'react';

export const GlobalContext = createContext()

export const useGlobal = () => {
  return useContext(GlobalContext)
}

export const GlobalProviderContext = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const SetDarkTheme = () => {
    setTheme('dark')
    document.body.style.backgroundColor = "black"
  }

  const SetLightTheme = () => {
    setTheme('light')
    document.body.style.backgroundColor = "white"
  }



  return (
    <GlobalContext.Provider value={{ theme, SetDarkTheme, SetLightTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProviderContext