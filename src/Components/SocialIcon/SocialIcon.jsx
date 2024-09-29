import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaSquareInstagram } from 'react-icons/fa6'
import { IoLogoYoutube } from 'react-icons/io'
import { FaTwitterSquare } from 'react-icons/fa'

const SocialIcon = () => {
  return (
    <Social>
        <ul>
            <li>
                <NavLink to='/' ><FaFacebookSquare /></NavLink>
            </li>
            <li>
                <NavLink to='/'><IoLogoYoutube /></NavLink>
            </li>
            <li>
                <NavLink to='/'><FaSquareInstagram /></NavLink>
            </li>
            <li>
                <NavLink to='/'><FaTwitterSquare /></NavLink>
            </li>
        </ul>
    </Social>
  )
}

const Social = styled.section`
    ul{
        display:flex;
        gap:10px;

        li{
            font-size:20px;
            scale:1;
            transition:all .5s;
            width:40px;
            height:40px;
            background-color:green;
            display:flex;
            justify-content:center;
            align-items:center;
            border-radius:50px;
            cursor:pointer;

            &:hover{
                scale:1.2;
            }

            a{
                color:${({theme}) => theme.common.whiteColor };
                transition:all .5s;
                height:20px;
            }
        }
    }
`

export default SocialIcon