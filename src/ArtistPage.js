import React from "react";
import ArtistProfile from "./ArtistProfile"
import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { useState } from "react"
import { signOut } from 'firebase/auth'
import {auth} from "./firebase"
import Home from "./Home"
import Login from "./Login"
import Form from "./Form"
import ReviewForm from "./ReviewForm";
import ReviewPost from "./ReviewPost";

function AristPage(props){
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
        <ReviewForm />
        <ReviewPost />
    </div>
        
     
    );
}

export default AristPage;