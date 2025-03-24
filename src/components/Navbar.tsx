import { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <nav
        //   className={`fixed w-[80%] mt-4 rounded-[15px] z-50 transition-all duration-300 bg-violet-200 bg-opacity-10
        //   }`}
        className={`fixed w-[80%] mt-4 rounded-[15px] z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/30 backdrop-filter backdrop-blur-md  drop-shadow-xl"
              : "bg-white/90 shadow-md"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
            {/* Logo */}
            <img src="/logo.png" alt="Logo" className="h-15" />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {[
                { name: "Home", to: "home" },
                { name: "About Us", to: "about" },
                { name: "Services", to: "services" },
                { name: "Contact", to: "contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-dark font-semibold cursor-pointer transition-opacity hover:opacity-75"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="quote"
              smooth={true}
              duration={500}
              className="hidden text-white md:inline-block px-5 py-2 bg-blue-400 font-semibold rounded-lg transition transform hover:scale-105 hover:bg-blue-500 cursor-pointer"
            >
              Get a Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white text-2xl"
            >
              <RiMenu2Fill />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`absolute top-16 left-0 w-full bg-blue-700 transition-transform duration-300 md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {isOpen ? (
              <>
                <div className="flex flex-col items-center space-y-6 py-6">
                  {[
                    { name: "Home", to: "home" },
                    { name: "Services", to: "services" },
                    { name: "About Us", to: "about" },
                    { name: "Contact", to: "contact" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-white text-lg cursor-pointer transition-opacity hover:opacity-75"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    to="quote"
                    smooth={true}
                    duration={500}
                    className="px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-lg transition transform hover:scale-105 hover:bg-yellow-500 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </>
            ) : null}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;