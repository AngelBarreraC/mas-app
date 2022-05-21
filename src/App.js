import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Register from './Register';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Register} exact /> 
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
