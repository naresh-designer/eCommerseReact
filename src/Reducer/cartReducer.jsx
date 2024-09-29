

const cartReducer = (state,action) => {

    if(action.type === 'ADD_TO_CART'){
        let {id,btnColor,amount,product} = action.payload

        // Find Existing Product

        let existingProduct = state.cart.find((curItem) => curItem.id === id + btnColor )

            if(existingProduct){
                let updateProduct = state.cart.map((curElm) => {
                    if(curElm.id === id + btnColor){
                        let newAmount = curElm.amount + amount


                        if(newAmount >= curElm.max){
                            newAmount = curElm.max
                        }

                        return{
                            ...curElm,
                            amount:newAmount,
                        }
                    }else{
                        return{
                            curElm
                        }
                    }
                } )
                return{
                    ...state,
                    cart:updateProduct,
                }
            }else{

            let cartProduct = {
                id:id + btnColor,
                name:product.name,
                btnColor,
                amount,
                image:product.image[0].url,
                price:product.price,
                max:product.stock,

            }
            
            return{
                ...state,
                cart:[...state.cart, cartProduct],
            }
            }

    }

    // TO SET THE INCREMENT AND DECREMENT
   if(action.type === "SET_DECREMENT"){
        let updateCartProduct = state.cart.map((curElm) => {
            if(curElm.id === action.payload){
                let decAmount = curElm.amount - 1

                if(decAmount <= 1){
                    decAmount = 1
                }
                
                return{
                    ...curElm,
                    amount : decAmount,
                }
            }else{
                return curElm
            }
        } )
        return { ...state, cart:updateCartProduct}
   }

   if(action.type === "SET_INCREMENT"){
    let updateCartProduct = state.cart.map((curElm) => {
        if(curElm.id === action.payload){
            let incAmount = curElm.amount + 1

            if(incAmount >= curElm.max){
                incAmount = curElm.max
            }
            
            return{
                ...curElm,
                amount : incAmount,
            }
        }else{
            return curElm
        }
    } )
    return { ...state, cart:updateCartProduct}
}

   
    // Remove Product Cart Items    
    if(action.type === 'REMOVE_PRODUCT_ITEMS'){
        let updateCart = state.cart.filter((curitem) => {
            return curitem.id !== action.payload
        } )
        return{
            ...state,
            cart:updateCart,
        }
    }

    if(action.type === 'CLEAR_CART'){
        return{
            ...state,
            cart:[],
        }
    }

    // Add Cart Total Items
    if(action.type === 'CART_TOTAL_ITEM'){
        let updatedItemVal = state.cart.reduce((initalVal, curElm) => {
            let {amount} = curElm
            initalVal = initalVal + amount
            return initalVal
        }, 0 )

        return{
            ...state,
            total_item:updatedItemVal
        }
    }

    // Cart Total Price

    if(action.type === 'CART_TOTAL_PRICE'){
        let total_price = state.cart.reduce((initalVal,curElm) => {
            let{price,amount} = curElm


            initalVal = initalVal + price * amount

            return initalVal
        }, 0)

        return{
            ...state,
            total_price,
        }
    }

  return state
}

export default cartReducer