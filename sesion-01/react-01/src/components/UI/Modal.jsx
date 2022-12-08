import Card from "./Card"
import Button from "./Button"
import styles from "./Modal.module.css"
import ReactDOM from "react-dom"

function Backdrop (props){
    return (
        <div className={styles.backdrop}></div>
    )
}

function ModalOverlay(props){
    return(
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Aceptar</Button>
            </footer>
        </Card>
    )
}

function Modal(props){
    return( 
        <>
        {ReactDOM.createPortal(
           <Backdrop/> ,
           document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
            <ModalOverlay
                title={props.title}
                message={props.message}
                onConfirm={props.onConfirm}
            />,
        document.getElementById("modal-root"))}
        </>);

}

export default Modal