import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button, Layout } from 'antd'
import { setTheme, toggleTheme, getTheme } from './theme-antd'

const LayoutWrapper = styled(Layout)`
  width: 100vw;
  height: 100vh;
`

const App: React.FC = () => {
  useEffect(() => setTheme(getTheme()), [])

  return (
    <LayoutWrapper>
      <Layout.Content>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </Layout.Content>
    </LayoutWrapper>
  )
}

export default App
