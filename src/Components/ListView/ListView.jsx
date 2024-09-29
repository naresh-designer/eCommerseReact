import React from 'react'
import styled from 'styled-components'
import FormatePrice from '../../Helpers/FormatePrice/FormatePrice'
import { NavLink } from 'react-router-dom'

const ListView = ({products}) => {
  return (
    <Wrapper>
      {
        products.map((curElm) => {
          const{id,name,image,description,price,category}=curElm
          return(
            <div key={id} className='list__view grid grid__two' >
              <div className='list__image--view' >
                <img src={image} alt={name} />
              </div>
              <div>
                <h5>{name} (<span className='category' >{category}</span>) </h5>
                <p><FormatePrice price={price} /></p>
                <p>{description.slice(0,200)}</p>
                <button>
                  <NavLink to={`/singleproduct/${id}`} >sfsdfdsf</NavLink>
                </button>
              </div>
            </div>
          )
        } )
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .list__view{
    border:1px solid ${({theme}) => theme.common.grayBg };
    padding:20px;
    margin-top:20px;
  }

  .category{
    font-size:15px;
  }
`

export default ListView