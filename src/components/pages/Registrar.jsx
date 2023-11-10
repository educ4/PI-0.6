import React from "react"
import { Link } from 'react-router-dom'
import styles from './registrar.module.css';

const Registrar = () => {
  return (
    <div className={styles.container}>
      <Link to='/cadastro-aluno'>
        <button className={styles.button}>Cadastro Aluno</button>
      </Link>

      <Link to='/cadastro-professor'>
        <button className={styles.button}>Cadastro Professor</button>
      </Link>
    </div>
  )
}

export default Registrar;