import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProductList from './features/ProductList'
import Product from './features/Product'

function App() {

  return (
    <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/'/>
      {/* <Route path='/login'element={<Login/>}/>
      <Route path='/register'element={<Register/>}/> */}
      <Route path='/products'element={<ProductList/>}/>
      <Route path='/products/:productId' element={<Product/>}/>
      {/* <Route path='/create'element={<CreatePost/>}/> */}
    </Routes>
    </div>
  )
}

export default App
