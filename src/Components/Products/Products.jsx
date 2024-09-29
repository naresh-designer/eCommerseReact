import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import ProductCard from './ProductCard'
import { useProductContext } from '../../ProductContext/ProductContext'




const Products = () => {

    const headingData = {
        subHeading : 'POPULAR PRODUCTS',
        mainHeading : 'TRENDING NOW'
    }


    const{isLoading,featuredHomeProducts} = useProductContext()

    if(isLoading){
        return (
            <div className='loading_details' >.....Loading Products.....</div>
        )
    }

  return (
    <Wrapper>
        <div className="main__wrapper">
            <Heading headingData={headingData} />

            <div className='grid grid__three' >
            {
                featuredHomeProducts.map((curElm) => {
                    return(
                        <ProductCard key={curElm.id} curElm={curElm} />
                    )
                } )
            }

            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin:100px 0;
`

export default Products