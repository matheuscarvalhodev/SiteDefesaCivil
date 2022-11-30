import React, { useEffect, useState } from 'react';
import styles from './Inicio.module.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption, Card, CardHeader, Form, Nav, NavItem, NavLink, Input, InputGroup, InputGroupText, CardBody, Col, Button, Row, Label, FormGroup
} from 'reactstrap'
import { row } from "bootstrap"
import posts from 'json/posts.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from "componentes/PostCard";
import { FaUserCircle } from "react-icons/fa"
import { CiUser } from "react-icons/ci";


export default function Registration() {

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            nome: e.target.elements.nome.value,
            sobrenome: e.target.elements.nome.value,
            endereco: e.target.elements.endereco.value,
            cpf: e.target.elements.cpf.value,
            telefone: e.target.elements.telefone.value,
            email: e.target.elements.email.value,
            senha: e.target.elements.senha.value,
            novaSenha: e.target.elements.novaSenha.value,
        }
        console.log(data)
    }

    return (
        <Row className={styles.cardPrincipal}>
            <Col className={styles.cardPrincipal1}>

                <img src='DFCIVIL.png' className={styles.imagem} />

            </Col>

            <Col>
                <form onSubmit={onSubmit} className={styles.form}>
                    <div>
                    <h1 className="d-flex justify-content-center p-3 m-0 text-secondary font-weight-bold">CADASTRO</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Input type="text" id='nome' className="form-control" placeholder="Nome" required />
                        </div>
                        <div className="col">
                            <Input type="text" id='sobrenome' className="form-control" placeholder="Sobrenome" required />
                        </div>
                    </div>

                    <div>
                        <Input type="text" id='endereco' className="form-control mt-3" placeholder="Endereço" required />
                    </div>
                    <div className="row">
                        <div className="col ">
                            <Input type="tel" id='telefone' className="form-control mt-3" placeholder="Telefone" required />
                        </div>
                        <div className="col">
                            <Input type="number" id='cpf' className="form-control mt-3" placeholder="CPF" required />
                        </div>
                    </div>
                    <div >
                        <Input type="email" className="form-control mt-3" id="email" aria-describedby="emailHelp" placeholder="Email" required />
                    </div>

                    <div className="row">
                        <div class="col">
                            <Input type="password" id='senha' className="form-control mt-3 " placeholder="Senha" required />
                        </div>
                        <div className="col">
                            <Input type="password" id='novaSenha' className="form-control mt-3" placeholder="Senha Novamente" required />
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center m-4'>
                        <button
                            type="submit"
                            className={styles.btnColor}

                        >
                            Sign Up
                        </button>
                    </div>
                    <div>
                        <p className="dont-accont text-center">
                            Já possui registro? <a href="/login">Faça login</a>
                        </p>
                    </div>
                </form>
            </Col>
        </Row>
    )
}