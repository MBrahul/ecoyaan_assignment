'use client'

import AddressAndPayment from '@/components/AddressAndPayment';
import OrderSummary from '@/components/OrderSummary';
import { appContext } from '@/contexts/AppContext';
import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import ActionBar from '@/components/ActionBar';

const page = () => {

  const router = useRouter();
  const { order,setOrder} = useContext(appContext);

  useEffect(() => {
    if (!order.products) router.replace('/');
  }, [order]);

  return (
    <div className='w-[100%] h-fit lg:px-[10%] px-5 py-5 flex flex-col mb-10'>
      <ActionBar backDisable={false} nextDisable={(!order.address || !order.products)} nextConfig={{
        name: "Proceed To Pay", handleClick: () => {
          setOrder({ ...order, status: true });
          router.replace('/checkout/order-successful');
        }
      }} />
      <div className='flex md:flex-row flex-col gap-5 justify-center'>
        <AddressAndPayment />
        <OrderSummary />
      </div>
    </div>
  )
}

export default page;
