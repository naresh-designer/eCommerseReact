import React from 'react'
import styled from 'styled-components'
import { BsSignDoNotEnter } from 'react-icons/bs'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper className='main__wrapper' >
        <div className="errorPage">
            <div className='errorPage__notenter' ><BsSignDoNotEnter /></div>
            <div className="errorPage__heading">
                404
                <h1>Page Not Found</h1>
            </div>
            <NavLink to='/' >
                <Button>Home</Button>
            </NavLink>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    margin-top:50px;
    margin-bottom:50px;
    .errorPage{
        text-align:center;

        .errorPage__notenter{
            font-size:200px;
        }

        .errorPage__heading{
            font-size:120px;
            line-height:80px;
            color:rgb(215,212,208);
        }

        .errorBtn{
            justify-content:center;
            margin-top:50px;

            a{

                &:hover{
                    background-color:${({theme}) => theme.common.greenBg };
                    color:${({theme}) => theme.common.whiteColor };
                }
            }
        }

    }
`

export default ErrorPage