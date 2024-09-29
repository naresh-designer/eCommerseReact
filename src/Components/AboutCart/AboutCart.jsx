import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import { getAPI } from '../../Services/Services'
import { aboutApi} from '../../Constant/Constant'
import AboutData from './AboutData'

const AboutCart = () => {

    const [aboutData,setAboutData] =useState([])


    useEffect(()=>{
        const fetchData = async () => {
            const aboutListData = await getAPI(aboutApi)
            setAboutData(aboutListData)
            
            
        }

        fetchData()
    },[])


    const headingData = {
        subHeading:'About',
        mainHeading:'Our Team',
    }
  return (
    <Wrapper>
        <div className="main__wrapper gird">
            <Heading headingData={headingData} />
            <div className='team grid grid__three ' >
                {
                    aboutData.map((curElm) => {
                        return(
                           <AboutData key={curElm.id} curElm={curElm} />
                        )
                    } )
                }
                
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin-block:80px;

    // .main__wrapper{
    //     max-width:700px;
    // }

  

    .team__container{
        margin-bottom:80px;
    }

    .team__image {
        margin-block:30px;
    }

    .team__heading{
        display:flex;
        justify-content:space-between;
        border-bottom:2px solid black;
        margin-bottom:20px;
    }
`

export default AboutCart