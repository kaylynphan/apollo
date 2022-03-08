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
import ListOfReviewPosts from "./ListOfReviewPosts";
import albums from "./albums.json";
import reviews from "./reviews.json";

function ArtistPage(props){
    const [isAuth, setIsAuth] = useState(false);
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            window.location.pathname = "/login"
        })
    }

    const [submissions, updateSubmissions] = useState(0);
    const handleSubmissions = () => {
        updateSubmissions(submissions + 1);
        console.log("Submissions is updating");
    }
    return (
        <div>
            <ArtistProfile artistName={props.artistName}/>
            <ReviewForm artistName={props.artistName} handleSubmissions={handleSubmissions}/>
            <ListOfReviewPosts artistName={props.artistName} submissions={submissions}/>
        </div>
    );
}

export default ArtistPage;