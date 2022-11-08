import React from 'react';

const Service = ({homeService}) => {
    // console.log(service.description);
    // console.log(service);
    
    const {title,description,img}=homeService;
    // console.log(title);
    return (
        <div>
        

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description.length > 100 ? description.slice(0, 150) + "...": description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;