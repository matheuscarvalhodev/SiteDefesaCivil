import React from "react";
import styles from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <div>
        <img src="../imagens/df.png" alt="logo"/>
      </div>
      <p>Desenvolvido pela Ufopa</p>
    </footer>
  );
}