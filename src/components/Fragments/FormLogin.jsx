import ButtonElement from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    alert("Login Success");
    window.location.href = "/products";
  };
  return (
    <>
      <form onSubmit={handleLogin}>
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
        <ButtonElement hover="hover:bg-blue-700" type="submit">
          Login
        </ButtonElement>
      </form>
    </>
  );
};

export default FormLogin;
