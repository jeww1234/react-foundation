import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import { Routes, Route, Navigate} from 'react-router-dom';
import Product from './page/Product';
import Product_detail from './page/Product_detail';
import Loginpage from './page/Loginpage';
import { useState } from 'react';
import Userpage from './page/Userpage';





function App() {
  const [authenticate, setAuthenticate] = useState(true)
  const PrivateRoute = () =>{
    return authenticate === true?<Userpage/>:<Navigate to='/login' />
  }

  return(
  <div>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />    
      <Route path='/products' element={<Product />} />    
      <Route path='/products/:id/:num' element={<Product_detail />} />    
      <Route path='/login' element={<Loginpage />}/>
      <Route path='/user' element={<PrivateRoute />}/>
    </Routes>
  </div>
) 
}
export default App;
