import React from 'react'

const OrderItem = ({ item }) => {
  const discountedPrice = item?.product_price - Math.floor((item?.product_price * item?.discount) / 100);

  return (
    <div className="w-full bg-white rounded-2xl border border-stone-100 p-4 flex flex-row gap-4 hover:shadow-sm transition-shadow duration-200">

      <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-stone-50 cursor-pointer self-center">
        <img
          src={item?.image}
          alt={item?.product_name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center flex-1 min-w-0 gap-2">

        <p className="text-sm font-semibold text-stone-800 leading-snug cursor-pointer line-clamp-2">
          {item?.product_name}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-base font-bold text-stone-900">₹{discountedPrice}</span>
          <span className="text-stone-300 text-sm">×</span>
          <span className="text-xs font-semibold text-stone-500 bg-stone-50 border border-stone-100 px-2.5 py-0.5 rounded-lg">
            Qty: {item?.quantity}
          </span>
          <span className="text-xs font-semibold text-stone-400 ml-auto">
            = ₹{discountedPrice * item?.quantity}
          </span>
        </div>

      </div>

    </div>
  );
}

export default OrderItem