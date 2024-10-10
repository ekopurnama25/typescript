import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/fonts/font-fantasy.css";

const Navbar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  const handleNav = (): void => {
    setOpenNavbar((prev) => !prev);
    console.log(openNavbar);
  };

  return (
    <>
      <nav className="flex sticky top-0 py-1 mx-auto justify-around items-center bg-blue-200">
        <div className="flex flex-col justify-between items-center max-w-5xl w-full sm:flex sm:flex-row sm:px-12 sm:justify-between">
          <div className="flex justify-between w-full">
            <div className="p-1 fantasy-text max-[780px]:m-4">
              <h1 className="w-[65x] h-[60px]">GUNDAM</h1>
            </div>
            <div className="flex-col gap-y-1 min-[805px]:hidden block max-[800px]:m-5">
              <button
                onClick={handleNav}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={openNavbar}
              >
                <span className="absolute -inset-0.5 "></span>
                <span className="sr-only">
                  {openNavbar ? "Close main menu" : "Open main menu"}
                </span>

                {openNavbar ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex-col gap-y-1 ${
              openNavbar ? "block" : "hidden"
            } max-[800px]:m-5`}
          >
            {/* Add mobile menu links here */}
            <Link
              to="/home"
              className="fantasy-text-menus font-bold block text-[#2e1065] hover:text-[#5b21b6]"
            >
              Home
            </Link>
            <Link
              to="/profile"
              className="fantasy-text-menus font-bold block text-[#2e1065] hover:text-[#5b21b6]"
            >
              Profile
            </Link>
          </div>

          <div className="flex-row items-center lg:flex max-[800px]:hidden">
            <ul className="flex flex-row p-1 gap-x-8">
              <Link
                className="fantasy-text-menus font-bold text-[#2e1065] hover:text-[#5b21b6] hover:duration-300 cursor-pointer"
                to="/home"
              >
                Home
              </Link>
              <Link
                className="fantasy-text-menus font-bold text-[#2e1065] hover:text-[#5b21b6] hover:duration-300 cursor-pointer"
                to="/profile"
              >
                Profile
              </Link>
              {/* Additional links can go here */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
