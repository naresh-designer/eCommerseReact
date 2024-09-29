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
      padding:10px 0;
    }
    
    

    .cart{
      position:relative;
      font-size:20px;

      .cart__addProduct{
        background-color:${({theme}) => theme.common.orangeColor };
        color:${({theme}) => theme.common.whiteColor };
        display:grid;
        align-items:center;
        text-align:center;
        font-size:15px;
        padding:10px 20px 8px;
      }
    }
`

export default Header