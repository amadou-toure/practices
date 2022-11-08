import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let number;
  const [state, setState] = useState({
    number: 0
  })
  const [state2, setState2] = useState({
    color: "Black"
  })
  const increment=() => 
  {
   setState({number: state.number+1})
  }
  const decrement=() => 
  {
   setState({number: state.number-1})
  }
  const reset=() => 
  {
   setState({number: state.number=0})
  }
  // let toggle=()=>
  // {
  //    if (state2.color="Black"){
  //      setState2({color: state2.color="White"})
  //      console.log(state2.color)
  //    }else if (state2.color="White"){
  //      setState2({color: state2.color="Black"})
  //      console.log(state2.color)
  //    }
  // }
  const Black=()=>
  {
    setState2
    ({
      color: state2.color="Black"
      
    })
    console.log(state2.color)
  }
  const White=()=>
  {
    setState2
    ({
      color: state2.color="White"
      
    })
    console.log(state2.color)
  }
  const Yellow=()=>
  {
    setState2
    ({
      color: state2.color="Yellow"
      
    })
    console.log(state2.color)
  }
  return (
    <div className="App">
      <div className={state2.color}>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button className="theme" onClick={Black}>B</button>
        <button className="theme" onClick={White}>W</button>
        <button className="theme" onClick={Yellow}>Y</button>
        <h1>{state.number}</h1>
      </div>
      
    </div>
  );
}

export default App;
