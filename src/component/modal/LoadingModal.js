import React from 'react';
import MainModal from '@component/modal/MainModal';
import Loading from '@component/preloader/Loading';

const LoadingModal = ({ modalOpen, setModalOpen }) => {
  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <Loading />
      </div>
    </MainModal>
  );
};

export default React.memo(LoadingModal);