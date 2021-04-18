import React, { useContext, useState } from 'react';
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
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [user, setUser] = useState({
        isSingIn: false,
        name: '',
        email: '',
        password: '',
        err: ''
    })
    const handleWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                /** @type {firebase.auth.OAuthCredential} */
                const {displayName, email} = res.user || {};
                const singInUser = {name: displayName, email}
                console.log(singInUser.email)
                setLoggedInUser(singInUser)
                history.replace(from);
                console.log(email,loggedInUser,setLoggedInUser,user)
            }).catch((err) => {
                var errCode = err.code;
                var errMessage = err.message;
                var email = err.email;
                console.log(errCode, errMessage, email)
            });
    }
    return (
        <div className="parent container">
            <div className="row">
                <div className="col-lg-12">
                   <div className="login-card">
                   <div><img src={logo} alt=""/></div>
                   <h2 className="text-primary ms-5 ps-5">Login With Google</h2>
                    <button className="login-btn my-4" onClick={handleWithGoogle}><FontAwesomeIcon icon={faGoogle} /> <span className="ms-5 ps-5 text-secondary">Google Sign in</span></button><br/>
                    <span className="ms-5 ps-3 h5">Don't have an account</span> <a href="/" className="h5 text-danger">create an account</a>
                   </div>
                   <div className="login-desciption">
                       <p>Sorry For Not Login Auth. My Firebase login didn't work. So I did not use Firebase Private </p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Login;