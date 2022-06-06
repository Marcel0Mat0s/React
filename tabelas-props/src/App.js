/**
 * App.js
 */

import React from "react";
import Tabela from "./Tabela"
import Tabela2 from "./Tabela2"

class App extends React.Component{

  render(){
    return(
      <div className="container">
        <h1>Alunos</h1>
        <h4>Primeira Tabela</h4>
        <p>tabela com código <i>100% hardcode</i></p>
        <Tabela />
        <h4>Segunda Tabela</h4>
        <p>uso de componentes internos</p>
        <Tabela2 />
      </div>
    )
  }

}


export default App;
