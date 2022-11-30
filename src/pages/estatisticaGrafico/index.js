import React, {useEffect, useState} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import SideNavBar from "componentes/SiderBar";
import Rodape from "componentes/Rodape";
import styles from "./estatisticaGrafico.module.css";
import axios from "axios";
import NaoEncontrada from "pages/NaoEncontrada";

function SimpleLineChart(){
    const [estatistica, setOcorrencia] = useState(null);

    useEffect(() => {
        const api = async ()=>{
            await axios.get(`http://localhost:3000/estatistica`)
           .then((response) => {
             setOcorrencia(response.data.dados)
          })
          .catch((err) => {
            <NaoEncontrada erro={"500"} texto={"Houvemos um problema no servidor"}/>;
          });
        }
        api();
      }, []);
      if (!estatistica) return null;

    return (
      <>
        <SideNavBar cor={"#f1a014"} titulo={"Defesa Civil"}/>
        
          <div className={styles.grafico}>
              <div>
              <h1>Grafico</h1>
              <LineChart
                width={600}
                height={300}
                data={estatistica}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                <Line
                  type='monotone'
                  dataKey='pv'
                  stroke='#8884d8'
                  activeDot={{r: 8}}
                  />
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip/>
                <YAxis/>
                <XAxis dataKey='name'/>
                <Legend />
              </LineChart>
            
              </div>
          </div>
          <Rodape/>
      </>
    );

}

export default SimpleLineChart;