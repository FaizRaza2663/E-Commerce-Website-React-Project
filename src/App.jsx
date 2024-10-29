import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import { ToastContainer } from 'react-toastify'
import Home from './pages/home/Home'
import AllProducts from './pages/allProducts/AllProducts'
import Contact from './pages/contact/Contact'
import CategoryProducts from './pages/categoryProducts/CategoryProducts'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/> */}
        <Route path='/allProducts' element={<AllProducts/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/category/:category' element={<CategoryProducts/>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App