const ProductFilterReducer = (state,action) => {

    switch(action.type){

        case 'SET_FILTER_LOADING':
            return{
                ...state,
                isFilterLoading:true,
            }

        case 'LOAD_FILTER_CONTEXT_PRODUCTS':
            let priceArr = action.payload.map((curElme) => curElme.price )

            let maxPrice = Math.max(...priceArr)
            
            return{
                ...state,
                isFilterLoading:false,
                filter_products:[...action.payload],
                all_products:[...action.payload],
                filters:{...state.filters,maxPrice,price:maxPrice}
            }

            // Grid Code
            case 'SET_GRID_VIEW':
                return{
                    ...state,
                    grid_view:true,
            }

            case 'SET_LIST_VIEW':
                return{
                    ...state,
                    grid_view:false,
            }
            // End Grid Code


            // Search Filter Section
            case'UPDATE_FILTERS_VALUE':
            const {name,value}=action.payload
            return{
                ...state,
                filters:{
                    ...state.filters,
                    [name]:value,
                }
            }

            case'FILTER_PRODUCTS':
            let {all_products} = state
            let tepFilterPorducts = [...all_products]

            const {text,category,company,color,price} = state.filters

            if(text){
                tepFilterPorducts = tepFilterPorducts.filter(
                    (curElm) =>curElm.name.toLowerCase().includes(text)
                )
            }

            if(category !== "all"){
                tepFilterPorducts = tepFilterPorducts.filter(
                    (curElme) => curElme.category === category
                )
            }

            if(company !== "all"){
                tepFilterPorducts = tepFilterPorducts.filter(
                    (curElme) => curElme.company.toLowerCase() === company.toLowerCase()
                 )
            }

            if(color !== "all"){
                tepFilterPorducts = tepFilterPorducts.filter(
                    (curElme) => curElme.colors.includes(color)
                 )
            }

            if(price){
                tepFilterPorducts = tepFilterPorducts.filter(
                    (curElme) => curElme.price <= price
                 )
            }


            return{
                ...state,
                filter_products:tepFilterPorducts
            }


            case'CLEAR_FILTERS':
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text:'',
                    category:"all",
                    company:"all",
                    color:"all",
                    maxPrice:0,
                    price:0,
                    minPrice:0,
                }
            }

        default: return state
    }

}

export default ProductFilterReducer