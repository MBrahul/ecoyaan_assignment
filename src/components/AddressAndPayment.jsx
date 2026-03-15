"use client"

import React, { Activity, useContext, useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import AddressFormModal from './AddressFormModal';
import AddressCard from './AddressCard';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { appContext } from '@/contexts/AppContext';



const AddressAndPayment = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const { order, setOrder } = useContext(appContext);

    const handleShowDiv = (e) => {
        setVisible((prevState) => !prevState);
    }

    const handleEditAddress = (e)=>{
        setIsOpen(true);
    }

    return (
        <div className='h-fit md:w-[50%] w-full shadow rounded flex flex-col gap-2 transition-transform duration-200 order-2 md:order-1'>
            <div onClick={(e) => { handleShowDiv(e) }} className='flex justify-between font-semibold text-xl cursor-pointer border-b border-gray-200 p-5'>
                <h1>Select Address</h1>
                <div className={`transition-transform duration-200 ${visible ? "rotate-180" : "rotate-0"}`}><MdKeyboardArrowDown size={30} /></div>
            </div>
            <div className={`transition-transform duration-200 ${visible ? 'p-5' : ''}`}>
                <Activity mode={visible ? "visible" : "hidden"}>

                    <Button name="+ Add New Address" handleClick={() => setIsOpen((prevState) => !prevState)} disabled={false} />

                </Activity>
            </div>

            <div className='p-5 flex flex-col gap-2'>
                <div className='flex gap-1 justify-start items-center'>
                    <p className='text-green-700'><IoLocationSharp size={20} /></p>
                    <p className='text-xl font-semibold'>Delivering to</p>
                </div>
                {order.address && <AddressCard address={order.address} handleEditAddress={handleEditAddress} />}
                {!order.address && <p className='text-gray-400 self-center'>No Address Selected</p>}
            </div>
            {/* payment div  */}
            {/* <div className='p-5 shadow'>
                <h1>Payment Methods : Cash on Delivery</h1>
            </div> */}

            <div className='self-end p-5'>
                <Button name="Proceed To Pay" disabled={!order.address || !order.products} handleClick={() => {
                    setOrder({...order, status:true});
                    router.replace('/checkout/order-successful')
                }} />
            </div>
            <div className='py-5 self-center'>
                <p className='text-gray-500 text-xs'>🔒100% secure payments • UPI • Cards • NetBanking</p>
            </div>

            <AddressFormModal isOpen={isOpen} onClose={() => setIsOpen((prevState) => !prevState)} prevAddress = {order?.address} />

        </div>
    )
}

export default AddressAndPayment
