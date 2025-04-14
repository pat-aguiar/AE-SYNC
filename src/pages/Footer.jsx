import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-sm font-manrope">
      <div className="flex justify-center w-full p-8 bg-brand-orange text-white">
        <div className="flex flex-wrap gap-4 justify-between w-full max-w-6xl sm:px-10">
          <div className="my-4 w-64">
            <img
              className="w-40 -mb-3 -ml-4"
              src="./../../public/AE-SYNC_fundo-colorido-12.png"
            />
            <div className="absolute border-t border-black pt-1 px-1 text-black text-xs tracking-wide">
              where AEC builds automation
            </div>
          </div>
          <div className="flex flex-col my-4 w-36">
            <div className="font-bold my-1 text-base text-white/50">
              Discover
            </div>
            <div className="my-1">How AE-SYNC works</div>
            <div className="my-1">Free class</div>
            <div className="my-1">Examples</div>
            <div className="my-1">FAQ</div>
          </div>
          <div className="flex flex-col my-4 w-36">
            <div className="font-bold my-1 text-base text-white/50">
              Product
            </div>
            <Link className="my-1" to="/learn">
              Learn
            </Link>
            <Link className="my-1" to="/build">
              Build
            </Link>
            <Link className="my-1" to="/pricing">
              Pricing
            </Link>
          </div>
          <div className="flex flex-col my-4 w-36">
            <div className="font-bold my-1 text-base text-white/50">
              Contact
            </div>
            <Link className="my-1" to="/sign-in">
              Inquiries
              <div className="my-1 text-black/50 hover:text-white/50">xxx@ae-sync.com</div>
            </Link>
            <Link className="my-1" to="/sign-in">
              <i className="fa-solid fa-bug pl-1 w-7" />
              repot a bug
            </Link>
            <Link className="my-1" to="/sign-in">
              <i className="fa-regular fa-lightbulb pl-1 w-7" />
              request a feature
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full px-8 py-4 bg-black text-white">
        <div className="flex flex-wrap justify-between w-full max-w-6xl sm:px-10">
          <div className="py-2">&copy; 2025, AE-SYNC. All rights reserved.</div>
          <div className="py-2">
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
