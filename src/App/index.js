import styled, { css } from 'styled-components'

import AppLayout from './AppLayout'
import WelcomeMessage from './WelcomeMessage'
import AppBar from './AppBar'

import './App.css'


const App = (props) =>
{
  return (
    <AppLayout>
      <AppBar/>
      <WelcomeMessage/>
    </AppLayout>
  )
}

export default App
