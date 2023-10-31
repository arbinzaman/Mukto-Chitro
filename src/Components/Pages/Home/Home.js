import React from 'react';
import Services from './Services';
import Service from './Service';
import Slider from './Slider';
import HighLightSection from './HighLightSection';
import Gallery from './Gallery';
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../../Hooks/UseTitle';

const Home = () => {
    const homeServices = useLoaderData();
    // console.log(homeServices);
    UseTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <HighLightSection></HighLightSection>
            <Gallery></Gallery>
            {/* <Services></Services> */}
            <div className='grid md:grid-cols-3 gap-3 my-20' >
                {
                    homeServices.map(homeService => <Service
                        key={homeService._id}
                        homeService={homeService}
                    ></Service>

                    )
                }

            </div>
            <div className='text-center pb-10'>
                <Link to='/allevent'><button className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg">See All</button></Link>

            </div>

        </div>
    );
};

export default Home;