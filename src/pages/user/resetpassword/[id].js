import Common from "@component/login/Common";
import { ToastContainer } from "react-toastify";

const ResetPassword = () => {
  return (
    <>
      <div className="overflow-hidden bg-white mx-auto w-50">
        <div className="text-center mb-6">
          <a className="text-3xl font-bold font-serif">Reset Password</a>
        </div>
        <div className="flex justify-center">
          <Common onShowReset={true} />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ResetPassword;