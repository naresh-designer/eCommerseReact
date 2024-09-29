import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

*{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    list-style:none;
    text-decoration: none;
}

::moz-selection {
    background-color:${({ theme }) => theme.common.greenBg};
    color:${({ theme }) => theme.common.whiteColor};
}

::selection {
    background-color:${({ theme }) => theme.common.greenBg};
    color:${({ theme }) => theme.common.whiteColor};
}

body{
    background-color:${({ theme }) => theme.common.whiteColor};
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:18px;
    color:${({ theme }) => theme.common.grayColor};
    letter-spacing:.5px
}

::placeholder{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:16px;
}

input,select{
    outline:none;
}

input{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:16px;
}

select{
    width:100%;
    height:40px;
    border:1px solid #ccc;
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:16px;
}

p{
    color:#413e3e;
    line-height:25px;
    margin-bottom:10px;
}

img{
  display: block;
  width: 100%;
  object-fit: cover;
}

h1{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:48px;
    font-weight:${({ theme }) => theme.common.fontWeight};
}

h2{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:42px;
    font-weight:${({ theme }) => theme.common.fontWeight};
}

h3{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:36px;
    font-weight:${({ theme }) => theme.common.fontWeight};
}

h4{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:30px;
    font-weight:${({ theme }) => theme.common.fontWeight};
}

h5{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:24px;
    font-weight:${({ theme }) => theme.common.fontWeight};
}

h6{
    font-family:${({ theme }) => theme.common.merriweatherFont};
    font-size:18px;
    font-weight:${({ theme }) => theme.common.fontWeight};
}

.main__wrapper{
    width:100%;
    max-width:calc(1400px - 40px);
    padding-left:20px;
    padding-right:20px;
    margin:auto;
}

.grid{
    display:grid;
    gap:20px;
}

.grid__two{
    grid-template-columns: repeat(2, 1fr);
}

.grid__three{
    grid-template-columns: repeat(3, 1fr);
}

.grid__four{
    grid-template-columns: repeat(4, 1fr);
}

.grid__five{
    grid-template-columns: repeat(5, 1fr);
}

.loading_details{
    font-size:50px;
    display:flex;
    place-items:center;
    height:70vh;
    justify-content:center;
}

`;

export default GlobalStyled;
