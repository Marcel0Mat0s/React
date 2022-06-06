/**
 * App.js
 */

import React from "react";
import Tabela from "./Tabela"
import Tabela2 from "./Tabela2"
import Tabela3 from "./Tabela3"

class App extends React.Component{

  render(){
// definição de dados em modo 'props'
//estes dados têm uma grande particularidade: Não se podem alterar
    const alunos=[
      {
        nome: "Ana",
        apelido: "Silva",
      },
      {
        nome: "Mário",
        apelido: "Lopes",
      },
    ]

    return(
      <div className="container">
        <h1>Alunos</h1>
        <h4>Primeira Tabela</h4>
        <p>tabela com código <i>100% hardcode</i></p>
        <Tabela />
        <br />
        <h4>Segunda Tabela</h4>
        <p>uso de componentes internos</p>
        <Tabela2 />
        <br />
        <h4>Terceira Tabela</h4>
        <p>uso de dados externos ao componente</p>
        <Tabela3 dadosAlunosIN={alunos}/>
      </div>
    )
  }

}


export default App;
