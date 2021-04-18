import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/spray.png';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                console.log(token, user.email)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }
    return (
        <div className="parent container">
            <div className="row">
                <div className="col-lg-12">
                   <div className="login-card">
                   <div><img src={logo} alt=""/></div>
                   <h2 className="text-primary ms-5 ps-5">Login With Google</h2>
                    <button className="login-btn my-4" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> <span className="ms-5 ps-5 text-secondary">Google Sign in</span></button><br/>
                    <span className="ms-5 ps-3 h5">Don't have an account</span> <a href="/" className="h5 text-danger">create an account</a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Login;