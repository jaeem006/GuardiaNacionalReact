import Button from "../UI/Button/Button";
import styles from "./Navigation.module.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Navigation() {
  const { isLoggedIn, onLogout } = useContext(AuthContext);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Público</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/login">Iniciar Sesión</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Button onClick={onLogout} color="secondary">
              Salir
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
