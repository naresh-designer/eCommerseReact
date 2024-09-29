import React from 'react'
import styled from 'styled-components'
import { BiSolidShoppingBags } from "react-icons/bi"

const Logo = ({className}) => {
  return (
    <Wrapper>
        <BiSolidShoppingBags className='shopping__bag' />
        <div className={`logo ${className}`}>E-<span>shop</span></div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display:flex;
    align-items:center;
    font-size:30px;
    color:${({theme}) => theme.common.greenBg };
    font-family:${({theme}) => theme.common.merriweatherFont };
    margin-block:15px;

    .shopping__bag{
        font-size:40px;
        animation: logoAnim .6s infinite alternate-reverse;
        
        @keyframes logoAnim {
            0%{
                transform: scale(.9);
            }
            100%{
                transform: scale(1);
            }
        }
    }
        

    .logo{
        color:${({theme}) => theme.common.blackColor };
    }
`

export default Logo