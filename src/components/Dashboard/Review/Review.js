import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import AddTestimonial from '../AddTestimonial/AddTestimonial';
import ReviewSidebar from '../ReviewSidebar/ReviewSidebar';


const Review = () => {
    return (
        <div>
            <div className="row">
                <Navbar></Navbar>
                <div className="col-lg-3 bg-dark">
                    <ReviewSidebar></ReviewSidebar>
                </div>
                <div className="col-lg-9 bg-warning">
                    <AddTestimonial></AddTestimonial>
                </div>
            </div>
        </div>
    );
};

export default Review;