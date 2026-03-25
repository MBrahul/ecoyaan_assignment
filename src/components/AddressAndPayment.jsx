"use client"
import React, { useContext, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import AddressFormModal from './AddressFormModal';
import AddressCard from './AddressCard';
import { useRouter } from 'next/navigation';
import { appContext } from '@/contexts/AppContext';

const AddressAndPayment = () => {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [prevAddress, setPrevAddress] = useState(null);
    const { order, setOrder, addresses, setAddresses } = useContext(appContext);

    const handleShowDiv = (e) => {
        setVisible((prevState) => !prevState);
    }

    const handleEditAddress = (e) => {
        setIsOpen(true);
    }

    return (
        <div className="h-fit md:w-[50%] w-full bg-white rounded-2xl border border-stone-100 shadow-sm flex flex-col order-2 md:order-1 overflow-hidden">

            <div
                onClick={handleShowDiv}
                className="flex justify-between items-center px-5 py-4 border-b border-stone-100 cursor-pointer hover:bg-stone-50 transition-colors duration-150"
            >
                <div>
                    <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-0.5">Delivery</p>
                    <h2 className="text-lg font-semibold text-stone-800">Select Address</h2>
                </div>
                <div className={`text-stone-400 transition-transform duration-200 ${visible ? "rotate-180" : "rotate-0"}`}>
                    <MdKeyboardArrowDown size={26} />
                </div>
            </div>

            <div className={`transition-all duration-200 ${visible ? 'px-4 pt-4 pb-3' : 'h-0 overflow-hidden'}`}>
                <div className="flex flex-col gap-2 mb-4 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-300 scrollbar-track-transparent">
                    {addresses?.map((address, ind) => (
                        <AddressCard
                            key={ind}
                            address={address}
                            handleEditAddress={handleEditAddress}
                            setPrevAddress={setPrevAddress}
                            isActionAllowed={true}
                        />
                    ))}
                </div>
                <button
                    onClick={() => {
                        setPrevAddress(null);
                        setIsOpen((prevState) => !prevState);
                    }}
                    className="w-full border border-dashed border-stone-300 text-stone-500 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl py-3 text-sm font-semibold transition-all duration-200"
                >
                    + Add New Address
                </button>
            </div>

            <div className="px-5 py-4 border-t border-stone-100 flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                    <IoLocationSharp size={18} className="text-emerald-600 shrink-0" />
                    <p className="text-sm font-semibold text-stone-700 tracking-wide uppercase text-xs">Delivering to</p>
                </div>
                {order.address
                    ? <AddressCard address={order.address} handleEditAddress={handleEditAddress} setPrevAddress={setPrevAddress} isActionAllowed={false} />
                    : <p className="text-sm text-stone-400 text-center py-4 bg-stone-50 rounded-xl border border-dashed border-stone-200">No address selected yet</p>
                }
            </div>

            <div className="mt-auto px-5 py-4 border-t border-stone-100 flex flex-col gap-3">
                <p className="text-xs text-stone-400 text-center">🔒 100% secure payments • UPI • Cards • NetBanking</p>
            </div>

            {isOpen && (
                <AddressFormModal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen((prevState) => !prevState);
                        setPrevAddress(null);
                    }}
                    prevAddress={prevAddress}
                />
            )}

        </div>
    );
}

export default AddressAndPayment