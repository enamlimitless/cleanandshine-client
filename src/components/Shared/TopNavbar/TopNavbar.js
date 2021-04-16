import React from 'react';
import './TopNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const TopNavbar = () => {
    return (
        <div className="top-navbar">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <p>Welcome to our Shine Cleaning Service!</p>
                    </div>
                    <div className="col-lg-3">
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> Call for help: (+143) 3865 0000</p>
                    </div>
                    <div className="col-lg-3">
                        <p> <FontAwesomeIcon icon={faEnvelope} /> Mail to us: example@gmail.com</p>
                    </div>
                    <div className="col-lg-2">
                        <div className="d-flex">
                            <a href="https://facebook.com/enamulhaquebrown"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com/enamulhaque71"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://pinterest.com/enamulhaque7"><FontAwesomeIcon icon={faPinterest} /></a>
                            <a href="https://instagram.com/enamulhaque.dev"><FontAwesomeIcon icon={faInstagram} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;