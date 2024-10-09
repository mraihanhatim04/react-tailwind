import { Link } from "react-router-dom";

import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
  return (
    <>
      <AuthLayouts title="Login">
        <FormLogin />
        <p className="mt-5 text-md text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-blue-500 underline">
            Register
          </Link>
        </p>
      </AuthLayouts>
    </>
  );
};

export default LoginPage;
