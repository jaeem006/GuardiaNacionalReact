import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin : () => {},
    nombre : ""
})

export function AuthContextProvider(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [nombre, setNombre] = useState("");

    const url = "http://localhost:4001/v1/usuarios/login"

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token")
            if (!token){
                setIsLoggedIn(false)
                return
            }
            const res = await axios.post("http://localhost:4001/v1/usuarios/valida",{
                token : token
            })
            if (res.data.val)
                setIsLoggedIn(true)
            else {
                setIsLoggedIn(false)
                alert("El token no es válido")
            }
        }
        fetchUser();
    }, [])

    const loginHandler = async (email, password) => {
        try {
            const res = await axios.post(url,{
                email : email,
                password : password
            })
            console.log(res.data.user)
            setNombre(res.data.user.username)
            localStorage.setItem("isLoggedIn","1")
            localStorage.setItem("token",res.data.user.token)
            setIsLoggedIn(true);
        } catch(e) {
            alert("Fallo la autenticación")
        }
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn")
        localStorage.removeItem("token")
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
                nombre
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;