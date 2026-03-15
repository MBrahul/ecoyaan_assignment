'use client'

import React, { useContext } from 'react'
import OrderItem from './OrderItem'
import { appContext } from '@/contexts/AppContext'

const OrderSummary = () => {

    const {order , setOrder} = useContext(appContext);


    return (
        <div className='md:w-[40%] w-full shadow rounded p-5 flex flex-col gap-5 flex-1 order-1 md:order-2'>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-normal text-gray-800 min-w-max my-2">Order Summary</h1>
            {/* orders div  */}
            <div className='h-[400px] overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-thumb-green-300 scrollbar-track-transparent'>
                {order.products?.map((product, key) => (<OrderItem key={key} item={product} />))}
            </div>

            {/* summary div  */}
            <br />
            <div className="w-[100%] h-fit border-t border-b border-gray-300 border-gray-300 flex flex-col p-5 gap-3 text-gray-600">
                <div className="w-full flex justify-between text-xl">
                    <p className="">Subtotal : </p>
                    <p>₹{order.subTotal}</p>
                </div>
                <div className="w-full flex justify-between text-xl">
                    <p className="">Shipping : </p>
                    <p className='text-green-600'>Free</p>
                </div>
            </div>

            <div className='w-full flex justify-between font-semibold text-xl p-5'>
                <div>
                    <p>You Pay</p>
                </div>
                <div>
                    <p>₹{order.subTotal+order.tax}</p>
                    <p className='text-gray-600 text-xs'>Including ₹{order.tax} in taxes</p>
                </div>
                
            </div>

        </div>
    )
}

export default OrderSummary
