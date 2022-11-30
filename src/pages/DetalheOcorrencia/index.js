import styles from './Detalhe.module.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import SideNavBar from "componentes/SiderBar";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import NaoEncontrada from "pages/NaoEncontrada";
import Rodape from "componentes/Rodape";

const DetalheOcorrencia = () => {

    const {id} = useParams();

    const [ocorrencia, setOcorrencia] = useState(null);

    useEffect(() => {
        const api = async ()=>{
            await axios.get(`http://localhost:3000/ocorrencias?id=${id}`)
           .then((response) => {
             setOcorrencia(response.data)
          })
          .catch((err) => {
            <NaoEncontrada erro={"500"} texto={"Houvemos um problema no servidor"}/>;
          });
        }
        api();
      }, [id]);
      if (!ocorrencia) return null;

    return(
        <div className={styles.principal}>
            <header className={styles.cabecalho}>
            <SideNavBar cor={"#f1a014"} titulo={"Defesa Civil"}/>
            </header>
            <div className={styles.body}>
                <img className={styles.logo} src='../imagens/df.png' alt='logo'/>
                <div className={styles.header}>
                    <h1 className={styles.titulo}>Detalhes da Ocorrência</h1>
                </div>
                <section className={styles.container}>
                {ocorrencia.map(dado => (
                    <>
                    <div className={styles.info}>
                        <h2>Tipo de ocorrência: </h2>
                        <h3 key={dado.nome}> {dado.tipo_ocorrencia} </h3>
                    </div>
                    <div className={styles.info}>
                        <h2>Data do ocorrido: </h2>
                        <h3 key={dado.nome}> {dado.data_ocorrido} </h3>
                    </div>
                    <div className={styles.info}>
                        <h2>Hora do ocorrido: </h2>
                        <h3 key={dado.nome}> {dado.hora_ocorrido} </h3>
                    </div>
                    <div className={styles.info}>
                        <h2>Nome do provavel autor do dano: </h2>
                        <h3 key={dado.nome}> {dado.nome_autor_crime} </h3>
                    </div>
                    <div className={styles.info}>
                        <h2>Local do ocorrido: </h2>
                        <h3 key={dado.nome}> {dado.local_ocorrido} </h3>
                    </div>
                    <div className={styles.imagem}>
                        <h2>Anexo</h2>
                        <img className={styles.imagem} src={dado.anexo} alt='foto denuncia'/>
                    </div>
                    <div className={styles.box}>
                        <h2>Descrição do fato</h2>
                        <h3 key={dado.nome} className={styles.descricao}> {dado.descricao} </h3>
                    </div>
                    </>
                ))}
                <Button component={Link} to="/ocurrences" style={{
                    borderRadius: 50,
                    backgroundColor: "#f1a014",
                    fontSize: "18px",
                    color:"Black"
                }}>&#129044;</Button>
                </section>
            </div>
            <div className={styles.rodape}><Rodape/></div>
        </div>
        
    )
}

export default DetalheOcorrencia