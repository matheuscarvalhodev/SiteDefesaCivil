import styles from './Inicio.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Col, Row, Input } from 'reactstrap'


export default function Login() {

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,

        }
        console.log(data)
    }

    return (
        <Row className={styles.cardPrincipal}>
            <Col className={styles.cardPrincipal1}>
                <img src='DFCIVIL.png' className={styles.imagem} />
            </Col>

            <Col className={styles.cardCadastro}>
                <h1 className="font-weight-bold">LOGIN</h1>
                <form className={styles.cardBody} onSubmit={onSubmit}>
                    <div className="mb-3">
                        <Input
                            name='email'
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div>
                        <Input
                            name='password'
                            type="password"
                            className="form-control"
                            placeholder="Senha"
                            required
                        />

                    </div>
                    <div className={styles.link}>
                        <div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                    />
                                    <label className={styles.customControlLabel} htmlFor="customCheck1">
                                        Lembrar senha?
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">
                                <label className={styles.rememberPassword} htmlFor="customCheck1">
                                    <a href="/recover-password">Esqueceu a senha?</a>
                                </label>

                            </div>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button
                            type="submit"
                            className={styles.btnColor}>
                            Entrar
                        </button>
                    </div>
                    <div >
                        <p className={styles.dontAccont}>
                            <a href="/new_register">Não tem uma conta?</a>
                        </p>
                    </div>
                </form>
            </Col>
        </Row>
    )
}