import React from "react";
import albums from "./Search"
import ArtistProfile from "./ArtistProfile"
import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useState } from "react"
import { signOut } from 'firebase/auth'
import {auth} from "./firebase"
import Home from "./Home"
import Homepg from "./Homepg"
import Login from "./Login"

function Album(){
    const [isAuth, setIsAuth] = useState(false);
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            window.location.pathname = "/login"
        })
    }
    return (
    <div>
        <Routes>
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            
        </Routes>
        <ArtistProfile />
    
    </div>
        
     
    );
}

export default Album;