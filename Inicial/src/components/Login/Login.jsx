import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./Login.module.css";
import AuthContext from "../../context/AuthContext";

function emailReducer(state,action){
  switch(action.type){
    case "UPDATE_EMAIL":
      return {
        ...state,
        value: action.payload,
        isValid: action.payload.includes("@")
        
      }
    case "UPDATE_PASSWORD":
      return {
        ...state,
        pValue: action.payload,
        pValid: action.payload.length >= 6
      }
    case "INPUT_BLUR" :
      return {
        ...state,
        isValid: state.value.includes("@")
      }
    case "INPUT_BLUR_P" :
      return {
        ...state,
        pValid: state.pValue.length >= 6
      }
    default :
      return {
        value: "",
        isValid: false,
        pValid: false,
        pValue: ""
      }
  }
}

function Login() {

  const [emailState, dispatchEmail] = useReducer(emailReducer,{
    value : "",
    isValid: null,
    pValue: "",
    pValid: null
  })

  const { onLogin } = useContext(AuthContext);

  const { value, isValid , pValue, pValid } = emailState

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // console.log("validando")
      setFormIsValid( isValid && pValid)
    }, 500)

    return () => {
      // console.log("Cleanup")
      clearTimeout(timer)
    }
  }
  ,[isValid, pValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: "UPDATE_EMAIL",
      payload: event.target.value
    })
  };

  const passwordChangeHandler = (event) => {
    dispatchEmail({
      type: "UPDATE_PASSWORD",
      payload: event.target.value
    })
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
   dispatchEmail({type: "INPUT_BLUR_P"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(value, pValue);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            isValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            value={value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            pValid === false ? styles.invalid : ""
          }`}
        >
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={pValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
