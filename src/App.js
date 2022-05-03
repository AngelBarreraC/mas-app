import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {
  const [contador,setContador]=useState(0);
  const updateData=()=>{
    try{
      setContador(parseInt(contador)+1);
    }catch (error){
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador : {contador}. <br></br>
          <button onClick={updateData}>Actualizar</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
