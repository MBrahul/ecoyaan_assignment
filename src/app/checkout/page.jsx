'use client'

import AddressAndPayment from '@/components/AddressAndPayment';
import OrderSummary from '@/components/OrderSummary';
import { appContext } from '@/contexts/AppContext';
import React, { useContext, useEffect} from 'react'
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();
  const {order} = useContext(appContext);

  useEffect(() => {
    if (!order.products) router.replace('/');
  }, [order]);

  return (
    <div className='w-[100%] h-fit lg:px-[10%] px-5 py-20 flex md:flex-row flex-col gap-5 justify-center'>
      <AddressAndPayment />
      <OrderSummary />
    </div>
  )
}

export default page;
