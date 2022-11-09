
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../Hooks/UseTitle';
import ServicePage from './ServicePage';


const Services = () => {
    UseTitle("Service")
    const services = useLoaderData();
    // console.log(services);


    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const text = form.text.value;
        const userAddService =(name,text);
        console.log(userAddService);
    }



    return (
        <div >
            <div className='grid md:grid-cols-3 gap-3 my-20'>
                {
                    services.map(service => <ServicePage

                        key={service._id}
                        service={service}
                    ></ServicePage>

                    )
                }
            </div>



            <div className="flex flex-col  pb-10 mb-10 p-6 rounded-md sm:p-10 bg-base-300 text-black text-black">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Add A Custom Service</h1>
                    <p className="text-sm dark:text-gray-400">You Can Add Your Customize Service From Us.</p>
                </div>
                <form onSubmit={handleAddService} noValidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm">Field</label>
                            <input type="name" name="name" id="name" placeholder="Custom Field Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-base-300 text-black" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="text" className="text-sm">Text</label>
                                
                            </div>
                            <input type="text" name="password" id="text" placeholder="Describe Details" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-base-300 text-black" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Submit</button>
                        </div>
                        
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Services;