import { createContext, useContext, useEffect, useReducer } from "react";
import { productApi } from "../Constant/Constant";
import axios from "axios";
import reducer from '../Reducer/productReducer'

const AppContext = createContext();

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featuredHomeProducts:[],
    mobileHome:[],
    isDetailPageLoading:false,
    setProductDetail:{},
}

const AppProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState)

    // Multipal Products Api
    const getProducts = async (url) => {
        dispatch({type:'SET_LOADING'})
        try {
            const res = await axios.get(url);
            const products = await res.data; 
            dispatch({type:'SET_API_DATA', payload: products})
        } catch (error) {
            dispatch({type:'API_ERROR'})
        }
        
    }
    useEffect( () => {
        getProducts(productApi)
    },[] )

    // Product Details Page Api

    const getProductDetail = async (url) => {
        dispatch({type:'SET_DETAIL_PAGE_LOADING'})
        try {
            const res = await axios.get(url);
            const setProductDetail = await res.data;
            dispatch({type:'SET_DETAIL_PAGE', payload: setProductDetail})
        } catch (error) {
            dispatch({type:'SET_DETAIL_PAGE_ERROR'})
        }
    }


    return(
        <AppContext.Provider value={{...state, getProductDetail}} >{children}</AppContext.Provider>
    )
}

const useProductContext = () => {
    return useContext(AppContext)
}


export {AppContext,AppProvider,useProductContext }