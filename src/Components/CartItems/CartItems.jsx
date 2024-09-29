import React from 'react'
import FormatePrice from '../../Helpers/FormatePrice/FormatePrice'
import CardAmountToggle from '../CardAmountToggle/CardAmountToggle'
import { AiFillDelete } from "react-icons/ai"
import { useCartContext } from '../../ProductContext/CartContext'

const CartItems = ({data}) => {
    const { id,btnColor,amount,name,price,image } = data
    const { removeItems,setDecre,setIncre } = useCartContext()

    // const setDecre = () => {
    //     // amount > 1 ? setAmount(amount - 1) : setAmount(1)
    // }
    
    // const setIncre = () => {
    //     // amount < stock ? setAmount(amount + 1) : setAmount(stock)
    // }

  return (
    <div className='cart_items__list grid grid__five' >
        <div className='car_image__name' >
            <div className='hide' >
            <figure>
                <img src={image} alt={id} />
            </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className='color_div' >
                <p>Color :</p> <div className='color-style' style={{backgroundColor:btnColor, color:btnColor}} ></div>
                </div>
            </div>
        </div>

        {/* Price */}
        <div className='cart_price hide' >
            <p><FormatePrice price={price} /></p>
        </div>


        {/* Quantity */}
        <CardAmountToggle amount={amount} setDecre={()=>setDecre(id)} setIncre={()=>setIncre(id)} className='cart_items__amount' />

        {/* Sub Total */}
        <p className='hide' ><FormatePrice price={price * amount} /></p>

        {/* Remove */}
        <div className='remove_items'>
        <p ><AiFillDelete onClick={() => removeItems(id) } /></p>
        </div>
    </div>
  )
}

export default CartItems