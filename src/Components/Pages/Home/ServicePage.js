import React from 'react';
import { Link } from 'react-router-dom';

const ServicePage = ({service}) => {
    // console.log(service);
    const {title,description,img,_id}=service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.length > 100 ? description.slice(0, 150) + "...": description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicePage;