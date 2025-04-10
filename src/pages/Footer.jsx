import { Link } from "react-router-dom";

const Footer = () => {

  // "w-64 text-center text-sm "
  return (
    <div className="flex flex-col items-center text-sm md:text-md font-manrope">
      <div className="flex justify-center w-full p-8 bg-brand-orange text-white">
        <div className="flex justify-between w-full max-w-6xl px-10">
          <div>
            <img className="w-40 mb-2 border" src="./../../public/logo-main-orange.png" />
            <div className="border-t border-white pt-1 text-xs tracking-wide">Where AEC professionals build automation.</div>
          </div>
          <div>
            Discover
            <div>FAQ</div>
          </div>
          <div>Product</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="flex justify-center w-full px-8 py-6 bg-black text-white">
        <div className="flex justify-between w-full max-w-6xl px-10">
          <div>&copy; 2025, AE-SYNC. All rights reserved.</div>
          <div>
            <Link
              to="/terms-of-service"
              target="_blank"
              className="hover:underline"
            >
              Terms of Service
            </Link>{" "}
            |{" "}
            <Link
              to="/privacy-policy"
              target="_blank"
              className="hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            | Acceptable Use | Support Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
