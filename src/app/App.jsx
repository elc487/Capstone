import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProductList from './features/Products/ProductList'
import Product from './features/Products/Product'
import Login from './features/Auth/Login'
import Account from './features/Account/Account'
import { useState } from 'react'
import Cart from './features/Cart/Cart'
import LandingPage from './components/LandingPage/LandingPage'
import Collections from './features/Collections/Collections'

function App() {
  const[userId,setUserId] = useState(null)

  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login'element={<Login setUserId={setUserId}/>}/>
      <Route path='/collections'element={<Collections/>}/>
      <Route path='/products'element={<ProductList/>}/>
      <Route path='/products/:productId' element={<Product/>}/>
      <Route path='/auth'>
         <Route path='/auth/cart'element={<Cart/>}/>
         <Route path='/auth/account'element={<Account userId={userId}/>}/>
      </Route>

      
      </Routes>
      
     
    </div>
  )
}

export default App
