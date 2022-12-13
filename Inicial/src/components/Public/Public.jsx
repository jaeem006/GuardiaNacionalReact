import Card from "../UI/Card/Card";
import styles from "./Public.module.css";

function Public() {
  return (
    <Card className={styles.public}>
      <h1>Página Pública</h1>
    </Card>
  );
}

export default Public;