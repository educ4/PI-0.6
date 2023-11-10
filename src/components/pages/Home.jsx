import {Link} from 'react-router-dom'

import styles from './Home.module.css';
import img1 from '../../img/img1.jpg';

import SubmitButton from '../../form/submitButton';
import Cursos from './Cursos';
import Sobre from './sobre';



function Home(){

  
    

    return (

      <section className={styles.home_container}>
        <div  className={styles.div1}>
          <h1>Seja Bem Vindo a Elo!</h1>
          <p>Junte-se a nós e trilhe o caminho do sucesso com nossos cursos de estudos de desenvolvimento!</p>
          <Link to='/registrar'>
            <SubmitButton text="Cadastro"/>
          </Link>

          
          {/*<img src={img1} alt="teste" classname="img1"/>*/}
        </div> 
        <Cursos/><br /><br />
        <Sobre/>
        


      </section>
      
    )
}
  
export default Home