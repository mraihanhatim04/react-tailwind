const Jumbotron = ({ title, subtitle, children, accent = "blue" }) => {
  const accentColors = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500",
  };

  return (
    <div
      className={`relative w-full min-h-[60vh] mt-20 sm:min-h-[70vh] flex items-center justify-center px-4 py-8 overflow-hidden`}
    >
      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${accentColors[accent]} opacity-10 blur-3xl`}
      ></div>

      {/* Decorative elements */}
      <div className="absolute top-12 right-8 w-64 h-64 bg-linear-to-br from-blue-400 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Title with gradient text */}
        {title && (
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-linear-to-r ${accentColors[accent]} bg-clip-text text-transparent drop-shadow-lg`}
          >
            {title}
          </h1>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            {subtitle}
          </p>
        )}

        {/* Divider */}
        <div className="flex justify-center gap-2">
          <div
            className={`h-1.5 w-16 bg-linear-to-r ${accentColors[accent]} rounded-full`}
          ></div>
          <div
            className={`h-1.5 w-8 bg-linear-to-r ${accentColors[accent]} rounded-full opacity-50`}
          ></div>
        </div>

        {/* Children - buttons or additional content */}
        {children && <div className="pt-6">{children}</div>}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Jumbotron;
