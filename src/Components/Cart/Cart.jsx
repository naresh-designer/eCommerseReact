import React from 'react'
import { useCartContext } from '../../ProductContext/CartContext'
import styled from 'styled-components';
import CartItems from '../CartItems/CartItems';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button'
import FormatePrice from '../../Helpers/FormatePrice/FormatePrice';

const Cart = () => {
    const {cart,clearCart,total_price,shipping_fee} = useCartContext()

    if(cart.length === 0){
        return(
            <EmptyDiv>
         <div>Cart List is Empty</div>
         </EmptyDiv>
        )
    }
    
  return (
    <Wrapper>
        <div className="main__wrapper">
            <div className='cart__list grid grid__five' >
                <p>Item</p>
                <p className='hide' >Price</p>
                <p>Quantity</p>
                <p className='hide' >SubTotal</p>
                <p>Remove</p>
            </div>
            <hr/>

            <div className="cart__items">
                {
                    cart.map((curElm) => {
                        return <CartItems key={curElm.id} data={curElm} />
                    } )
                }
            </div>
            <hr/>

                <div className='cart_two__button' > 
                    <NavLink to='/product' >
                        <Button>Continue Shopping</Button>
                    </NavLink>
                    <NavLink onClick={clearCart} >
                        <Button className='red_button' >Clear Cart</Button>
                    </NavLink>
                </div>

                {/* Order Total Amount */}

                <div className="order_total__amount">
                    <div className="order_total_subdata">
                        <div>
                            <p>SubTotal :</p>
                            <p><FormatePrice price={total_price} /></p>
                        </div>
                        <div>
                            <p>Shipping Fee :</p>
                            <p><FormatePrice price={shipping_fee} /></p>
                        </div>
                        <hr/>
                        <div>
                            <p>Order Total :</p>
                            <p><FormatePrice price={shipping_fee + total_price} /></p>
                        </div>
                    </div>
                </div>
            
        </div>
    </Wrapper>
  )
}

const EmptyDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:70vh;
    font-size:40px;
`

const Wrapper = styled.section`
padding-block:50px;

.cart__items{
    padding-bottom:30px;
}

.cart__list{
    p{
        text-align:center;
    }
}
    .car_image__name{
        display:flex;
        gap:10px;
    }
    .car_image__name img{
        width:80px;
        display:inline;
    }

    .cart_items__list{
        margin-top:30px;
    }

    .cart_items__list p{
        text-align:center;
    }

    .color_div{
        display:flex;
        place-items:center;
        gap:5px;
    }
        
    .color_div p{
        margin-bottom:0;
    }

    .color-style{
        --colorWh:15px;
        width:var(--colorWh);
        height:var(--colorWh);
        border-radius:100px;
    }

    .cart_items__amount{
        margin-inline:auto;
    }

    .card_amount{
        margin-top:0;
    }

    .remove_items{
        cursor:pointer;
    }

    .remove_items svg{
        color:red;
    }

    .cart_two__button{
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
    }

    .red_button{
        background-color:red;
        border:red;
    }
        
    .order_total__amount{
        background-color:#f8f6f3;
        max-width:400px;
        padding:50px 30px 30px;
    }

    .order_total_subdata div{
        display:flex;
        justify-content:space-between;
    }

    .order_total_subdata hr{
        margin-block:10px;
    }

    @media(width <= 500px){
        .grid__five{
            grid-template-columns:repeat(3, 1fr);
        }
        .hide{
            display:none;
        }
        
    }
`

export default Cart