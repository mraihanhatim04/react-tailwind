const AuthLayouts = (props) => {
  const { children, title } = props;
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
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
