import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import FormatePrice from '../../Helpers/FormatePrice/FormatePrice'

const ProductCard = ({curElm}) => {
    const{id, name,image,company,price}=curElm
  return (
    <Wrapper>
                    <NavLink to={`/singleproduct/${id}`} >
                    <div className='productCard' >
                        <figure className='productCard__img'>
                            <img src={image} alt={name} />
                            <figcaption className='productCard__cation' ><h3>{company}</h3></figcaption>
                        </figure>
                        <div className='productCard__content' >
                            <div className='productCard_category' >
                            <h5>{name}</h5>
                            </div>
                            <h6>{<FormatePrice price={price} />}</h6>
                        </div>
                    </div>
                    </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`


    margin-top:30px;

    .productCard{
        overflow:hidden;
        text-transform:capitalize;
    }

    .productCard__img{
        transition:all .5s;
        filter: grayscale(100%);
        position:relative;

        &:hover{
            filter: grayscale(0);
        }

        &:before{
            content:'';
            position:absolute;
            top:0;
            left:-100%;
            background-color:rgba(0,0,0,.4);
            height:100%;
            width:100%;
            transition:all .8s;
            
        }

        &:hover:before{
            left:100%;
        }

        .productCard__cation{
            position:absolute;
            top:20px;
            right:20px;
            background-color:rgba(255,255,255,.7);
            padding:10px;
            border-radius:100px;

            h3{
                font-size:15px;
                font-weight:normal;
                transition:all .5s;

                
            }

            &:hover{
                letter-spacing:1px;
            }
        }
    }

    .productCard__content{
        display:flex;
        justify-content:space-between;
        padding:20px;
        background-color:#F3F6F6;

        .productCard_category{
            color:${({theme}) => theme.common.blackColor };


            h5{
                font-size:20px;
                font-weight:normal;
            }
        }

        h6{
            font-size:16px;
            color:${({theme}) => theme.common.greenBg };
        }
    }
`

export default ProductCard