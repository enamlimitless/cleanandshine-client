import React from 'react';
import './ServicesDetail.css';
const ServicesDetail = ({ service }) => {
    console.log(service.imgUrl)
    return (
        <div className="col-lg-4 mt-4 services">
            <div className="services-card">
                <img src={service.imgUrl} alt="" />
                <h3 className="services-head">{service.title}</h3>
                <p className="description">{service.description}</p>
                <button className="btn button">Learn More</button>
            </div>
        </div>
    );
};

export default ServicesDetail;