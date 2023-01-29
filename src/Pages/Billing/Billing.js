import React from 'react';
import AddBillModal from './AddBillModal';

const Billing = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex flex-row justify-between p-5'>
                <div className='flex items-center space-x-5'>
                    <label htmlFor="">Billings</label>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                </div>
                <label htmlFor="booking-modal" className='btn hover:bg-primary hover:text-black'>Add New Bill</label>
            </div>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <AddBillModal></AddBillModal>
        </div>
    );
};

export default Billing;