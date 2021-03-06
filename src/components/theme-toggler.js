import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import DarkModeToggle from 'react-dark-mode-toggle'

class ThemeToggle extends React.Component {
    render() {
      return (
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
              <DarkModeToggle
              onChange={e => toggleTheme(e ? 'dark' : 'light')}
              checked={theme === 'dark'}
              size={50}
              speed={2}
            />
          )}
        </ThemeToggler>
      )
    }
  }
  
  export default ThemeToggle;