import React from 'react';
import Services from './Services';
import Service from './Service';
import Slider from './Slider';
import HighLightSection from './HighLightSection';
import Gallery from './Gallery';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const homeServices = useLoaderData();
    // console.log(homeServices);

    return (
        <div>
           <Slider></Slider>
           <HighLightSection></HighLightSection>
           <Gallery></Gallery>
           {/* <Services></Services> */}
           <div className='grid sm:grid-cols-3 gap-3 my-20' >
            {
                homeServices.map(homeService=><Service
                    key={homeService._id}
                    homeService={homeService}
                ></Service>
                    
                    )
            }

           </div>
         

        </div>
    );
};

export default Home;