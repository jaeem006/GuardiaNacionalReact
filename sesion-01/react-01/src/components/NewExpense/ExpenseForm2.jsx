import styles from "./ExpenseForm.module.css";
import { useState } from 'react';

function ExpenseForm(props) {

    // const [title, setTitle] = useState("");
    // const [precio, setPrecio] = useState(0);
    // const [fecha, setFecha] = useState("")
    const [data, setData] = useState({
        title: "",
        precio: 0,
        fecha: ""
    })

    const [isValid, setIsValid] = useState(true)

    const titleChangeHandler = (event) => {
        // setTitle(event.target.value);
        setData(prevState => ({...prevState, title:event.target.value }))
    }
    const precioChangeHandler = (event) => {
        // setPrecio(event.target.value);
        setData(prevState => ({...prevState, precio:event.target.value }))
    }
    const fechaChangeHandler = (event) => {
        // setFecha(event.target.value);
        setData(prevState => ({...prevState, fecha:event.target.value }))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        // const expense = {
        //     title,
        //     fecha,
        //     precio
        // }
        // console.log(expense)
        if (data.title.trim().length === 0){
            setIsValid(false);
            return
        }
        props.onSaveExpense(data)
        setIsValid(true)
        setData({
            title : "",
            precio : 0,
            fecha: ""
        })
    }
  
    return (
        <form onSubmit={submitHandler}>
        <div className={styles["new-expense-controls"]}>
            <div 
                className={`${styles["new-expense-control"]} ${!isValid && styles.invalid}`}>
                <label>Descripción</label>
                <input type="text" 
                    // value={title}
                    value={data.title}
                onChange={titleChangeHandler}/>
            </div>
            <div className={styles["new-expense-control"]}>
            <label>Monto</label>
            <input type="number" min="1" step="1" 
                // value={precio}
                value={data.precio}
                onChange={precioChangeHandler}/>
            </div>
            <div className={styles["new-expense-control"]}>
            <label>Fecha</label>
            <input type="date" min="2019-01-01" max="2022-12-31" 
                // value={fecha}
                value={data.fecha}
                onChange={fechaChangeHandler}/>
            </div>
        </div>
        <div className={styles["new-expense-actions"]}>
            <button type="submit">Agregar</button>
        </div>
        </form>
    );
}

export default ExpenseForm;