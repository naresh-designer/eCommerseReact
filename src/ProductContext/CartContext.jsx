import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../Reducer/cartReducer'

const CartContextFilter = createContext()

const getLocalCartData = () => {
    let localCartData = localStorage.getItem('loaclCart')
    // if(newCartData == []){
    //     return []
    // }else{
    //     return JSON.parse(localCartData)
    // }
    const parseData = JSON.parse(localCartData)
    if(!Array.isArray(parseData)) return []

    return parseData
}

const initialState = {
    // cart:[],
    cart:getLocalCartData(),
    total_item:'',
    total_price:'',
    shipping_fee:5000,

}

const CartProvider = ({children}) => {

    const[state,dispatch]=useReducer(reducer,initialState)

    const addToCart = (id,btnColor,amount,product) => {
        dispatch({type:'ADD_TO_CART', payload: {id,btnColor,amount,product}})
    }


    // Set Increment and Decrement the product

    const setDecre = (id) =>{
        dispatch({type:'SET_DECREMENT', payload: id})
    }
    const setIncre = (id) =>{
        dispatch({type:'SET_INCREMENT', payload: id})
    }

    // Remove Cart Items
    const removeItems = (id) => {
        dispatch({type:'REMOVE_PRODUCT_ITEMS', payload:id})
    } 

    // Clear All Cart Data

    const clearCart = () => {
        dispatch({type:'CLEAR_CART'})
    }


    // Data Add Local Storage
    useEffect(() => {
        dispatch({type:'CART_TOTAL_ITEM'})
        dispatch({type:'CART_TOTAL_PRICE'})
        localStorage.setItem("loaclCart", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContextFilter.Provider value={{...state,addToCart,removeItems,clearCart,setDecre,setIncre}} >{children}</CartContextFilter.Provider>
}

const useCartContext = () => {
    return useContext(CartContextFilter)
}

export {CartProvider,useCartContext}