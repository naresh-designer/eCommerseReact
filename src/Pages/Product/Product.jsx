import React from 'react'
import styled from 'styled-components'
import ProductList from '../../Components/ProductList/ProductList'
import Shorting from '../../Components/Shorting/Shorting'
import FilterSection from '../../Components/FilterSection/FilterSection'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'

const Product = () => {
  
  return (
    
    <Wrapper>
      <Breadcrumb/>
      <div className="main__wrapper grid grid_filter__columns">
        <div className="filter_list">
          <FilterSection/>
        </div>
        <div className="product_filter">
          <div className="short_filter">
            <Shorting/>
          </div>
          <div className="prodcut_main">
          <ProductList/>
            
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .grid_filter__columns{
    grid-template-columns:0.2fr 1fr;
    margin-top:50px;
  }

  @media(width <= 820px){
    .grid_filter__columns{
      grid-template-columns:1fr;
    }
  }
    
`

export default Product