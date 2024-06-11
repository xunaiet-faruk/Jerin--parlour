import { useEffect, useState } from 'react';
import Usecard from '../../../Hooks/Usecard';
import UseAxios from '../../../Hooks/Axiossecure/UseAxios';
import UseServices from '../../../Hooks/Axiossecure/UseServices';
import Swal from 'sweetalert2';

const Makeup = () => {
    const [refetch, services] = UseServices();
    const [meakup, setMeakup] = useState([]);
    const axiosSecure = UseAxios();

    useEffect(() => {
        fetch('./Meakup.json')
            .then(res => res.json())
            .then(data => setMeakup(data));
    }, []);

    const handleServices = (item) => {
        axiosSecure.post(`/Services`, item)
            .then(res => {
                console.log(res.data);
                if (res.data.acknowledged == true){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Booking Is Received",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            {meakup?.map((item, index) =>
                <div key={index} className="card w-96 glass hover:shadow-xl">
                    <figure><img className='h-64 object-cover w-full' src={item?.image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item?.title}</h2>
                        <p className='text-gray-500'>{item?.description}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2'>
                                <h1 className='text-pink-300 font-bold'>${item?.price}</h1>
                                <h1 className='line-through text-gray-300'>${item?.discount}</h1>
                            </div>
                            <div>
                                <button onClick={() => handleServices(item)} type="button" className="relative font-semibold  inline-block overflow-hidden border-[#F63E7B] px-7 py-1 rounded-full shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#F63E7B] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#F63E7B] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Makeup;
