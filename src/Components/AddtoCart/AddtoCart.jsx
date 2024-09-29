import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa6'
import CardAmountToggle from '../CardAmountToggle/CardAmountToggle'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../ProductContext/CartContext'

const AddtoCart = ({product}) => {

    const { addToCart} = useCartContext()

    const{id,colors,stock}=product

    const[btnColor,setBtnColor]=useState(colors[0])
    const[amount,setAmount]=useState(1)

    const setDecre = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    
    const setIncre = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

  return (
    <Wrapper>
        <div className='colors_box' >
        Color :  
            {
                colors.map((curColor,index) => {
                    return(
                        <button className={`colorButton ${btnColor === curColor ? 'activeBtn' : ''} `} key={index} style={{backgroundColor:curColor}} onClick={() => setBtnColor(curColor) } >
                        {btnColor === curColor ? <FaCheck className='check_color' /> : null }
                        </button>
                    )
                } )
            }
        </div>

            <CardAmountToggle amount={amount} setDecre={setDecre} setIncre={setIncre} />

            <NavLink to='/cart' onClick={() => addToCart(id,btnColor,amount,product)} >
                <Button className='cart_button' >
                    Add To Cart
                </Button>
            </NavLink>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    .colors_box{
        display:flex;
        place-items:center;
        margin-top:20px;
    }
    .colorButton{
        width:25px;
        height:25px;
        border-radius:100px;
        border:none;
        opacity:.5;
        margin-left:5px;
        display:grid;
        place-items:center;
        gap:10px;
        cursor:pointer;
    }
        .activeBtn{
            opacity:1;
        }

        .check_color{
            color:${({theme}) => theme.common.whiteColor };
        }

        .cart_button{
            margin-block:30px;
        }
`

export default AddtoCart