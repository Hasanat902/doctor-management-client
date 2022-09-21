import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect( ()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])

    return (
        <div>
            <h2 className='text-xl text-center text-secondary font-bold'>Available Appointments on {format(date, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointments;