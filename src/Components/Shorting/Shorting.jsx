import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../../ProductContext/ProductFilterContext'
// import { HiViewGrid } from "react-icons/hi"
// import { HiViewList } from 'react-icons/hi'

const Shorting = () => {
    const{filter_products}=useFilterContext()
  return (
    <Wrapper>
        <div className='shorting' >
            {/* <div className='shorting__btn' >
                <button className={`shorting__btn__color ${grid_view ? 'active__btn' : ''} `} onClick={setGridView} ><HiViewGrid className='icon' /></button>
                <button className={`shorting__btn__color ${grid_view ? '' : 'active__btn'} `} onClick={setListView} ><HiViewList className='icon' /></button>
            </div> */}
            <div className='shorting__product' >
                <p>{`${filter_products.length} Product Avilable`}</p>
            </div>
            {/* <div className='shorting__search' >
                <form action="#">
                    <label htmlFor="sort"></label>
                <select name="sort" id="sort" >
                <option value="lowest">Price:(lowest)</option>
                <option value="#" disabled ></option>
                    <option value="highest">Price:(highest)</option>
                    <option value="#" disabled ></option>
                    <option value="a-z">a-z</option>
                    <option value="#" disabled ></option>
                    <option value="z-a">z-a</option>
                </select>
                </form>
            </div> */}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .shorting{
        display:flex;
        justify-content:space-between;
        align-items:center;

        .shorting__btn__color{
            background-color:${({theme}) => theme.common.blackColor };
            padding:10px 10px 5px;
            border:none;
            margin-right:5px;
            cursor:pointer;

            .icon{
                color:${({theme}) => theme.common.whiteColor };
                font-size:20px;
            }
        }
            .active__btn{
                background-color:${({theme}) => theme.common.greenBg };
            }
    }

    select{
        width:100%;
        padding:5px 10px;
    }

    
`

export default Shorting