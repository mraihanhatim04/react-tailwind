import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold tracking-widest mb-4">
        404 {error.statusText} {error.message}
      </h1>
      <p className="font-medium text-slate-500 mb-4">
        Sorry, an unexpected error has occured
      </p>
      <p>
        Back To{" "}
        <Link to="/">
          <span className="font-bold underline text-xl text-blue-500">
            Home
          </span>{" "}
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
