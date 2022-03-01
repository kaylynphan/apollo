import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Homepg from "./Homepg"
import Login from "./Login"
import { useState } from "react"
import { signOut } from 'firebase/auth'
import {auth} from "./firebase"

function App (){
    const [isAuth, setIsAuth] = useState(false);
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            window.location.pathname = "/login"
        })
    }
    return (
    <Router>
        <nav>
            <Link to="/"> Homepg </ Link>
            {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signUserOut}>Log Out</button>}
        </ nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        </Routes>
    </ Router>
    );

}

export default App;