const CartItem = ({ item }) => {
    return (
        <div className='w-[100%] h-fit py-8 flex lg:flex-row flex-col gap-5'>

            {/* image div  */}
            <div className='min-w-[150px] w-[150px] self-center cursor-pointer overflow-hidden rounded'>
                <img src={item?.image} alt="" />
            </div>

            {/* info div  */}
            <div>
                {/* item title  */}
                <div className='text-base font-medium tracking-normal text-zinc-800 max-md:max-w-full cursor-pointer'>
                    <p>{item?.product_name}</p>
                </div>
                {/* item description */}
                <div className='mt-3 text-xs tracking-normal text-ellipsis text-neutral-500 w-[100%]'>
                    <p>{item?.desc}</p>
                </div>
                {/* item price  */}
                <div className='mt-3 font-semibold flex gap-3 items-center'>
                    <p>₹{item?.product_price - Math.floor((item?.product_price * item?.discount) / 100)}</p>
                    <p className='font-normal text-xs text-gray-600 line-through'>₹{item.product_price}</p>
                    <p className="font-normal text-xs text-green-600">You save ₹{Math.floor((item?.product_price * item?.discount) / 100)}</p>
                </div>

                {/* quantiy div  */}
                <div className="mt-3 font-normal text-[15px] text-gray-500">
                    <p>Qty:{item?.quantity}</p>
                </div>


            </div>
        </div>
    )
}

export default CartItem;
