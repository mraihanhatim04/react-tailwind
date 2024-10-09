const ButtonElement = (props) => {
  const { children, variant = "bg-blue-500", hover = "" } = props;
  return (
    <>
      <button
        className={`${variant} ${hover} text-white font-bold py-2 rounded w-full`}
        type="submit"
      >
        {children}
      </button>
    </>
  );
};

export default ButtonElement;
