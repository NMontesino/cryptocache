import styled, { css } from 'styled-components'

import AppLayout from './AppLayout'
import WelcomeMessage from './WelcomeMessage'

import './App.css'


const App = (props) =>
{
  return (
    <AppLayout>
      <WelcomeMessage />
    </AppLayout>
  )
}

export default App
