import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from "./pages/NewIncident";
import './global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={< Logon />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/incidents/new' element={<NewIncident />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// JSX (JavaScript XML)
// componente no React: funcao que retorna HTML, com possiveis funcionalidades
// js e css - recebem propriedades (props) -> retornam JSX 

/*
import Header from './Header';

function App() {
  return (
    <Header title="semana omnistack">
      semana omnistack 11
    </Header> 
  );
}


// useState retorna array [info, funcaoAtualizadora]
// estados sao necessarios para que informacoes na tela sejam atualizadas
function App() {
  const [ counter, setCounter ] = useState(0);
  
  function increment() {
    setCounter(counter + 1);
  }

  function zero() {
    setCounter(0);
  }

  return (
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={increment}>incrementar</button>
      <button onClick={zero}>zerar contador</button>
    </div> 
  );
}
*/
