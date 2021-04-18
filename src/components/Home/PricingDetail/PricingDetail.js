import React from 'react';
import './PriceDetail.css';
const PricingDetail = ({ price }) => {
    return (
        <div className="col-lg-4 mt-4">
            <div className="price-card text-center">
                <h5 className="best-choice">{price.choice}</h5>
                <h2 className="price-title">{price.title}</h2>
                <span className="price-employee">{price.employee}</span>
                <h1 className="price">{price.price}</h1>
                <img src={price.icon} alt="" />
                <p className="description">{price.description}</p>
                <h2 className="price-discount">{price.discount}</h2>
                <button className="btn price-btn button">Try Now</button>
            </div>
        </div>
    );
};

export default PricingDetail;