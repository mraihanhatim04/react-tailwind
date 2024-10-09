import ButtonElement from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <>
      <form action="">
        <InputForm
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="********"
          name="password"
        />
        <ButtonElement hover="hover:bg-blue-700">Login</ButtonElement>
      </form>
    </>
  );
};

export default FormLogin;
