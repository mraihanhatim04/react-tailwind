import { Divider } from "@nextui-org/react";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center p-4">
        <LoginPage />
      </div>
      <Divider />
      <div className="flex min-h-screen justify-center items-center p-4">
        <RegisterPage />
      </div>
    </>
  );
}

export default App;
