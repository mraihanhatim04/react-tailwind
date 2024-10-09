const ButtonElement = (props) => {
  const {
    children,
    variant = "bg-blue-500",
    hover = "",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <>
      <button
        className={`${variant} ${hover} text-white font-bold py-2 rounded w-full`}
        type={type}
        onClick={() => onClick()}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonElement;
