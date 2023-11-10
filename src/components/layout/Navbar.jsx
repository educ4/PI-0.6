import {Link} from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logoelo.png'
import usuario from '../../img/usuario.png'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Container>
            <Link to='/'>
                <img src={logo} alt="img"  className={styles.logo} />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                <Link to="/">Home</Link>
                </li>

                <li className={styles.item}>
                <Link to="/cursos">Cursos</Link>
                </li>

                <li className={styles.item}>
                <Link to="/login">Login</Link>
                </li>

                <li className={styles.item}>
                <Link to="/registrar">Registrar-se</Link>
                </li>

                <li className={styles.item}>
                <Link to="/area-user"><img src={usuario} alt="usuario" width="30px" height="30px"/></Link>
                </li>

            </ul>
        </Container>
  </nav>
  )
}

export default Navbar