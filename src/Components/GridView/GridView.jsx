import React from 'react'
import ProductsCard from '../../Components/Products/ProductCard'
import styled from 'styled-components'

const GridView = ({products}) => {
  return (
    <Wrapper>
      <div className="grid grid__three">
        {
            products.map((curElm) => {
                return(
                    <ProductsCard key={curElm.id} curElm={curElm} />
                )
            } )
        }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``



export default GridView