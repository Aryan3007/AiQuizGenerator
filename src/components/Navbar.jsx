import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const handlePricingClick = () => {
    
    navigate("/");
    setTimeout(scrolltoPricing, 100); // Adjust the timeout as needed
  };

  const scrolltoTop = () => {
    const about = document.getElementById("hometop");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };  const scrolltoPricing = () => {
    const about = document.getElementById("pricing");
    if (about) {
      about.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex fixed lg:my-3 lg:fixed z-50 w-full justify-center">
      <nav className="bg-zinc-900 lg:rounded-xl w-full lg:w-[85%] shadow-xl ">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center justify-between">
            <div className="flex items-center justify-between">
              <h1 className="text-white text-xl">QuizzzMaker</h1>
              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-100  hover:text-gray-100 focus:outline-none focus:text-gray-100 "
                  aria-label="toggle menu"
                >
                  {!isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "opacity-0 -translate-x-full"
              } absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-zinc-900  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
            >
              <div className="flex flex-col text-gray-200 capitalize lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <Link
                  to={"/"}
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrolltoTop();
                  }}
                  className="mt-2  cursor-pointer transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-400"
                >
                  Home
                </Link>

                <h1 className="mt-2 cursor-pointer  transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-400 ">
                  features
                </h1>
                <h1
                 onClick={() => {
                   handlePricingClick();
                  setIsOpen(!isOpen);
                }}
                  className="mt-2 cursor-pointer  transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-400 "
                >
                  Pricing
                </h1>
                <h1 className="mt-2 cursor-pointer  transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-400 ">
                  docs
                </h1>
                <h1 className="mt-2 cursor-pointer  transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-400 ">
                  support
                </h1>
                <h1 className="mt-2 cursor-pointer  transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-400 ">
                  blog
                </h1>
              </div>
              <div className="flex justify-center mt-6 gap-4 lg:flex lg:mt-0 lg:-mx-2">
                <Link
                  to={"/login"}
                  className="text-white rounded-lg px-4 py-2 font-semibold"
                >
                  Login
                </Link>
                <Link
                  to={"/signup"}
                  className="text-black bg-white rounded-lg px-4 py-2"
                >
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
