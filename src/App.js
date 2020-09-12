import React from 'react'
import './App.css'
import ThemedButton from './components/usecontext/ThemedButton'

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

export const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="App">
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
