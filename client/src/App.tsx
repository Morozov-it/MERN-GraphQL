import React from 'react'
import styled from 'styled-components'
import ColorModeProvider from './ColorModeProvider'
import { ToggleButton } from './components/ToggleButton'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <ColorModeProvider>
      <Wrapper>
        <ToggleButton />
        App
      </Wrapper>
    </ColorModeProvider>
  )
}

export default App
