import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
  return (
    <>
      <AuthLayouts title="Registration" type="register">
        <FormRegister />
      </AuthLayouts>
    </>
  );
};

export default RegisterPage;
