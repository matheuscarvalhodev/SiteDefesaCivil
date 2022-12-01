import styles from './Inicio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Selection } from './selections.js';
import { TableRelatorio } from "./table.js";
import { Button, CardHeader, CardBody, CardFooter } from 'reactstrap';
import SideNavBar from "componentes/SiderBar";
import { Card, Col, Row } from 'react-bootstrap';
import { useState } from "react";
import { ZonaSelect, tableOrigin, filterOrigin, typeSelect, bairroSelect, PeriodoSelect } from "./data";
import Rodape from "componentes/Rodape";


export default function Report() {

    const date = new Date();

    const [table, setTable] = useState(tableOrigin);
    const [select, setSelect] = useState();
    const [filters, setFilters] = useState(filterOrigin);
    const [opZona, setOpZona] = useState(ZonaSelect);

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <div className={styles.principal}>
            {/* jgjhgj */}
            <header>
                {/* Barras de Navegação */}
                <SideNavBar cor={"#f1a014"} titulo={"Defesa Civil"}/>
            </header>

            <main className='container' style={{ marginTop: "100px" }}>

                {/* Titulo da Pagina */}
                <div className="top-relatorio" >
                    <p className='text-center mb-5' style={{ fontSize: 24 }}>
                        <strong >
                            RELATORIO
                        </strong>
                    </p>

                </div>

                <Card style={{ marginBottom: "100px" }}>
                    <CardHeader>
                        <Row>
                            <Col lg='4'>
                                {/* Componente de mostrar data e hora */}
                                <div >
                                    <p>Data: {date.toLocaleDateString()}</p>
                                    <p>Hora: {date.toLocaleTimeString().substr(0, 5)}</p>
                                </div>
                            </Col>

                            <Col lg='4'>
                                <div >
                                    {/* Filtros de Seleção 1 */}
                                    <Selection
                                        class={styles.sect}
                                        label="Tipo de Ocorrência: "
                                        name="tipoOcorrencia"
                                        select={typeSelect}
                                        setSelect={setSelect}
                                        table={select}
                                        setFilters={setFilters}
                                    />
                                    <Selection
                                        class={styles.sect}
                                        label="Periodo: "
                                        name="periodo"
                                        select={PeriodoSelect}
                                        setSelect={setSelect}
                                        table={select}
                                        setFilters={setFilters}
                                    />

                                </div>
                            </Col>

                            <Col lg='4'>
                                {/* Filtros de API 2 */}
                                <Selection
                                    class={styles.sect}
                                    label="Bairro: "
                                    name="bairro"
                                    select={bairroSelect}
                                    setSelect={setSelect}
                                    table={select}
                                    setFilters={setFilters}
                                />
                                <Selection
                                    class={styles.sect}
                                    label="Zona: "
                                    name="zona"
                                    select={opZona}
                                    setSelect={setSelect}
                                    table={select}
                                    setFilters={setFilters}
                                />
                            </Col>
                        </Row>

                    </CardHeader>

                    <CardBody>
                        <div className='table-relatorio'>
                            {/* Tabela com dados */}
                            <TableRelatorio table={table} filters={filters} />

                        </div>

                    </CardBody>

                    <CardFooter>

                        {/* Botões Fim da Pagina */}
                        <div className='d-flex justify-content-around'>
                            <Row>
                                <Col lg='4'>
                                    {/* onClick={table} criar PDF com isso*/}
                                    <Button color="link"> 
                                        Emitir Relatório Completo
                                    </Button>
                                </Col>
                                <Col lg='5'>
                                    <Button color="link" onClick={refreshPage}>Vizualizar Relatório Completo</Button>
                                </Col>
                            </Row>
                        </div>
                    </CardFooter>
                </Card>
            </main >
            <Rodape/>
        </div >
    )
}