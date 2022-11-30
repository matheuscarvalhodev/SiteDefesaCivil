import styles from './Inicio.module.css';
import SideNavBar from "componentes/SiderBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Rodape from "componentes/Rodape";

export default function Ocurrences() {

    const [ocorrencia, setOcorrencia] = useState(null);
    const [tamanho, setTamanho] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/ocorrencias`)
           .then((response) => {
             setOcorrencia(response.data)
             setTamanho(response.data.length)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro : " + err);
          });
      }, []);

      if (!ocorrencia) return null;
      

    return (
        <div>
            <SideNavBar cor={"#f1a014"} titulo={"Defesa Civil"}/>
            <body className={styles.principal}>
            <h1>OCORRÊNCIAS</h1>  
            <section className={styles.flex}>
                <div>
                <p>TOTAL DE OCORRÊNCIAS: {tamanho} </p>
                </div>
                <div>
                <p>
                    <label for="iest">FILTRO: </label>
                    <select name="filtro" id="iest">
                    <option value="1">Visualizar Lidas</option>
                    <option value="2">Visualizar Não Lidas</option>
                    <option value="3">Visualizar Não Ocorrências</option>
                    <option value="4">Visualizar Atendidas</option>
                    <option value="5">Visualizar Não Atendidas</option>
                    </select>
                </p>
                </div>
            </section>

            <table class={styles.contentTable}>
                 <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Usuário</th>
                        <th scope='col'>Data</th>
                        <th scope='col'>Local</th>
                        <th scope='col'>Detalhes</th>
                    </tr>
                </thead>
                <tbody>
                {ocorrencia.map(ocorrencias => ( 
                    <tr key={ocorrencias.id}>
                        <th scope='row'>{ocorrencias.id}</th>
                        <td>{ocorrencias.nome_autor_crime}</td>
                        <td>{ocorrencias.data_ocorrido}</td>
                        <td>{ocorrencias.local_ocorrido}</td>
                        <td><Button component={Link} to={`/ocurrences/${ocorrencias.id}`} style={{
                    borderRadius: 50,
                    backgroundColor: "#f1a014",
                    fontSize: "18px",
                    color:"black"
                }}>&#10132;</Button></td>
                    </tr>
                ))}
                </tbody>
            </table>
            </body>
            <Rodape/>
        </div>
    )
}