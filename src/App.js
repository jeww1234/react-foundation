import logo from './logo.svg';
import './App.css';
import Box from "./component/Box"
import { useState } from 'react';

function App() {
  let num = 0
  const [count, setCount] = useState(0)
  const increase = () =>{    
    num = num + 1
    setCount(count + 1)
    console.log("num:",num, "count:", count)
    /*state는 함수가 끝나야 변하기 때문에 바로 콘솔 찍으면 이전 값 출력*/
  }
  return (
    <div>
     <Box name={"지사"} num = {count}/>
     <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
