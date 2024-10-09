import ButtonElement from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <InputForm
          label="Full Name"
          type="text"
          placeholder="Insert your name here"
          name="fullname"
        />
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
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="********"
          name="confirmpassword"
        />

        <ButtonElement hover="hover:bg-blue-700">Register</ButtonElement>
      </form>
    </>
  );
};

export default FormRegister;
