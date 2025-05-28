import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const ConfirmedBooking = () => {
    const location = useLocation();

    useEffect(() => {
        const msg = location.state?.successMessage;
        if(msg){
            toast.success(msg);
        }
    }, [location]);

    return(
        <main className="confirmation" aria-labelledby="confirmed-heading">
            <ToastContainer position="top-center" />
            <h1 id="confirmed-heading">Booking Confirmed 🎉</h1>
            <p>Thank you for your reservation. See you soon!</p>
        </main>
    );
};

export default ConfirmedBooking;