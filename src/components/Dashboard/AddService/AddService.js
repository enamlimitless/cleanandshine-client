import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
// import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const serviceData = {
            title: data.title,
            description: data.description,
            imgUrl: imgUrl
        };
        const url = 'https://quiet-taiga-29943.herokuapp.com/addService'
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(serviceData)
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
    console.log(watch, errors)
    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <h3 className="pb-2 display-2 text-primary">Welcome To Dashboard</h3>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-lg-6">
                        <input className="form-control mb-4" {...register("title")} placeholder="Add Service Title"/>
                        <label htmlFor="file">Please Upload a Flaticon svg Image For Interactive Same Look</label>
                        <input className="form-control mb-5" name="file" type="file" onChange={handleImageUpload} {...register} placeholder="Add Service Image"/>
                        <textarea className="form-control my-4"  {...register("description", { required: true })} cols="10" rows="5" placeholder="Add About Service Detail"></textarea>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input className="btn style-btn" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;