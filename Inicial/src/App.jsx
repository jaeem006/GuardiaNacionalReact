import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Public from "./components/Public/Public";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Public/>}/>
          <Route 
            path="/home" 
            element={
              <RequireAuth>
                <Home/>
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
