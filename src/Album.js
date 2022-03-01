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
import Form from "./Form"

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
        <ArtistProfile />
        <Form />
    </div>
        
     
    );
}

export default Album;