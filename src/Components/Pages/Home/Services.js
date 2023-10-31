import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../Hooks/UseTitle';
import ServicePage from './ServicePage';


const Services = () => {
    UseTitle("Service")
    const services = useLoaderData();
    return (
        <div >
            <div className='grid md:grid-cols-3 gap-3 my-20'>
                {     services.map(service => <ServicePage

                        key={service._id}
                        service={service}
                    ></ServicePage>

                    )
                }
               
            </div>
            {/* <AddService></AddService> */}
        </div>
    );
};

export default Services;