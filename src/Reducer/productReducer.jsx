


const ProductReducer = (state,action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading:true,
            };

            case 'SET_API_DATA':
            const featureData = action.payload.filter( (curElm) => {
                return curElm.category === "laptop"
            } )

            return{
                ...state,
                isLoading:false,
                products:action.payload,
                featuredHomeProducts:featureData,
            }

            case 'API_ERROR':
                return {
                    ...state,
                    isLoading:false,
            }

            case 'SET_DETAIL_PAGE_LOADING':
            return{
                ...state,
                isDetailPageLoading:true,
            }

            case 'SET_DETAIL_PAGE' :
                return{
                    ...state,
                    isDetailPageLoading:false,
                    setProductDetail:action.payload,
                }

                case 'SET_DETAIL_PAGE_ERROR':
                    return {
                        ...state,
                        isDetailPageLoading:false,
                }
            
    
        default:
            return state
    }

}

export default ProductReducer