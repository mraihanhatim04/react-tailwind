import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      setScrolled(current > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors  duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-3">
        <h1 className="text-2xl font-semibold text-center text-gray-600 ">
          React Tailwind Exploration
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
