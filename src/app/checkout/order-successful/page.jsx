'use client'

import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { appContext } from "@/contexts/AppContext";

const OrderSuccess = () => {
  const router = useRouter();

  const { order } = useContext(appContext);

  useEffect(() => {
    if (!order.status)router.replace('/cart');
  }, [order])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-xl border-2 border-green-500 p-10 max-w-sm mx-auto font-sans shadow-sm mt-15">

     
      <div className="relative flex items-center justify-center w-28 h-28 mb-6">
        
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping" />

       
        <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 border-green-500 bg-green-50">
          
          <svg
            className="w-12 h-12 text-green-500"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <style>{`
              .check-path {
                stroke-dasharray: 60;
                stroke-dashoffset: 60;
                animation: drawCheck 0.6s ease-out 0.3s forwards;
              }
              @keyframes drawCheck {
                to { stroke-dashoffset: 0; }
              }
            `}</style>
            <path
              className="check-path"
              d="M10 26 L21 37 L42 16"
              stroke="#22c55e"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

     
      <h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">
        Order Successful!
      </h2>
      <p className="text-sm text-gray-400 text-center leading-relaxed">
        Your order has been placed.<br />We'll notify you once it's on the way.
      </p>

      
      <div className="w-full border-t border-gray-200 my-6" />

      <button className="w-full py-3 rounded-lg bg-green-500 text-white text-sm font-semibold tracking-wide hover:bg-green-600 active:scale-95 transition-all duration-150" onClick={()=>router.replace('/')}>
        Track Your Order
      </button>
      <button className="mt-3 text-sm text-gray-400 hover:text-gray-600 transition-colors" onClick={() => router.replace('/')}>
        Continue Shopping →
      </button>
    </div>
  );
};

export default OrderSuccess;