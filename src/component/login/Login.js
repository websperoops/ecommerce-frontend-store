import Link from 'next/link';
import Common from '@component/login/Common';

const Login = ({ handleShow, setModalOpen, onShowForgot, showLogin, showRegister, showForgotPassword }) => {
  return (
    <>
      <div className="overflow-hidden bg-white mx-auto">
        <div className="text-center mb-6">
          <a className="text-3xl font-bold font-serif">Login</a>
          <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
            Login with your email and password
          </p>
        </div>

        <Common handleShow={handleShow} showLogin={showLogin} showRegister={showRegister} showForgotPassword={showForgotPassword} setModalOpen={setModalOpen} onShowForgot={onShowForgot} />
        <div className="text-center text-sm text-gray-900 mt-4">
          <div className="text-gray-500 mt-2.5">
            Not have a account ?
            <button
              onClick={() => handleShow("Register")}
              className="text-gray-800 hover:text-green-500 font-bold mx-2"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
