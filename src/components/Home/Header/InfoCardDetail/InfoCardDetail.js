import React from 'react';
import './InfoCardDetail.css';
const InfoCardDetail = ({ info }) => {
    return (
        <div className="col-lg-4 mt-3 info-card">
            <div className="d-flex head-card align-items-center">
                <div className="info-img-style">
                    <img className="img-fluid" src={info.icon} alt="" />
                </div>
                <div className="ms-4 head-card-text">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCardDetail;