import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
const FooterRightMiddle = () => {
    return (
        <div>
            <h2 className="footer-head">Official info:</h2>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h5 className="ms-4">30 Commercial Road Fratton,<br/> Australia</h5>
            </div>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPhone} />
                <h5 className="ms-4 my-4">1-888-452-1505</h5>
            </div>
            <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <h5 className="ms-4">example.143@gmail.com</h5>
            </div>
        </div>
    );
};

export default FooterRightMiddle;