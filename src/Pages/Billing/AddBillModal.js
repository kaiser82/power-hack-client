import React from 'react';
import { toast } from 'react-hot-toast';

const AddBillModal = () => {

    const handleAddBill = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const paidAmount = form.paidAmount.value;

        const addBillInfo = {
            name,
            email,
            phone,
            paidAmount
        }

        fetch('https://used-laptop-resale-server-kaiser82.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBillInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('You have added the bill successfully.')
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <>
            < input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-secondary btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex items-center justify-center'>
                        <h2 className='text-xl'>Add New Bill</h2>
                    </div>
                    <form onSubmit={handleAddBill} className='space-y-5 mt-5'>
                        <input type="text" name='name' placeholder='Full Name' className="input input-bordered w-full " />
                        <input type="email" name='email' placeholder='Email' className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <input type="text" name='paidAmount' placeholder="Paid Amount" className="input input-bordered w-full " />
                        <input type="submit" className='btn btn-primary w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddBillModal;