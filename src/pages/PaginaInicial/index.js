import SideNavBar from "componentes/SiderBar";
import Rodape from "componentes/Rodape";
import CarouselComponent from "componentes/Carousel/Carousel_Component";
import styles from './Inicio.module.css'
import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Container,
} from "reactstrap";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { noticias } from "../../dados";

export default function Home_initial() {
  // const [noticia, setOcorrencia] = useState(null);

  //   useEffect(() => {
  //       axios.get(`http://localhost:3000/noticias`)
  //          .then((response) => {
  //            setOcorrencia(response.data)
  //         })
  //         .catch((err) => {
  //           console.error("ops! ocorreu um erro : " + err);
  //         });
  //     }, []);

  //     if (!noticia) return null;
  return (
    <>
      <SideNavBar cor={"#f1a014"} titulo={"Defesa Civil"}/>
      <div style={{ marginTop: "100px", marginBottom: "100px"}}>
      <Container>
        <div className={styles.principal}>
          <div className="col col-lg-3">
            <h3 className="mb-5 text-center text-decoration-none">Ultimas Noticias</h3>
            <Card className="mb-5">
              <ListGroup flush>
                {noticias.map(noticias => (
                    <ListGroupItem><a href={`news/${noticias.id}`}>{noticias.titulo}</a></ListGroupItem>
                ))}
                
              </ListGroup>
              <CardBody>
                <CardLink href="#">Ver todas as Noticias</CardLink>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardTitle tag="h5">Perguntas Frequentes</CardTitle>
              </CardBody>
              <ListGroup flush>
                <ListGroupItem><CardLink href="#">Como fazer uma denúncia anônima?</CardLink></ListGroupItem>
                <ListGroupItem><CardLink href="#">Quando a secretaria de meio ambiente deve ser acionada?</CardLink></ListGroupItem>
                <ListGroupItem><CardLink href="#">O que a defesa civil fiscaliza?</CardLink></ListGroupItem>
                <ListGroupItem><CardLink href="#">Qual a função da defesa civil?</CardLink></ListGroupItem>
                
              </ListGroup>
              <CardBody className="text-center">
                <CardLink href="#">Ver mais</CardLink>
              </CardBody>
            </Card>
          </div>
          <div>
            <h3 className="mb-2">Atuações</h3>
            <CarouselComponent />
          </div>
        </div>
      </Container>
      </div>
      <Rodape/>
    </>
  );
}
