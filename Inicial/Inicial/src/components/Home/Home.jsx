import Card from "../UI/Card/Card";
import styles from "./Home.module.css";
import AuthContext from "../../context/AuthContext";
import { useContext } from "react";

function Home() {

  const { nombre } = useContext(AuthContext);

  return (
    <Card className={styles.home}>
      <h1>¡Bienvenido {nombre}!</h1>
    </Card>
  );
}

export default Home;
