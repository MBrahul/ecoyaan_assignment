const CartItem = ({ item }) => {
  const discountedPrice = item?.product_price - Math.floor((item?.product_price * item?.discount) / 100);
  const savedAmount = Math.floor((item?.product_price * item?.discount) / 100);

  return (
    <div className="w-full bg-white rounded-2xl border border-stone-100 p-4 flex flex-row gap-4 hover:shadow-sm transition-shadow duration-200">

      <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden bg-stone-50 cursor-pointer self-center">
        <img
          src={item?.image}
          alt={item?.product_name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">

        <div>
          <p className="text-sm font-semibold text-stone-800 leading-snug cursor-pointer line-clamp-2">
            {item?.product_name}
          </p>
          <p className="text-xs text-stone-400 mt-1 leading-relaxed line-clamp-2">
            {item?.desc}
          </p>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="text-base font-bold text-stone-900">₹{discountedPrice}</span>
          <span className="text-xs text-stone-400 line-through font-normal">₹{item?.product_price}</span>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            −₹{savedAmount}
          </span>
        </div>

        <div className="mt-2">
          <span className="text-xs text-stone-400 font-medium bg-stone-50 border border-stone-100 px-2.5 py-1 rounded-lg">
            Qty: {item?.quantity}
          </span>
        </div>

      </div>
    </div>
  );
};

export default CartItem;