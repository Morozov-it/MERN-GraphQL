import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Divider, Layout } from 'antd'
import { setTheme, getTheme } from './theme-antd'
import logo from '@assets/logo.png'
import ToggleTheme from '@components/ToggleTheme'
import Clients from '@components/clients/Clients'
import { Container } from '@components/Container'

const LayoutWrapper = styled(Layout)`
  width: 100vw;
  height: 100vh;

  .ant-layout-header {
    /* position: fixed;
    z-index: 10; */
    width: 100%;
  }
  .ant-layout-content {
    width: 100%;
    padding-top: 10px;
  }
  .ant-layout-footer {
    width: 100%;
    text-align: center;
  }
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const { Header, Content, Footer } = Layout

const App: React.FC = () => {
  useEffect(() => setTheme(getTheme()), [])

  return (
    <LayoutWrapper>
      <Header>
        <Container>
          <div className='header-content'>
            <img src={logo} alt="logo" />
            <ToggleTheme />
          </div>
        </Container>
      </Header>
      <Content>
        <Container>
          <Clients />
        </Container>
      </Content>
      <Footer>
        <Divider />
        Ant Design ©2022
      </Footer>
    </LayoutWrapper>
  )
}

export default App