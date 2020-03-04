import React from 'react';
import './App.css';
import Nav from './components/Navbar';
import Resumo from './components/Resumo';
import Consultas from './components/Consultas/Consultas';
import Faturamento from './components/Faturamento/Faturamento';
import {Switch, Route} from 'react-router-dom'

function App() {

  return (
    <div>
      <Nav/>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/" exact component={Resumo}/>
              <Route path="/faturamento" component={Faturamento}/>
              <Route path="/consultas" component={Consultas}/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
