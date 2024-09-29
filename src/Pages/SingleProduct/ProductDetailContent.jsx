import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useProductContext } from '../../ProductContext/ProductContext'
import { productApi } from '../../Constant/Constant'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import FormatePrice from '../../Helpers/FormatePrice/FormatePrice'
import { FaTruckFast } from 'react-icons/fa6'
import { LuReplaceAll } from 'react-icons/lu'
import { FaShieldVirus } from 'react-icons/fa'
import MyImage from '../../Components/MyImage/MyImage'
import Star from '../../Components/Star/Star'
import AddtoCart from '../../Components/AddtoCart/AddtoCart'

const ProductDetailContent = () => {

    const{getProductDetail,setProductDetail,isDetailPageLoading}=useProductContext()

    const {id} = useParams()

    const{image,name,company,price,description,category,stock,stars,reviews}=setProductDetail

    useEffect(() => {
        getProductDetail(`${productApi}?id=${id}`)
    },[])

    if(isDetailPageLoading){
        return <div className='loading_details' >....Loading Details....</div>
    }

  return (
    <Wrapper>
        <Breadcrumb title={name} />

        <div className="main__wrapper">
            <div className="product_detail__Page grid grid__two">
                <div className="product_image">
                    <MyImage imgs={image} />
                </div>
                <div className="product_content">
                    <h4>{name} <span className='category' >({category})</span> </h4>
                    <p><Star star={stars} review={reviews} /></p>
                    <h5>{company}</h5>
                    <p>MRP:
                     <del><FormatePrice price={price + 250000} /></del>
                    </p>
                    <p>Deal of the day : <FormatePrice price={price} /></p>
                    <p>{description}</p>
                    <div className="product_warranty">
                        <div className="product_warranty__data">
                        <FaTruckFast className='warranty_icon'  />
                        Free Shipping
                        </div>
                        <div className="product_warranty__data">
                        <LuReplaceAll className='warranty_icon' />
                        30 Days Replacement
                        </div>
                        <div className="product_warranty__data">
                        <FaShieldVirus className='warranty_icon'  />
                        2 Years Warranty
                        </div>
                    </div>
                    <div className="product_data__info">
                        <p>Available : 
                           <span> {stock > 0 ? 'In Stock' : 'Not Available'}</span>
                        </p>
                        <p>
                            Brand : <span>{company}</span>
                        </p>
                    </div>
                    <hr/>
                    {stock > 0 && <AddtoCart product={setProductDetail} /> }
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

    .product_detail__Page{
        margin-top:50px;
    }

    .product_warranty{
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        margin-bottom:20px;

        .product_warranty__data{
            display:flex;
            flex-direction:column;
            align-items:center;

                .warranty_icon{
                    margin-bottom:10px;
                    background-color:${({theme}) => theme.common.greenBg };
                    width:30px;
                    height:30px;
                    padding:5px;
                    border-radius:100px;
                }
        }
    }

    .category{
        font-size:18px;
        color:${({theme}) => theme.common.greenBg };
    }
`

export default ProductDetailContent