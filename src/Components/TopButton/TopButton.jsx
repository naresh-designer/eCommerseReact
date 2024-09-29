import React, { useState } from 'react'
import styled from 'styled-components'
import { BiUpArrowAlt } from 'react-icons/bi'

const TopButton = () => {
    const [isVisible,setIsVisible] = useState(false)

    const goTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    })
  return (
    <Wrapper>
        {
            isVisible && (
            <div className={`topBtn ${isVisible ? 'show__topBtn' : ''} `} onClick={goTop} >
            <BiUpArrowAlt />
            </div>
            )
        }
        
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .topBtn{
        position:fixed;
        right:-100px;
        bottom:20px;
        background-color:${({theme}) => theme.common.grayColor };
        color:${({theme}) => theme.common.whiteColor };
        width:40px;
        height:40px;
        font-size:30px;
        display:grid;
        place-items:center;
        transition:all .5s;
    }
    .show__topBtn{
        right:10px;
    }
    
`

export default TopButton