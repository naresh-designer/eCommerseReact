import React from 'react'
import styled from 'styled-components'
import { FaMinus,FaPlus } from 'react-icons/fa'

const CardAmountToggle = ({amount,setDecre,setIncre}) => {
  return (
    <Wrapper>
        <div className='card_amount' >
            <div onClick={() => setDecre()} className='icon' ><FaMinus className='icon_bg' /></div>
            <div className='amount' >{amount}</div>
            <div onClick={() => setIncre()} className='icon' ><FaPlus className='icon_bg' /></div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin-left:auto;
margin-right:auto;
  .card_amount{
    display:flex;
    align-items:center;

    .amount{
      margin-left:15px;
      margin-right:15px;
    }

      .icon{
        background-color:${({theme}) => theme.common.blackColor };
        width:30px;
        height:30px;
        border-radius:100px;
        display:grid;
        place-items:center;
        cursor:pointer;

        .icon_bg{
          color:${({theme}) => theme.common.whiteColor };
        }        
      }
  }
`

export default CardAmountToggle