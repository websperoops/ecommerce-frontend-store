import React from 'react';

const OrderTableMobile = ({ data }) => {
  return (
    <div className="bg-white divide-y divide-gray-100 text-serif text-sm">
      {data?.cart?.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between px-1 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
            <div
              scope="col"
              className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
            >
              Sr.
            </div>
            <div className='px-6 py-2'>{i + 1}{' '}</div>
          </div>
          <div className="flex justify-between flex-wrap px-1 py-1 whitespace-nowrap font-normal text-gray-500">
            <div
              scope="col"
              className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-left"
            >
              Product Name
            </div>
            <div className='px-6 py-2'>
              <p className='whitespace-normal'>{item.title}</p>
            </div>
          </div>
          <div className="flex justify-between px-1 py-1 whitespace-nowrap font-bold text-center">
            <div
              scope="col"
              className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
            >
              Quantity
            </div>
            <div className='px-6 py-2'>{item.quantity}</div>
          </div>
          <div className="flex justify-between px-1 py-1 whitespace-nowrap font-bold text-center">
            <div
              scope="col"
              className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-center"
            >
              Item Price
            </div>
            <div className='px-6 py-2'>C${item.price}.00</div>
          </div>
          <div className="flex justify-between px-1 py-1 whitespace-nowrap text-right font-bold text-red-500">
            <div
              scope="col"
              className="font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider text-right"
            >
              Amount
            </div>
            <div className='px-6 py-2'>C${item.itemTotal}.00</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderTableMobile;
