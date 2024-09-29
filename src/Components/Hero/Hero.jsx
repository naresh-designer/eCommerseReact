import React from 'react'
import styled from 'styled-components'

const Hero = ({heroData}) => {
  return (
    <MainHero>
        <div className="main__wrapper">
            <div className='hero__container'>
                <figure className="hero__image"> <img src={heroData.img} alt='' /></figure>
                <div className="hero__tagLine">
                <h1>{heroData.pageName}</h1>
                {heroData.heading}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi iste aspernatur nulla, doloribus nihil voluptatibus laborum. Officiis est animi quasi sed, dolore amet qui? Alias reprehenderit voluptatibus omnis commodi molestias.</p>
                </div>
            </div>
        </div>
    </MainHero>
  )
}

const MainHero = styled.section`
    background-color:#f8f6f3;
    padding-block:50px;

    .hero__container{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        place-items:center;
    }

    .hero__tagLine{
        font-family:${({theme}) => theme.common.merriweatherFont };
        font-size:80px;
        line-height:90px;
        color:rgb(215,212,208);

        h1{
            color:${({theme}) => theme.common.greenBg };
            font-size:40px;
            font-weight:normal;
        }

        p{
            font-size:18px;
        }
    }

    .hero__image{
        width:400px;
        margin:auto;
    }
`

export default Hero