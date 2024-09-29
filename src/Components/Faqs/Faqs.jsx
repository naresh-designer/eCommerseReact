import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Heading from '../Heading/Heading'
import FaqsList from './FaqsList'
import { getAPI } from '../../Services/Services'
import { faqApi } from '../../Constant/Constant'

const Faqs = () => {
    const [faqData,setFaqData] = useState([])

    useEffect( () => {
        const fetchData = async() => {
            const faqListData = await getAPI(faqApi)
            setFaqData(faqListData)
        }
        fetchData()
    }, [] )
    const headingData = {
        mainHeading : 'FAQs'
    }
  return (
    <Wrapper>
        <Heading headingData={headingData} />
        <FaqsList data={faqData} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background-color:#F3F6F6;
    padding:100px 0;
`

export default Faqs