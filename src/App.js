import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CountBox from './components/CountBox';
import counterStore from './Stores/CountStore';



function App() {
  const {count, increase} = counterStore()
  return(
  <div>
    <h1>count:{count}</h1>
    <button onClick={()=>increase(10)}>increase</button>
    <CountBox />
  </div>
) 
}
export default App;
