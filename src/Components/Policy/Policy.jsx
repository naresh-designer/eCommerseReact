import React from 'react'
import styled from 'styled-components'
import PolicyList from './PolicyList'

const Policy = () => {
  return (
    <Wrapper>
        <PolicyList/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background-color:${({theme}) => theme.common.blackColor };
    padding:40px 0;
`

export default Policy