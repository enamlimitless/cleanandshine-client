import React from 'react';
import './TestimonialDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const TestimonialDetail = ({ testimonial }) => {
    console.log('hello',testimonial)
    return (
        <div className="col-lg-4 mt-4">
            <div className="testimonial">
                <blockquote className="client-text">{testimonial.blockquote}</blockquote>
                <div className="my-3 h3">
                    <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>
                    <span className="text-warning"><FontAwesomeIcon icon={faStar} /></span>

                </div>
                <div className="d-flex align-items-center">
                    <div className="testimonial-img">
                        <img className="img-fluid" src={testimonial.imgUrl} alt="" />
                    </div>
                    <div>
                        <h4 className="client-name">{testimonial.name}</h4>
                        <p className="client-role">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;