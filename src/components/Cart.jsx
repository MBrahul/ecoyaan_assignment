"use client";
import CartItem from "@/components/CartItem";
import { useRouter } from "next/navigation";
import { appContext } from "@/contexts/AppContext";
import { useContext, useEffect } from "react";
import ActionBar from "./ActionBar";

const Cart = ({ cart }) => {
    const { order, setOrder } = useContext(appContext);
    const router = useRouter();

    const handleProceed = () => {
        router.push("/checkout");
    };

    useEffect(() => {
        setOrder({
            ...order,
            products: cart.products,
            status: false,
            subTotal: cart.subTotal,
            tax: 128,
            shippingFee: cart.shippingFee,
        });
    }, []);


    return (
        <>

        
            <ActionBar showForward={true} backDisable={false} nextConfig = {{
                name:"Proceed to Checkout",
                handleClick:handleProceed
            }}/>


            <div className="w-full min-h-screen bg-stone-50 flex flex-col">

                <div className="bg-white px-5 pt-8 pb-5 border-b border-stone-100">
                    <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-1">Shopping</p>
                    <h1 className="text-3xl md:text-4xl font-serif font-normal text-stone-900 tracking-tight">Your Cart</h1>
                </div>

                <div className="px-4 mt-5">
                    <div className="bg-gradient-to-br from-emerald-50 to-lime-50 border border-emerald-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="shrink-0 w-11 h-11 bg-white/70 border border-emerald-100 rounded-xl flex items-center justify-center">
                            <img src="icon.svg" alt="" className="w-6 h-6 object-contain" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-bold text-emerald-800 tracking-tight">You saved ₹{cart.totalSavings} in total</p>
                            <p className="text-xs text-emerald-600 mt-0.5 leading-snug opacity-90">Great choice! You're making sustainable shopping more rewarding.</p>
                        </div>
                    </div>
                </div>

                {/* cart items list  */}

                <div className="px-4 mt-6">
                    <div className="flex items-center gap-3 pb-3">
                        <span className="text-xs font-bold tracking-widest text-stone-400 uppercase whitespace-nowrap">Added Items</span>
                        <div className="flex-1 h-px bg-stone-200" />
                    </div>

                    <div className="max-h-[50vh] h-fit overflow-y-auto flex flex-col gap-2 pr-1 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-300 scrollbar-track-transparent">
                        {cart.products?.map((product, key) => (
                            <CartItem key={key} item={product} />
                        ))}
                    </div>
                </div>

                {/* ordeer summary  */}

                <div className="px-4 mt-6">
                    <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                        <div className="px-5 py-4 border-b border-stone-50">
                            <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Order Summary</span>
                        </div>

                        <div className="px-5 divide-y divide-stone-50">
                            <div className="flex justify-between items-center py-3.5">
                                <span className="text-sm text-stone-500">Total Items</span>
                                <span className="text-sm font-semibold text-stone-800">{cart.totalProducts}</span>
                            </div>
                            <div className="flex justify-between items-center py-3.5">
                                <span className="text-sm text-stone-500">Subtotal</span>
                                <span className="text-sm font-semibold text-stone-800">₹{cart.subTotal}</span>
                            </div>
                            <div className="flex justify-between items-center py-3.5">
                                <span className="text-sm text-stone-500">Delivery Fee</span>
                                {cart.shippingFee ? (
                                    <span className="text-sm font-semibold text-stone-800">₹{cart.shippingFee}</span>
                                ) : (
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full tracking-wide uppercase">Free</span>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between items-center px-5 py-4 bg-stone-900">
                            <span className="text-xs font-semibold tracking-widest text-stone-400 uppercase">Grand Total</span>
                            <span className="text-2xl font-serif font-normal text-white tracking-tight">₹{cart.subTotal + cart.shippingFee}</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Cart;