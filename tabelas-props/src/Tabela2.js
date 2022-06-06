/**
 * Tabela2.js
 */


 import React from "react";

 function Cabecalho(){
    return(
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
            </tr>
        </thead>   
    )
 }


 const Corpo =() => {
    return(
        <thead>
            <tr>
                <td>Ana</td>
                <td>Silva</td>
            </tr>
            <tr>
                <td>Mário</td>
                <td>Lopes</td>
            </tr>
        </thead>
    )
 }

 class Tabela2 extends React.Component{
 
     render(){
         return(
             <table className="table table-bordered">
             <Cabecalho />
             <Corpo />
             </table>
         )        
     }
 }
 
 
 export default Tabela2;