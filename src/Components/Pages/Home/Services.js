import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../Hooks/UseTitle';
import ServicePage from './ServicePage';


const Services = () => {
    UseTitle("Service")
    const services = useLoaderData();
    console.log(services);




    return (
        <div className='grid md:grid-cols-3 gap-3 my-20' >
            {
                services.map(service => <ServicePage

                    key={service._id}
                    service={service}
                ></ServicePage>

                )
            }

        </div>
    );
};

export default Services;