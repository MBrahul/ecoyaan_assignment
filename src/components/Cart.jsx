"use client";

import CartItem from "@/components/CartItem"
import { useRouter } from "next/navigation";
import { appContext } from "@/contexts/AppContext";
import { useContext, useEffect } from "react";


const Cart = ({ cart }) => {

    const { order, setOrder } = useContext(appContext);

    const router = useRouter();

    const handleProceed = () => {
        router.push('/checkout')
    }

    useEffect(() => {

        setOrder({ ...order, products: cart.products, status: false, subTotal: cart.subTotal, tax: 128, shippingFee: cart.shippingFee});

    }, []);

    return (
        <div className='w-[100%] h-fit lg:p-24 p-5 flex flex-col gap-5'>
            <h1 className="text-xl md:text-2xl font-extrabold tracking-normal text-gray-800 min-w-max">Your Cart</h1>

            <div className="mt-4 mb-4">
                <div className="bg-emerald-50 border border-emerald-100 rounded-xl py-4 px-6 flex items-center gap-4 shadow-sm transition-all hover:shadow-md">
                    <div className="text-emerald-700 opacity-70 w-8 h-8">
                        <img className="w-[80px]" src="icon.svg" alt="" />
                    </div>
                    <div>
                        <p className="text-emerald-900 text-lg font-semibold tracking-tight m-0">
                            You saved ₹{cart.totalSavings} in total
                        </p>
                        <p className="text-emerald-700 text-sm font-medium m-0 opacity-80">​Great choice! You're making sustainable shopping more rewarding.​</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col gap-2 px-4 py-4 mt-6 text-base tracking-normal text-primary-text bg-sky-50">
                <div className="py-2 my-auto font-bold">
                    List of added items
                </div>
            </div>
            <div>
                {
                    cart.products?.map((product, key) => (<CartItem key={key} item={product} />))
                }
            </div>
            {/* cart summary  */}
            <div className="w-[100%] h-fit border-t border-gray-300 flex flex-col p-5 gap-3">
                <div className="w-full flex justify-between text-xl">
                    <p className="text-gray-600">Total Items : </p>
                    <p>{cart.totalProducts}</p>
                </div>
                <div className="w-full flex justify-between text-xl">
                    <p className="text-gray-600">Subtotal : </p>
                    <p>₹{cart.subTotal}</p>
                </div>
                <div className="w-full flex justify-between font-semibold text-gray-600">
                    <p className="">Delivery Fee : </p>
                    <p className={`${cart.shippingFee?"":"text-green-600"}`}>{cart.shippingFee?('₹'+cart.shippingFee):('Free Delivery')}</p>
                </div>
                <div className="border-t border-gray-300 w-full flex justify-between text-xl py-4">
                    <p className="text-gray-600">Grandtotal : </p>
                    <p>₹{cart.subTotal + cart.shippingFee}</p>
                </div>
            </div>

            <button className="bg-green-700 w-fit h-fit text-white cursor-pointer px-5 py-2 rounded font-semibold self-end" onClick={handleProceed}>
                Proceed To Checkout
            </button>

        </div>
    )
}

export default Cart;
