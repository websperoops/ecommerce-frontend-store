import { useEffect, useState } from 'react';
import LoadingModal from '@component/modal/LoadingModal';
import Layout from '@layout/Layout';

const HomePage = () => {
  const [modalOpen2, setModalOpen2] = useState(true);
  useEffect(() => {
    window.location.href = "/home";
  }, [])

  return (
    <>
      <Layout>
        <LoadingModal modalOpen={modalOpen2} setModalOpen={setModalOpen2} />
      </Layout>
    </>
  );
};

export default HomePage;