import Link from 'next/link';
import Common from '@component/login/Common';

const ForgotPassword = ({ setModalOpen, showLogin, showRegister, showForgotPassword, handleShow }) => {
  return (
    <>
      <div className="overflow-hidden bg-white mx-auto">
        <div className="text-center mb-6">
          <a className="text-3xl font-bold font-serif">Forgot Password</a>
        </div>
        <Common setModalOpen={setModalOpen} handleShow={handleShow} showLogin={showLogin} showRegister={showRegister} showForgotPassword={showForgotPassword} />
        <div className="text-center text-sm text-gray-900 mt-4">
          <div className="text-gray-500 mt-2.5">
            Already have a account ?
            <button
              onClick={() => handleShow("Login")}
              className="text-gray-800 hover:text-green-500 font-bold mx-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
