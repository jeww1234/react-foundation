import './App.css';
import { useState } from 'react';
import Box from './component/Box';


const choice = {
  rock:{name : "Rock", img: "https://media.istockphoto.com/id/157502829/ko/%EC%82%AC%EC%A7%84/%EC%84%B1%EA%B3%B5%EC%A0%81%EC%9D%B4%EA%B1%B0%EB%82%98-%EA%B0%95%EB%A0%A5%ED%95%9C-%EC%82%AC%EC%97%85%EA%B0%80-%EC%A5%A0-%EA%B1%B0%EB%8C%80%ED%95%9C-%EB%B0%94%EC%9C%84%EC%82%B0-%EB%B3%BC%EB%8D%94-into-the-sky.jpg?s=1024x1024&w=is&k=20&c=edPda2giWvEU3xmmMc8gBEW6EO1hTZRLuj-6CtNzH4s="},
  scissors:{name : "Scissors", img: "https://i.namu.wiki/i/PGp3JnsDa9eaMKBC1OwnSU4M0vLE0d_40ehrl0aUYum98U6tg0Nnl8W6_c0bQk2Bp9mQCMTe7eQt32pszxoQGw.webp"},
  paper:{name : "Paper", img: "https://t3.ftcdn.net/jpg/03/10/00/04/360_F_310000429_Y8AwjQ4r2OSCjU0AzwT3CUmL908xmvjA.jpg"},
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("준비")
  const [result2, setResult2] = useState("준비")
  const play = (userChoice) =>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    const result = judgement(choice[userChoice], computerChoice)
    setResult(result)
    setResult2(result === "Win" ? "Lose" : result === "Lose" ? "Win" : "Tie")     
  }
  const judgement = (user,  computer) =>{
    if (user.name === computer.name){
      return "Tie"
    }
    else if (user.name === "Rock") return computer.name === "Scissors"? "Win":"Lose"
    else if (user.name === "Scissors") return computer.name === "Paper"? "Win":"Lose"
    else if (user.name === "Paper") return computer.name === "Rock"? "Win":"Lose"
  }
  const randomChoice = () =>{
    let itemArray = Object.keys(choice)
    console.log(itemArray)
    let randomitem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomitem]
    return choice[final]
  }
  return (
    <div>
    <div className='container'>
      <Box title="You" item={userSelect} result= {result} box={result === "Win" || result === "Lose" || result === "Tie" ? result : "default"}/>
      <Box title="Coumputer" item = {computerSelect} result= {result2} box={result2 === "Win" || result2 === "Lose" || result2 === "Tie" ? result2 : "default"}/>
    </div>
    <div className='container'>
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>
      {/* onClick에 매개변수가 포함된 함수 하나만 넣으면 곧 바로 실행 */}
      {/* 따라서 ()=>play("paper")와 같이 콜백 함수로 넣어줘야 한다. */}
    </div>
    </div>
  );
}

export default App;
