import styles from './Inicio.module.css';
import React from "react";


function Verification_email(){

  return (
      <div className={styles.container} >

        <form>
          <h1 className={styles.loginformtitle}> Redefinição de senha </h1>
          <h2 className={styles.loginformthead}> Digite seu e-mail no campo
           abaixo e lhe enviaremos um código de ativação para 
          refefinição de senha </h2>
         
          <div className={styles.email}>
            <input className={styles.input}
              type="email"
              nome= "email"
              id="email"
              placeholder="E-mail"
              required
               title="Por favor, digite o e-mail." />
            <button className={styles.loginbtn} type="submit"><a href="/change-password">Enviar</a></button>
          </div>
        </form>
      </div>

      );
}
export default Verification_email;