import React from 'react';
import styles from './sobre.module.css';

function Sobre() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>Sobre Nós</h1>
        <p className={styles.text}>
          Unidos pela paixão pelo aprendizado e desenvolvimento web, seis desenvolvedores se uniram no ano de 2023 com a criação da Elo Startup. A plataforma Elo busca compartilhar e aperfeiçoar a educação de desenvolvimento web com sistema de cursos online gratuitos e acessíveis de alta qualidade. Com um catálogo que conta com mais conteúdo a cada dia, com cursos desde design de interface de usuário até desenvolvimento de back-end.
        </p>
      </div>
      <div className={styles.box}>
        <h1 className={styles.title}>Missão</h1>
        <p className={styles.text}>
          Promover o aprendizado acessível e prático de desenvolvimento web e backend, capacitando indivíduos para se tornarem profissionais qualificados e preparados para enfrentar os desafios do setor de tecnologia.
        </p>
      </div>
      <div className={styles.box}>
        <h1 className={styles.title}>Visão</h1>
        <p className={styles.text}>
          Ser a principal referência global em educação tecnológica, fornecendo um ambiente de aprendizado inovador e adaptável que capacite pessoas a transformarem ideias em soluções digitais impactantes.
        </p>
      </div>
      <div className={styles.box}>
        <h1 className={styles.title}>Valores</h1>
        <ul className={styles.values}>
          <li>Inovação</li>
          <li>Acessibilidade</li>
          <li>Qualidade</li>
          <li>Comunidade</li>
          <li>Empreendedorismo</li>
        </ul>
      </div>
    </div>
  );
}

export default Sobre;
