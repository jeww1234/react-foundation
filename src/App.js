import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useState } from 'react';
import PrivateRoutes from './Routes/PrivateRoutes';



//1. 전체상품페이지, 디테일페이지, 로그인페이지
//2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안 된 경우 로그인 페이지로 이동
//5. 로그인이 된 경우에는 상품디테일 페이지를 볼 수 있다.
//6. 로그아웃 버튼을 클릭하면 로그아웃된다.
//7. 로그아웃 되면 디테일 페이지에서 로그인 페이지로 이동
//8. 로그인 하면 로그아웃 버튼으로 로그아웃 하면 로그인 버튼으로
//9. 검색 가능


function App() {
  const [authenticate, setAuthenticate] = useState(false)
  return(
  <div>
    <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
    <Routes >
      <Route path='/' element= {<ProductAll />}/>
      <Route path='/login' element= {<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path='/product/:id' element= {<PrivateRoutes authenticate={authenticate}/>}/>
    </Routes >
  </div>
) 
}
export default App;
