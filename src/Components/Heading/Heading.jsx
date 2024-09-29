import React from 'react'
import styled from 'styled-components'

const Heading = ({headingData}) => {
    const {subHeading,mainHeading} = headingData
  return (
    <MainHeading>
        <span>{subHeading}</span>
        <h1>{mainHeading}</h1>
    </MainHeading>
  )
}

const MainHeading = styled.section`
    text-align:center;

`

export default Heading