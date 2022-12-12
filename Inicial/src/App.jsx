import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AuthContext from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { isLoggedIn } = useContext(AuthContext)
  return (
    <>
      <Header/>
      <main>
        {!isLoggedIn && <Login/>}
        {isLoggedIn && <Home/>}
      </main>
    </>
  );
}

export default App;
