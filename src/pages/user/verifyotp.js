import Common from '@component/login/Common';
import { ToastContainer } from 'react-toastify';

const VerifyOTP = () => {
  return (
    <>
      <div className="overflow-hidden bg-white mx-auto w-50">
        <div className="text-center mb-6">
          <a className="text-3xl font-bold font-serif">Verify OTP</a>
          <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
            Please check your mail, we have sent an OTP that expires in 24 hours.
          </p>
        </div>
        <div className='flex justify-center'>
          <Common onShowOTP={true} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default VerifyOTP;
