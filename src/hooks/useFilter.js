import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

const useFilter = (data = []) => {
  const [sortedField, setSortedField] = useState('');
  const [pending, setPending] = useState([]);
  const [processing, setProcessing] = useState([]);
  const [delivered, setDelivered] = useState([]);
  const router = useRouter();

  const productData = useMemo(() => {
    let services = data;
    //filter user order
    if (router.pathname === '/user/dashboard' && services.length > 0) {
      const orderPending = services.filter(
        (statusP) => statusP.status === 'Pending'
      );
      setPending(orderPending);

      const orderProcessing = services.filter(
        (statusO) => statusO.status === 'Processing'
      );
      setProcessing(orderProcessing);

      const orderDelivered = services.filter(
        (statusD) => statusD.status === 'Delivered'
      );
      setDelivered(orderDelivered);
    }

    //filter discounted product data
    if (router.pathname === '/' && services.length > 0) {
      services = services.filter((product) => product.discount >= 5);
    }

    //service sorting with low and high price
    if (sortedField === 'Low' && services.length > 0) {
      services = services.sort((a, b) => a.price < b.price && -1);
    }
    if (sortedField === 'High' && services.length > 0) {
      services = services.sort((a, b) => a.price > b.price && -1);
    }

    //filter based on status  
    services = services.filter((product) => product.status === "Show")

    return services;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedField, data]);

  return {
    productData,
    pending,
    processing,
    delivered,
    setSortedField,
  };
};

export default useFilter;
