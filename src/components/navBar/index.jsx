import styles from "./style.module.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.a}>
            Inicio
          </NavLink>
          <NavLink to="/Catalogo" className={styles.a}>
            Catalogo
          </NavLink>
          <NavLink to="/Sobre Nosotros" className={styles.a}>
            Sobre Nosotros
          </NavLink>
          <NavLink to="/Contacto" className={styles.a}>
            Contacto
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
