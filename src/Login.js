import React from "react";
import {auth, provider} from "./firebase"
import { sendSignInLinkToEmail, signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth'
function Login({setIsAuth}, {setUser}){
    let navigate=useNavigate();
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            setUser("")
            navigate("/login")
        })
    }
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            localStorage.setItem("user", auth.currentUser.displayName);
            setIsAuth(true)
            navigate("/")
        })
    }
    return <div className="loginPage">
        <p>Sign In with Google to Continue</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>;
}

export default Login;