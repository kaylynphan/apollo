import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import { useState } from "react"
import { signOut } from 'firebase/auth'
import {auth, db} from "./firebase"
import {collection} from "firebase/firestore"
import AristPage from "./ArtistPage"

function App (){
    /*firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
  .then(() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // In memory persistence will be applied to the signed in Google user
    // even though the persistence was set to 'none' and a page redirect
    // occurred.
    return firebase.auth().signInWithRedirect(provider);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });*/

    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const [user, setUser] = useState(localStorage.getItem("user"));
    
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            window.location.pathname = "/login"
        })
    }
    
    return (
    <Router>
        <nav class="nav">
            <img className="logo" src="logo.png" alt="logo"/>
            <Link class="left" to="/"> Home </ Link>
            {!isAuth ? <Link class="right" to="/login">Login</Link> : <button class="right" onClick={signUserOut}>Log Out</button>}<br/>
            {isAuth ? <p class="indicatelogin">Posting as: {user} </p> : <p class="indicatelogin">You're not logged in.</p>}
        </ nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            <Route path="/artist" element={<AristPage artistName="Taylor Swift"/>}/>
        </Routes>
    </ Router>
    );

}

export default App;