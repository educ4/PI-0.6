import React from 'react';
import styles from '../../components/pages/ranking.module.css';

import js1 from '../../img/js1.png';
import js2 from '../../img/js2.png';
import js3 from '../../img/js3.png';
import js4 from '../../img/js4.png';
import js5 from '../../img/js5.png';
import spring1 from '../../img/spring1.png';
import spring2 from '../../img/spring2.png';
import spring3 from '../../img/spring3.png';
import spring4 from '../../img/spring4.png';
import spring5 from '../../img/spring5.png';
import html1 from '../../img/html1.png';
import html2 from '../../img/html2.png';
import html3 from '../../img/html3.png';
import html4 from '../../img/html4.png';
import html5 from '../../img/html5.png';
import css1 from '../../img/css1.png';
import css2 from '../../img/css2.png';
import css3 from '../../img/css3.png';
import css4 from '../../img/css4.png';
import css5 from '../../img/css5.png';
import react1 from '../../img/react1.png';
import react2 from '../../img/react2.png';
import react3 from '../../img/react3.png';
import react4 from '../../img/react4.png';
import react5 from '../../img/react5.png';
import grafico from '../../img/grafico.png';



function ranking() {
    return (
        <div className = {styles.container}>
            <hr />    
            <h1 className={styles.titulo}>
                Ranking
            </h1>
            <hr />

            <div className = {styles.box1}>
                    <img src={grafico} alt="grafico" className={styles.grafico}/>
            </div>
            <hr />
                <h1>Avaliação de usuários</h1>
                <hr />
            <div className = {styles.box}>
                
                <div className = {styles.box2}>
                    <h2>HTML</h2>
                    <img src={html1} alt="html1" className={styles.img}/>
                    <img src={html2} alt="html2" className={styles.img}/>
                    <img src={html3} alt="html3" className={styles.img}/>
                    <img src={html4} alt="html4" className={styles.img}/>
                    <img src={html5} alt="html5" className={styles.img}/>
                
                </div>
                
                <div className = {styles.box2}>
                    <h2>CSS</h2>
                    <img src={css1} alt="css1" className={styles.img}/>
                    <img src={css2} alt="css2" className={styles.img}/>
                    <img src={css3} alt="css3" className={styles.img}/>
                    <img src={css4} alt="css4" className={styles.img}/>
                    <img src={css5} alt="css5" className={styles.img}/>
                    
                </div>
                
                <div className = {styles.box2}>
                    <h2>React</h2>
                    <img src={react1} alt="react1" className={styles.img}/>
                    <img src={react2} alt="react2" className={styles.img}/>
                    <img src={react3} alt="react3" className={styles.img}/>
                    <img src={react4} alt="react4" className={styles.img}/>
                    <img src={react5} alt="react5" className={styles.img}/>
                    
                </div>

                <div className={styles.box2}>
                <h2>Spring</h2>
                    <img src={spring1} alt="spring1" className={styles.img}/>
                    <img src={spring2} alt="spring2" className={styles.img}/>
                    <img src={spring3} alt="spring3" className={styles.img}/>
                    <img src={spring4} alt="spring4" className={styles.img}/>
                    <img src={spring5} alt="spring5" className={styles.img}/>
                
                </div>
                

                <div className={styles.box2}>
                
                <h2>Java Script</h2>
                    <img src={js1} alt="js1" className={styles.img}/>
                    <img src={js2} alt="js2" className={styles.img}/>
                    <img src={js3} alt="js3" className={styles.img}/>
                    <img src={js4} alt="js4" className={styles.img}/>
                    <img src={js5} alt="js5" className={styles.img}/>
                
                </div>
            </div>  
            
            
          
        </div>
      
    );
  }
  
  export default ranking;
  