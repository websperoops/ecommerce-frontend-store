import React from 'react';
import { useTimer } from 'react-timer-hook';

const OfferTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });

  return (
    <>
      <span className="flex items-center justify-center bg-green-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
        {days}
      </span>
      :
      <span className="flex items-center justify-center bg-green-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
        {hours}
      </span>
      :
      <span className="flex items-center justify-center bg-green-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
        {minutes}
      </span>
      :
      <span className="flex items-center justify-center bg-green-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">
        {seconds}
      </span>
    </>
  );
};

export default React.memo(OfferTimer);
