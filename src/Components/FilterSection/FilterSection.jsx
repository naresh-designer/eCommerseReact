import React from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa6'
import { useFilterContext } from '../../ProductContext/ProductFilterContext'
import FormatePrice from '../../Helpers/FormatePrice/FormatePrice'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

const FilterSection = () => {

   const{filters:{text,color,price,maxPrice,minPrice},updateFilterValue,all_products,clearFilters,}=useFilterContext()

//    top get the unique Data fields
const getUniqueData = (data,attr) => {
    let newVal = data.map((curElm) => {
        return curElm[attr]
    } )

    if(attr === "colors"){
       newVal = newVal.flat()
    }
    
   return(newVal = ['All', ...new Set(newVal)])

    
    
}

//    unique Data
const categoryOnlyData = getUniqueData(all_products,"category")
const companyOnlyData = getUniqueData(all_products,"company")
const colorsOnlyData = getUniqueData(all_products,"colors")


  return (
    <Wrapper>
        <div className='filter-search' >
            <form onSubmit={(e) => e.preventDefault() } >
                <input type="text" name='text' value={text} onChange={updateFilterValue} placeholder='Search'  />
            </form>
        </div>

    <div className='filter-category' >
        <h3>Category</h3>
        <div className='caategory-list'>
            {
                categoryOnlyData.map((curElme,index) => {
                    return (
                    <button key={index} type='button' name='category' value={curElme} onClick={updateFilterValue}>{curElme}</button>
                    )
                } )
            }
        </div>
    </div>

    <div className='search-Filter' >
        <h3>Company</h3>
        <form action="">
            <select name="company" id="company" onClick={updateFilterValue} >
                {
                    companyOnlyData.map((curElme,index) => {
                        return(
                            <option key={index} value={curElme} name="company" >
                                {curElme}
                            </option>
                        )
                    })
                }
            </select>
        </form>
    </div>


    <div className="filter_color">
        <h3>Colors</h3>
        <div className="color_list">

            {
                colorsOnlyData.map((curElm,index) => {
                    if(curElm === "all"){
                        return(
                            <button key={index} type='button' name='color' value={curElm} onClick={updateFilterValue} >
                                all
                            </button>
                        )
                    }
                    return(
                        <button key={index} type='button' style={{backgroundColor:curElm}} name='color' value={curElm} onClick={updateFilterValue} >
                            {color === curElm ? <FaCheck className='check_color' /> : null}
                        </button>
                    )
                } )
            }
        </div>
    </div>

    <div className="formatPrice">
        <h3>Price</h3>
        <p>
        <FormatePrice price={price} />
        </p>
        <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} />
    </div>

    <div className="filter_clear">
        <NavLink  onClick={clearFilters} >
        <Button>Clear Filter</Button>
        </NavLink>
          
    </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
    h3{
        font-size:22px;
    }

    .filter-search input{
        border:1px solid #ccc;
        padding:10px;
        width:100%;
    }

    .filter-category{
        margin-block:50px;
    }

    .caategory-list button{
        width: 100%;
        border: none;
        background-color: transparent;
        text-align: left;
        font-size: 17px;
        margin-top: 15px;
        letter-spacing: 1px;
        cursor:pointer;
        font-family:${({ theme }) => theme.common.merriweatherFont};
        transition:all .5s;
        display:inline;
    }

    .caategory-list button:hover{
        text-transform:capitalize;
        letter-spacing:8px;
    }

    .search-Filter select{
        text-transform:capitalize;
        margin-block:20px;
    }

    .filter_color{
        margin-block:50px;
    }

    .filter_color h3{
        margin-bottom:20px;
    }

    .color_list{
        display:flex;
        gap:10px;
    }

    .color_list button{
        --colorButton:20px;
        width:var(--colorButton);
        height:var(--colorButton);
        border-radius:100px;
        border:none;
    }
        
    .check_color{
            color:${({theme}) => theme.common.whiteColor };
        }

    
`

export default FilterSection