import React from 'react';
import './MainHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const MainHeader = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="head-text">Best cleaning service in town</h1>
                    <p className="head-des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero veritatis tempore non voluptatibus dolorem excepturi suscipit accusantium recusandae exercitationem deleniti!</p>
                    <button className="btn btn-style button">Our Services <FontAwesomeIcon className="mt-2 ms-2" icon={faArrowRight} /></button>
                </div>
                <div className="col-lg-6 head-img">
                </div>
            </div>
        </div>
    );
};

export default MainHeader;