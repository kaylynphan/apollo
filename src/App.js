import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Homepg from "./Homepg"
import Login from "./Login"
import { useState } from "react"


function App (){
    const [isAuth, setIsAuth] = useState(false);
    return (
    <Router>
        <nav>
            <Link to="/"> Homepg </ Link>
            <Link to="/login">Login</Link>
        </ nav>
        <Routes>
            <Route path="/" element={<Homepg />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        </Routes>
    </ Router>
    );

}

export default App;