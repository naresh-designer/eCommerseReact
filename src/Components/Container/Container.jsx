import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import About from '../../Pages/About/About'
import Product from '../../Pages/Product/Product'
import Contact from '../../Pages/Contact/Contact'
import ErrorPage from '../ErrorPage/ErrorPage'
import Cart from '../Cart/Cart'
import SingleProduct from '../../Pages/SingleProduct/SingleProduct'

const Container = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>} />
        <Route path='*' element={ <ErrorPage/> } />
    </Routes>
    </>
  )
}

export default Container