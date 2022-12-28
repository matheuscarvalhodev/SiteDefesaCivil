import styles from './Noticia.module.css';
import SideNavBar from "componentes/SiderBar";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
import NaoEncontrada from "pages/NaoEncontrada";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import Rodape from "componentes/Rodape";
import { noticias } from '../../dados';

const Noticia = ()=>{
     const navegar = useNavigate();
    // const id = useParams();
    // const [noticia, setOcorrencia] = useState(null);

    // useEffect(() => {
    //     const api = async ()=>{
    //         await axios.get(`http://localhost:3000/noticias?id=${id.id}`)
    //        .then((response) => {
    //          setOcorrencia(response.data)
    //       })
    //       .catch((err) => {
    //         <NaoEncontrada erro={"500"} texto={"Houvemos um problema no servidor"}/>;
    //       });
    //     }
    //     api();
    //   }, [id]);
    //   if (!noticia) return null;
    return(
        <div>
            <SideNavBar cor={"#f1a014"} titulo={"Defesa Civil"}/>
            <div className={styles.principal}>
                {noticias.map(
                    dado => (
                        <div className={styles.corpoNoticia}>
                            <h1 className={styles.titulo}>{dado.titulo}</h1>
                            <div className={styles.imagem}>
                                <img  src={dado.urlImagem} alt={dado.id}/>
                            </div>
                            <h2 className={styles.texto}>{dado.corpo}</h2>
                            <Button onClick={() => navegar(-1)} style={{
                                borderRadius: 50,
                                backgroundColor: "#f1a014",
                                fontSize: "18px",
                                color:"Black"
                            }}>&#129044;</Button>
                        </div>
                        
                    )
                )}
            </div>
            <div><Rodape/></div>
        </div>
    )
}

export default Noticia;