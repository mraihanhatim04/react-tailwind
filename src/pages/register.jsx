import { Link } from "react-router-dom";

import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <>
      <AuthLayouts title="Registration">
        <FormRegister />
        <p className="mt-5 text-md text-center">
          Have an account?{" "}
          <Link to="/login" className="font-bold text-blue-500 underline">
            Login
          </Link>
        </p>
      </AuthLayouts>
    </>
  );
};

export default RegisterPage;
