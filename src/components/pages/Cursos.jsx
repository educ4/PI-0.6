import {Link} from 'react-router-dom';


import styles from '../../components/pages/cursos.module.css';

import js from '../../img/jslogo.png';
import css from '../../img/csslogo.png';
import react from '../../img/reactlogo.png';
import spring from '../../img/spring.png';
import html from '../../img/html.png';
import Ranking from './ranking'
import SubmitButton from '../../form/submitButton';


function Cursos(){
    return (
      <div className = {styles.container}>
        <h1 className={styles.titulo}>Cursos Disponíveis</h1>
        <div className = {styles.box1}>
        
          
            
              <div className = {styles.box2}>
                <Link to='/'>
                  <img src={spring} alt="springlogo" className={styles.logo}/>
                </Link>
                  <h2>Spring Boot</h2><br />
                  <p>Introdução ao Spring Boot</p>
                  <p>Configuração e Propriedades</p>
                  <p>Desenvolvimento de Aplicativos Web</p>
                  <p>Persistência de Dados com Spring Boot</p>
                
        
              </div>
            
            <div className = {styles.box2}>
              <Link to='/'>      
                <img src={js} alt="jslogo" className={styles.logo} />
              </Link> 
                <h2>Java Script</h2><br />
                <p>Introdução ao JavaScript</p>
                <p>Manipulação do DOM com JavaScript</p>
                <p>Funções e Escopo em JavaScript</p>
                <p>Trabalhando com Eventos em JavaScript</p>
               
            </div>

            <div className={styles.box2}>
              <Link to='/html'>
                <img src={html} alt="htmllogo" className={styles.logo1} />
              </Link>
                <h2>HTML5</h2><br />
                <p> Introdução a HTML5</p>
                <p>Estrutura Básica de um Documento HTML5</p>
                <p>Elementos Semânticos em HTML5</p>
                <p>Formulários e Entrada de Dados em HTML5</p>
              
            </div>
            

            <div className={styles.box2}>
            
            <Link to='/'><img src={css} alt="csslogo" className={styles.logo}/>
            </Link> 
              <h2> CSS 3</h2><br />
              <p>Introdução ao CSS 3</p>
              <p>Módulo de Animações CSS</p>
              <p>Módulo de Layouts</p>
              <p>Módulo de Layouts Flexbox</p>
              
              
            </div>
            
            
            <div className={styles.box2}>
              <Link to='/'>
                <img src={react} alt="reactlogo" className={styles.logo} />
              </Link>   
                <h2>ReactJS</h2><br />
                <p>Introdução ao ReactJS</p>
                <p>Componentes e Props no React</p>
                <p>Manipulação de Eventos no React</p>
                <p>Roteamento no React com React Router</p>
            </div>
            <div>
              <Link to='/ranking'>
                <button className={styles.button}>Clique Aqui para ver o ranking de nossos cursos</button>
              </Link>
            </div>
        </div>
      </div>
  )   
      
}
  
export default Cursos