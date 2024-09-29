import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <MainHeader>
        <div className="main__wrapper header ">
          <Logo/>
          <Nav/>
        </div>
    </MainHeader>
  )
}

const MainHeader = styled.header`
background-color:#f8f6f3;
    .header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding-block:10px;
    }
    
    

    
`

export default Header