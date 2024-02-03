import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import LoginForm from './components/LoginForm'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Switch>
          <Route exact path="/" component={LoginForm} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
