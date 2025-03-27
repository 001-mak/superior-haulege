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
        className={`fixed w-[100%] h-[85px] pt-2 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-blue-900/90 backdrop-filter backdrop-blur-md  drop-shadow-xl"
              : "bg-blue-950/90 shadow-md"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
            {/* Logo */}
            <img src="/logo.png" alt="Logo" className="h-20 pt-2" />

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {[
                { name: "Home", to: "home" },
                // { name: "About Us", to: "about" },
                { name: "Services", to: "services" },
                { name: "Contact", to: "contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="text-white text-lg font-semibold cursor-pointer transition-opacity hover:opacity-75"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="px-15">

            </div>
            {/* <Link
              to="quote"
              smooth={true}
              duration={500}
              className="hidden text-blue-500 md:inline-block px-5 py-2 bg-white font-semibold rounded-lg transition transform hover:scale-105 hover:bg-blue-500 cursor-pointer"
            >
              Get a Quote
            </Link> */}

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
            className={`absolute top-21 left-0 w-full bg-blue-900 transition-transform duration-300 md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {isOpen ? (
              <>
                <div className="flex flex-col items-center space-y-6 py-6">
                  {[
                    { name: "Home", to: "home" },
                    { name: "Services", to: "services" },
                    // { name: "About Us", to: "about" },
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
                  {/* <Link
                    to="quote"
                    smooth={true}
                    duration={500}
                    className="px-5 py-2 bg-white text-blue-500 font-semibold rounded-lg transition transform hover:scale-105 hover:bg-white cursor-pointer text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Get a Quote
                  </Link> */}
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