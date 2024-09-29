import React from 'react'
import { FaStar,FaRegStarHalfStroke,FaRegStar } from 'react-icons/fa6'
import styled from 'styled-components'

const Star = ({star,review}) => {

    const ratingStars = Array.from({ length:5 }, (elem,index) => {
        let number = index + .5

        return(
            <span key={index} className='star_rating' >
                {
                    star >= index + 1 ? <FaStar/> : star >= number ? <FaRegStarHalfStroke/> : <FaRegStar/>
                }
            </span>
        )
    } )

  return (
    <Wrapper>
        <div className='star_color' >
            {ratingStars} <span className='review' >({review} customer reviews )</span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
        
    .star_color{

        .star_rating{
            color:${({theme}) => theme.common.orangeColor};
        }
        

        .review{
            font-size:14px;
        }
    }
`

export default Star