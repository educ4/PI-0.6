import React from "react";
import styles from './Html.module.css';
import SubmitButton from '../../form/submitButton';
import Ranking from './ranking';
import {Link} from 'react-router-dom';

function Html(){
    return(
        <div className={styles.container}>
                <h1 className={styles.titulo}>HTML 5 - Do Básico ao Avançado</h1>
                
                <div className={styles.btn}>
                    <Link to="/curso-html">
                     <SubmitButton text="Matricular-se"></SubmitButton>
                    </Link>
                </div>

                
            
            <div>
              <Link to='/ranking'>
                <button className={styles.button}>Clique Aqui para ver o ranking de nossos cursos</button>
              </Link>
            </div>
        </div>
        
    )

}

export default Html