function Button({ children, variant = "primary", ...props }) {
  const baseStyles =
    "px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl focus:ring-blue-300 ",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-md hover:shadow-lg focus:ring-gray-400",
    danger:
      "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl focus:ring-red-300",
    asalbutton:
      "bg-green-700 text-gray-100 hover:bg-green-800 shadow-md hover:shadow-lg focus:ring-green-400",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
