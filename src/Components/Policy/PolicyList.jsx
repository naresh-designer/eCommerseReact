import React from 'react'
import styled from 'styled-components'
import { FaShippingFast } from 'react-icons/fa'
import { AiFillSafetyCertificate } from 'react-icons/ai'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { TbTruckReturn } from 'react-icons/tb'

const PolicyList = () => {
  return (
    <Wrapper>
    <div className="main__wrapper">
        <div className="policyList">
            <ul>
                <li>
                   <FaShippingFast className='shippingIcon' />
                   <div className='policyList__content'>
                   <h5>Free Shipping</h5>
                   <p>Above $5 Only</p>
                   </div>
                </li>
                <li>
                   <AiFillSafetyCertificate className='shippingIcon' />
                   <div className='policyList__content'>
                   <h5>Certified</h5>
                   <p>100% Guarantee</p>
                   </div>
                </li>
                <li>
                   <FaRegMoneyBillAlt className='shippingIcon' />
                   <div className='policyList__content'>
                   <h5>Huge Savings</h5>
                   <p>At Lowest Price</p>
                   </div>
                </li>
                <li>
                   <TbTruckReturn className='shippingIcon' />
                   <div className='policyList__content'>
                   <h5>Easy Returns</h5>
                   <p>No Questions Asked</p>
                   </div>
                </li>
            </ul>
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .policyList{

        ul{
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            gap:30px;

            li{
                background-color:${({theme}) => theme.common.grayColor };
                width:100%;
                color:${({theme}) => theme.common.whiteColor };
                padding:20px 20px 50px;
                display:flex;
                gap:20px;
                justify-content:flex-start;
                align-items:flex-start;
                transition:all .5s linear;

                &:hover{
                    background-color:${({theme}) => theme.common.greenBg };
                    scale:1.1;
                }

                .shippingIcon{
                    font-size:30px;
                    color:${({theme}) => theme.common.greenBg };
                }

                &:hover .shippingIcon{
                    color:${({theme}) => theme.common.whiteColor };
                }

                .policyList__content{

                    h5{
                        font-size:20px;
                        font-weight:normal;
                        margin-bottom:5px;
                    }

                    p{
                        color:${({theme}) => theme.common.whiteColor };
                    }
                }
            }
        }
    }
`

export default PolicyList