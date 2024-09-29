import React from 'react'
import styled from 'styled-components'

const Button = ({className,children}) => {
  return (
    <Wrapper>
        <div className={`button ${className}`}>
            {children}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .button{
            background-color:${({theme}) => theme.common.greenBg };
            border:1px solid ${({theme}) => theme.common.greenBg };
            padding:15px 30px;
            color:${({theme}) => theme.common.whiteColor };
            transition:all .5s;
            display:inline-flex;
            margin-block:30px;

            &:hover{
                background-color:transparent;
                border:1px solid ${({theme}) => theme.common.greenBg };
                color:${({theme}) => theme.common.blackColor };
                scale:.95;
            }
        }
    
`

export default Button