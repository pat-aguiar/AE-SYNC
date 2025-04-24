import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-black/90 flex justify-center px-8 pt-16 pb-8 md:pb-16">
      <div className="flex flex-col items-center max-w-2xl">
        <div className="text-brand-gray/70 text-center text-sm md:text-base font-manrope font-semibold">
          WHERE AEC PROFESSIONALS BUILD AUTOMATION
        </div>
        <div className="text-black text-center text-2xl md:text-5xl md:leading-[1.5] font-oswald font-semibold mt-6 mb-12">
          {/* Why are AEC Professionals building web apps? */}
          Build{" "}
          <span className="border-b-4 border-brand-orange-light">your app</span>
          , join the next generation of{" "}
          <span className="border-b-4 border-brand-orange-light">
            AEC professionals
          </span>
          .
        </div>
        <div className="text-black text-center text-sm md:text-lg font-manrope mb-16">
          <span className="font-bold">Learn</span> to escalate productivity.
          <br />
          <span className="font-bold">Build</span> your first web-based
          automation tool. <br />
          Increase your <span className="font-bold">worth</span>.
        </div>
        <Link
          to="/sign-in"
          className="bg-brand-blue border-2 border-b-8 border-black font-semibold hover:bg-brand-orange-light text-sm md:text-lg text-white px-12 md:px-20 mb-2 py-4 rounded-full"
        >
          I Want To Go Pro
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
