import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="top-0 flex justify-center p-8 bg-black/80 text-brand-gray text-sm md:text-md font-manrope">
      <div className="flex justify-between items-center w-full max-w-6xl px-10">
        <Link to="/">
          <img className="w-36" src="./../../public/logo-main-orange.png" />
        </Link>
        <div>
          <Link to="/learn" className="mx-6 hover:text-brand-orange-light">
            Learn
          </Link>
          <Link to="/build" className="mx-6 hover:text-brand-orange-light">
            Build
          </Link>
          <Link to="/premium" className="mx-6 hover:text-brand-orange-light">
            Premium
          </Link>
        </div>
        <Link
          to="/sign-in"
          className="w-36 text-right hover:text-brand-orange-light"
        >
          <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
