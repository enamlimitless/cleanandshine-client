import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddTestimonial = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            blockquote: data.blockquote,
            role: data.role,
            imgUrl: imgUrl
        };
        const url = 'https://quiet-taiga-29943.herokuapp.com/addTestimonial'
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side respond'))
        console.log(data)
    }

    const handleImageUpload = e => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'e65119c9211ea96fb4e3a5277850b716')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(watch,errors)
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-lg-8">
                        <input className="form-control" {...register("name")} />
                        <input className="form-control" {...register("role")} />
                        <input className="form-control" name="file" type="file" onChange={handleImageUpload} {...register} />
                        <textarea className="form-control"  {...register("blockquote", { required: true })} cols="10" rows="5"></textarea>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTestimonial;