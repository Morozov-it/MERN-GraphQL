import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from 'antd'
import './themes/App.less'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`

const App: React.FC = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Wrapper>
      <div>
        <Button type="primary" onClick={changeTheme}>Change Theme</Button>
      </div>
        App
      </Wrapper>
  )
}

export default App
