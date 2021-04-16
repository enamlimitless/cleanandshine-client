import React from 'react';
import './TestimonialDetail.css';
const TestimonialDetail = ({ testimonial }) => {
    console.log(testimonial)
    return (
        <div className="col-lg-4 mt-4">
            <div className="testimonial">
                <blockquote className="client-text">{testimonial.blockquote}</blockquote>
                <div className="d-flex align-items-center">
                    <div className="testimonial-img">
                        <img className="img-fluid" src={testimonial.img} alt="" />
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