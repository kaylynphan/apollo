import "./App.css"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Home"
import Homepg from "./Homepg"
import Login from "./Login"
import { useState } from "react"
import { signOut } from 'firebase/auth'
import {auth} from "./firebase"
import Album from "./Album"

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
            <Link to="/"> Home </ Link>
            {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signUserOut}>Log Out</button>}
        </ nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            <Route path="/album" element={<Album />}/>
        </Routes>
    </ Router>
    );

}

export default App;