import React, { useState } from 'react'
import styled from 'styled-components'
import { IoIosArrowDown } from 'react-icons/io'

const FaqsList = ({data}) => {
    const [showData,setShowData] = useState(false)

    const faqToggle = (i) => {
        if(showData === i){
            return setShowData(false)
        }
        setShowData(i)
    }

  return (
    <Wrapper>

        <ul>

        {
            data.map( (curElm,i) => {
                const {category,description} = curElm
                return(
                    <li>
                        <div className={`faq ${showData === i ? 'select' : ''} `} onClick={() => faqToggle(i) } >
                            <div className="faq__header">
                                <h6>{category}</h6>
                                <IoIosArrowDown/>
                            </div>
                            <div className={`faq__content ${showData === i ? 'show__content' : ''} `}>{description}</div>
                        </div>
                    </li>
                )
            } )
        }

        </ul>
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
    ul{

        li{
            width:50%;
            margin:auto;

            .faq{
                background-color:#e4e8e8;
                padding:20px 30px;
                margin-top:20px;
                cursor:pointer;

                .faq__header{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;

                    h6{
                        text-transform:capitalize;
                    }
                }

                .faq__content{
                    padding-top:10px;
                    display:none;
                }

                .show__content{
                    display:block;
                }
            }
            .select{
                background-color:black;
                color:#fff;
            }
        }
    }
`

export default FaqsList