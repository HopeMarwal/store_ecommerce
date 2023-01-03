import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const ThemeContext = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <Context.Provider
      value={{ isDark, setIsDark }}
    >
      {children}
    </Context.Provider>
  )

}

export const useThemeContext = () => useContext(Context)