import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = (props) => {
  const {sticky} = props;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={sticky+" top-0 right-0 left-0 z-10"}>
      <nav className="flex justify-center p-8 bg-black/90 text-brand-gray text-sm font-manrope">
        <div className="flex justify-between items-center w-full max-w-6xl sm:px-10">
          <Link to="/">
            <img
              className="w-24 md:w-36"
              src="./../../public/logo-main-orange.png"
            />
          </Link>
          <div className="hidden md:flex">
            <Link to="/learn" className="mx-6 hover:text-brand-orange-light">
              Learn
            </Link>
            <Link to="/build" className="mx-6 hover:text-brand-orange-light">
              Build
            </Link>
            <Link to="/pricing" className="mx-6 hover:text-brand-orange-light">
              Pricing
            </Link>
          </div>
          <div className="hidden md:flex justify-between items-center w-36">
            <Link
              to="/sign-in"
              className="hidden md:flex justify-end text-right hover:text-brand-orange-light"
            >
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </Link>
            <Link
              to="/sign-in"
              className="bg-white border-2 border-black font-semibold hover:bg-brand-orange-light text-black px-4 py-2 rounded-full"
            >
              Get Started
            </Link>
          </div>

          {!isMobileMenuOpen && (
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <i className="fa-solid fa-bars text-lg" />
            </button>
          )}
          {isMobileMenuOpen && (
            <button
              className="md:hidden font-bold text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              X
            </button>
          )}
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute bg-brand-orange border-b border-b-black/50 flex flex-col px-8 py-4 text-sm w-screen">
          <div className="mb-8 mt-4 sm:px-10">
            <Link
              to="/sign-in"
              className="border-2 border-white font-semibold hover:bg-brand-orange-light text-white px-6 py-3 rounded-full mr-8"
            >
              Sign-in
            </Link>
            <Link
              to="/sign-in"
              className="bg-white border-2 border-black font-semibold hover:bg-brand-orange-light text-black px-10 py-3 rounded-full"
            >
              Get Started
            </Link>
          </div>
          <Link to="/learn" className="hover:text-white sm:px-10 py-2">
            Learn
          </Link>
          <Link to="/build" className="hover:text-white sm:px-10 py-2">
            Build
          </Link>
          <Link to="/premium" className="hover:text-white sm:px-10 py-2">
            Premium
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
