import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Services = () => {
    const services = useLoaderData();
    console.log(services);

   


    return (
        <div className=''>
           
       
        <h1>this is service</h1>
        </div>
    );
};

export default Services;