'use client'
import React, { useContext } from 'react'
import OrderItem from './OrderItem'
import { appContext } from '@/contexts/AppContext'

const OrderSummary = () => {
  const { order, setOrder } = useContext(appContext);

  return (
    <div className="md:w-[40%] w-full bg-white rounded-2xl border border-stone-100 shadow-sm flex flex-col order-1 md:order-2 overflow-hidden">

      <div className="px-5 pt-6 pb-4 border-b border-stone-100">
        <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-1">Review</p>
        <h1 className="text-2xl md:text-3xl font-serif font-normal text-stone-900 tracking-tight">Order Summary</h1>
      </div>

      <div className="h-[400px] overflow-y-auto flex flex-col gap-2 px-4 py-4 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-green-300 scrollbar-track-transparent">
        {order.products?.map((product, key) => (
          <OrderItem key={key} item={product} />
        ))}
      </div>

      <div className="px-5 py-4 border-t border-stone-100 flex flex-col gap-0 divide-y divide-stone-50">
        <div className="flex justify-between items-center py-3">
          <span className="text-sm text-stone-500">Subtotal</span>
          <span className="text-sm font-semibold text-stone-800">₹{order.subTotal}</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-sm text-stone-500">Shipping</span>
          {order.shippingFee === 0 ? (
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full tracking-wide uppercase">Free</span>
          ) : (
            <span className="text-sm font-semibold text-stone-800">₹{order.shippingFee}</span>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center px-5 py-4 bg-stone-900">
        <div>
          <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase">You Pay</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-serif font-normal text-white tracking-tight">₹{order.subTotal + order.tax + order.shippingFee}</p>
          <p className="text-xs text-stone-500 mt-0.5">Incl. ₹{order.tax} in taxes</p>
        </div>
      </div>

    </div>
  );
}

export default OrderSummary