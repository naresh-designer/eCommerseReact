import React from 'react'
import styled from 'styled-components'
import Heading from '../../Components/Heading/Heading'

const Contact = () => {

  const headingData = {
      subHeading:'',
      mainHeading:'Contact',
  }
  return (
    <Wrapper>
      <Heading headingData={headingData} />
      <div className="map__content">
        <p>FOR PERSONALISED EXPERT GUIDANCE EMAIL OR CALL</p>
        <div className="phone_name">
          <div>
            <p>JANO YOUSSEPH</p>
            <hr/>
            <p>+61 407 235 563</p>
          </div>
          <div>
            <p>JANO YOUSSEPH</p>
            <hr/>
            <p>+61 407 235 563</p>
          </div>
        </div>
        <div className="phone_name">
          <div>
            <p>STUDIO</p>
            <hr/>
            <p>JPY GROUP PTY LTD
            SUITE 8.06, 6A GLEN STREET
            MILSONS POINT, NSW 2061</p>
          </div>
          <div>
            <p>POSTAL ADDRESS</p>
            <hr/>
            <p>P.O. BOX
130 NORTHBRIDGE
NSW 1560</p>
          </div>
        </div>
      </div>
      <div className="studio_image">
        <figure>
          <img src="./images/contact-studio.jpg" alt="" />
        </figure>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-block:50px;

  .map__content{
    max-width:600px;
    margin-block:60px;
    margin-inline:auto;
    text-align:center;
  }

  .phone_name{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    margin-top:70px;
  }

  .phone_name div{
    width:250px;
  }

  .studio_image{
    max-width:600px;
    margin-inline:auto;
  }
`

export default Contact