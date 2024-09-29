import React, { useState } from 'react'
import styled from 'styled-components'

const MyImage = ({imgs = [{url:''}]}) => {
    const [myImage,setMyImage] = useState(imgs[0])
  return (
    <Wrapper>
        <div className="product_Image">
            {
                imgs.map((curElm,id) => {
                    return(
                        <figure>
                            <img src={curElm.url} alt={curElm.filename} key={id} onClick={() => setMyImage(curElm) } className='box_image' />
                        </figure>
                    )
                } )
            }
        </div>

        <div>
            <figure>
                <img src={myImage.url} alt={myImage.filename} />
            </figure>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display:grid;
    grid-template-columns:0.4fr 1fr;
    gap:20px;
    place-items:center;

    .box_image{
        margin-top:20px;
        cursor:pointer;
    }
`

export default MyImage