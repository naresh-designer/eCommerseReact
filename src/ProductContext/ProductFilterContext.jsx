import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/productFilterReducer'
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    filters:{
        text:'',
        category:"all",
        company:"all",
        color:"all",
        maxPrice:0,
        minPrice:0,
    }
}

const FilterContextProvider = ({children}) => {

    const { products } = useProductContext()

    const[state,dispatch]=useReducer(reducer,initialState)


    // Grid Section Code
    const setGridView = () => {
        dispatch({ type:'SET_GRID_VIEW' })
    }

    const setListView = () => {
        dispatch({ type:'SET_LIST_VIEW' })
    }
    // End Grid Section Code

    // Search Upadate Filter Section

    const updateFilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value

        return dispatch({type:'UPDATE_FILTERS_VALUE', payload:{name,value}})
    }

    // Clear All Filter

    const clearFilters = () => {
        dispatch({type:'CLEAR_FILTERS'})
    }

    useEffect(() => {
        dispatch({type:'FILTER_PRODUCTS'})
    },[products,state.filters] )


    

    useEffect(() => {
            dispatch({type:'LOAD_FILTER_CONTEXT_PRODUCTS', payload: products})
    },[products] )

    return <FilterContext.Provider value={{ ...state, setGridView, setListView,updateFilterValue,clearFilters, }} >{children}</FilterContext.Provider>
}


const useFilterContext = () => {
    return useContext(FilterContext)
}

export {FilterContext,FilterContextProvider,useFilterContext}