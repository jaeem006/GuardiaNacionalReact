import styles from "./ExpenseItem.module.css"

function ExpenseItem(props){

  console.log(styles)
    return (
        <div className={styles["expense-item"]}>
          <div>{props.fecha}</div>
          <div className={styles["expense-item-description"]}>
            <h2>{props.title}</h2>
            <div className={styles["expense-item-price"]}>${props.precio}</div>
          </div>
        </div>
    );
}

export default ExpenseItem