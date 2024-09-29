
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navData } from "./NavData";
import { useCartContext } from '../../ProductContext/CartContext'
import { useState } from "react";

const Nav = () => {

  const [navShow, setNavShow ] = useState(false)

  const { total_item} = useCartContext()
  return (
    <MainNav>
      <div className={`nav ${navShow ? 'show' : ''}`}>
        <ul >

          {
            navData.map( (curElm,id) => {
              const{path,name}=curElm
              return (
                <li key={id} >
                  <NavLink to={path} className={({ isActive }) => isActive ? 'active' : '' } onClick={() => setNavShow(prev => !prev) } >{name}</NavLink>
                </li>
              )
            } )
          }
          <li>
          <div className="cart">
          
          <div className="cart__addProduct">Cart Items : {total_item}</div>
          </div></li>

        </ul>

        <div className={`toggle_button ${navShow ? 'changeToggle' : ''} `} onClick={() => setNavShow(!navShow)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </MainNav>
  )
};

const MainNav = styled.nav`
  font-family:${({theme}) => theme.common.merriweatherFont };
  ul{
    display:flex;
    gap:30px;
    place-items:center;

    li{

      a{
        color:${({theme}) => theme.common.grayColor };
        transition:all .5s;
        text-transform:lowercase;
        font-size:20px;

        &:hover{
          color:${({theme}) => theme.common.orangeColor };
          letter-spacing:5px;
        }

        
      }
    }
  }

  .active{
    color:${({theme}) => theme.common.greenBg };
    letter-spacing:5px;
    border-bottom:2px solid ${({theme}) => theme.common.greenBg };
  }

 .toggle_button{
    cursor:pointer;
    position:fixed;
    right:20px;
    top:40px;
    z-index:1;
    display:none;

        .line{
            background-color:${({theme}) => theme.common.greenBg };
            width:40px;
            height:3px;
            margin-bottom:5px;
            transition:all .5s;

            &:nth-child(2){
                width:30px;
            }

            &:nth-child(3){
                width:20px;
            }
        }
            &:hover .line:nth-child(2),&:hover .line:nth-child(3){
                width:40px;
            }
    }

  @media screen and (max-width:${({theme}) => theme.mobile.tab }) {
    .toggle_button{
      display:block;
      position:fixed;
    }

    ul{
      position:fixed;
      top:0;
      right:-100%;
      background-color:black;
      height:100vh;
      width:50%;
      transition:all .5s ease;
      z-index:1;
      padding-top:100px;
      flex-direction:column;
      gap:50px;

      li{
        width: 100%;
        display: flex;
        justify-content: center;

        a{
          font-size:25px;
          color:${({theme}) => theme.common.whiteColor };

        &:hover{
          text-transform:lowercase;
          letter-spacing:10px;
        }
        }
      }
    }

    .show ul{
      right:0;
    }

    .changeToggle{
      // border:1px solid ${({theme}) => theme.common.greenBg };

      .line{
        &:nth-child(1){
          transform:translateY(6px) rotate(45deg);
          background-color:${({theme}) => theme.common.greenBg };
        }
        &:nth-child(2){
          display:none
        }
        &:nth-child(3){
          width:40px;
          transform:rotate(-45deg);
          background-color:${({theme}) => theme.common.greenBg };
        }
      }
    }
  }

  @media screen and (max-width:${({theme}) => theme.mobile.smallM }){
    ul{
      width:100%;
    }
  }
`

export default Nav;
