import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <>
      {" "}
      <div className="flex min-h-screen justify-center items-center p-4">
        <div className="w-full max-w-xs">
          <h1 className="text-4xl font-bold text-blue-500 mb-3">{title}</h1>
          <p className="font-medium text-slate-500 mb-5">
            Welcome, please enter your details✨
          </p>
          {children}
          <p className="mt-5 text-md font-serif text-slate-500 text-center">
            {type === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            {type === "login" && (
              <Link
                to="/register"
                className="font-bold text-blue-500 underline"
              >
                Register
              </Link>
            )}
            {type === "register" && (
              <Link to="/login" className="font-bold text-blue-500 underline">
                Login
              </Link>
            )}
          </p>
        </div>
      </div>
    </>
  );
};
export default AuthLayouts;
