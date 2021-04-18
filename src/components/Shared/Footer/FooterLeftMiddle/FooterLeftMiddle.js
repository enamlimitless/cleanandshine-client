import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faPinterest, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

const FooterLeftMiddle = () => {
    return (
        <div>
            <h2 className="footer-head">Newsletter</h2>
            <p>Subscribe our newsletter to get our latest update & news</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Your Email Address" />
                <div class="input-group-append">
                <button className="btn button btn-rocket form-control"><FontAwesomeIcon icon={faRocket} /></button>
                </div>
            </div>
            <div className="d-flex">
                <a className="icon" href="https://facebook.com/enamulhaquebrown"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="icon" href="https://twitter.com/enamulhaque71"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="icon" href="https://pinterest.com/enamulhaque7"><FontAwesomeIcon icon={faPinterest} /></a>
                <a className="icon" href="https://instagram.com/enamulhaque.dev"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    );
};

export default FooterLeftMiddle;