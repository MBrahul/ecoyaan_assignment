import React from 'react'

const OrderItem = ({ item }) => {
    return (
        <div className='w-[100%] h-fit py-8 flex gap-5'>
            {/* image div  */}
            <div className='min-w-[100px] w-[100px] cursor-pointer overflow-hidden rounded'>
                <img src={item?.image} alt="" />
            </div>

            {/* info div  */}
            <div>
                {/* item title  */}
                <div className='text-base font-medium tracking-normal text-zinc-800 max-md:max-w-full cursor-pointer'>
                    <p>{item?.product_name}</p>
                </div>
                {/* item price  */}
                <div className='mt-3 font-semibold flex gap-3 items-center'>
                    <p>₹{item?.product_price - Math.floor((item?.product_price * item?.discount) / 100)} * {item?.quantity}</p>
                    
                </div>

            </div>
        </div>
    )
}

export default OrderItem
