import styles from './Inicio.module.css';

import React from "react";


function Verification_password () {
  return (

    <div class={styles.maincontainer} >
      <div class={styles.container} >
       
        <form>
        <span className={styles.loginformtitle}> Redefinição de senha </span>
            <span className={styles.loginformthead}> Por favor, insira no campo
             abaixo o código de ativação que você recebeu por e-mail  </span>
             <input class={styles.input}
             type="codigo" id="codigo" 
             placeholder="Código"
             required title="Por favor, digite o código" />
          

            <button className={styles.loginbtn} type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
 export default Verification_password;