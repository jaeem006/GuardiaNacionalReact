import { useState, useRef } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button'
import Modal from '../UI/Modal';

const FormControls = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1rem;
        text-align: left;
`;

const FormActions = styled.div`
        text-align: right;
`

const FormControl = styled.div`
        & label {
            font-weight: bold;
            margin-bottom: 0.5rem;
            display: block;
            color: ${props => (props.invalid ? "#ad0000" : "#000")};
        }

        & input {
            font: inherit;
            padding: 0.5rem;
            border-radius: 6px;
            border: 1px solid ${(props) => (props.invalid ? "#ad0000" : "#ccc")};
            width: 20rem;
            max-width: 100%;
        }
`;

// const Button = styled.button`
//         font: inherit;
//         cursor: pointer;
//         padding: 0.5rem 1rem;
//         border: 1px solid #464646;
//         background-color: #464646;
//         color: #e5e5e5;
//         border-radius: 12px;
//         margin-right: 1rem;
//         width: 100%;

//         &:hover,
//         &:active {
//             background-color: #afafaf;
//             border-color: #afafaf;
//             color: black;
//         }

//         @media (min-width: 768px) {
//             width: auto;
//         }
// `

function ExpenseForm(props) {

    const [data, setData] = useState({
        title: "",
        precio: 0,
        fecha: ""
    })

    const [isValid, setIsValid] = useState(true)

    const [isOpen, setIsOpen] = useState(false)

    const [isOpen2, setIsOpen2] = useState(false)

    const inputRef = useRef(null)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const openModal = () => {
        setIsOpen2(true)
    }
    const closeModal = () => {
        console.log("No soy igual")
        setIsOpen2(false)
    }

    const titleChangeHandler = (event) => {
        setData(prevState => ({...prevState, title:event.target.value }))
    }
    const precioChangeHandler = (event) => {
        setData(prevState => ({...prevState, precio:event.target.value }))
    }
    const fechaChangeHandler = (event) => {
        setData(prevState => ({...prevState, fecha:event.target.value }))
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setIsOpen(true)
        
        if (data.title.trim().length === 0){
            setIsValid(false);
            inputRef.current.focus()
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
        <>
        {
            isOpen && 
            <Modal
                title ="Modal"
                message={data.title}
                onConfirm={toggleModal}
            />
        
        }
        {
            isOpen2 && 
            <Modal
                title ="Modal 2"
                message="Otro modal de prueba"
                onConfirm={closeModal}
            />
        
        }
        <form onSubmit={submitHandler}>
            <FormControls>
                <FormControl invalid={!isValid} >
                    <label>Descripci??n</label>
                    <input
                        type="text"
                        value={data.title}
                        onChange={titleChangeHandler}
                        ref={inputRef}
                    />
                </FormControl>
                <FormControl>
                    <label>Precio</label>
                    <input
                        type="number"
                        min="0"
                        step="1"
                        value={data.precio}
                        onChange={precioChangeHandler}
                    />
                </FormControl>
                <FormControl>
                    <label>Fecha</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={data.fecha}
                        onChange={fechaChangeHandler}
                    />
                </FormControl>
            </FormControls>
            <FormActions>
                <Button type='submit'>Agregar</Button>
                <Button onClick={openModal}>Abrir</Button>
            </FormActions>
        </form>
        </>
    );
}

export default ExpenseForm;