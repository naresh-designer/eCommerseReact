import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

const Offer = () => {
  return (
    <Wrapper>
        <div className="main__wrapper offer_container ">
            <div className="offer">
                <h3>Get 25% Off On Your First Purchase!</h3>
                <NavLink to='/product' >
                <Button>
                    Shop
                </Button>
                </NavLink>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .offer_container{
        background-color:#F3F6F3;
        color:${({theme}) => theme.common.blackColor };
        transform: translateY(-125px);
        border-radius: 10px;
        max-width: 1000px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .offer{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`

export default Offer