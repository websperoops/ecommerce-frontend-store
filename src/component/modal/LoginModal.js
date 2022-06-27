import React, { useState } from 'react';
import Login from '@component/login/Login';
import MainModal from '@component/modal/MainModal';
import Register from '@component/login/Register';
import ForgotPassword from '@component/login/ForgotPassword';
import { IoClose } from 'react-icons/io5';

const LoginModal = ({ modalOpen, setModalOpen }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setForgotPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleShow = (page) => {
    if (page === "Login") {
      setShowLogin(true);
      setShowRegister(false);
      setForgotPassword(false);
    } else if (page === "Register") {
      setShowRegister(true);
      setShowLogin(false);
      setForgotPassword(false);
    } else if (page === "ForgotPassword") {
      setForgotPassword(true);
      setShowRegister(false);
      setShowLogin(false);
    }
  }

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block w-full max-w-lg p-10 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
        <button
          onClick={() => setModalOpen(false)}
          type="button"
          className="closeButton inline-flex justify-center px-2 py-2 text-base font-medium text-red-500 bg-white border border-transparent rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
        >
          <IoClose />
        </button>
        {showRegister && (
          <Register showLogin={showLogin} showRegister={showRegister} handleShow={handleShow} showForgotPassword={showForgotPassword} onShowLogin={setShowLogin} setModalOpen={setModalOpen} />
        )}
        {showLogin && (
          <Login showLogin={showLogin} showRegister={showRegister} handleShow={handleShow} showForgotPassword={showForgotPassword} onShowRegister={setShowRegister} onShowForgot={setForgotPassword} setModalOpen={setModalOpen} />
        )}
        {showForgotPassword && (
          <ForgotPassword showLogin={showLogin} showRegister={showRegister} handleShow={handleShow} showForgotPassword={showForgotPassword} onShowLogin={setShowLogin} setModalOpen={setModalOpen} />
        )}
      </div>
    </MainModal>
  );
};

export default React.memo(LoginModal);
