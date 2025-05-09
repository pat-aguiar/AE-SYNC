import { useState } from "react";
import examples from "../../../../public/examples";
import ExampleCard from "./ExampleCard";
import { Link } from "react-router-dom";

const ExampleCarousel = () => {
  const [startIdx, setStartIdx] = useState(1);

  const exampleCards_smallScreen = examples
    .slice(startIdx, startIdx + 3)
    .map((example, idx) => <ExampleCard example={example} key={idx} />);

  const exampleCards_largeScreen = examples
    .slice(startIdx, startIdx + 6)
    .map((example, idx) => <ExampleCard example={example} key={idx} />);

  return (
    <div className="flex flex-col items-center p-8">
      <div className="font-oswald font-semibold mb-7 text-center text-black text-lg md:text-2xl md:leading-[1.5] ">
        WHAT CAN YOU BUILD?
      </div>
      <div className="text-black text-center text-sm md:text-base font-manrope max-w-2xl mb-12">
        Productivity increasing automation tools, on the web.
        <div className="mt-3 text-xs md:text-sm/6">
          The AE-SYNC Build library helps you create intuitive, robust and easy
          to use tools. Driven AEC professionals are building internal tools,
          design, management and data visualization applications.
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={() => {
            if (startIdx > 0) {
              setStartIdx(startIdx - 1);
            }
          }}
        >
          <i className="fa-solid fa-chevron-circle-left text-xl md:text-3xl text-black hover:text-brand-orange rounded-full" />
        </button>

        <div className="hidden lg:flex flex-wrap justify-center">
          {exampleCards_largeScreen}
        </div>
        <div className="lg:hidden flex flex-wrap justify-center">
          {exampleCards_smallScreen}
        </div>

        <button
          onClick={() => {
            if (startIdx < examples.length - 3) {
              setStartIdx(startIdx + 1);
            }
          }}
        >
          <i className="fa-solid fa-chevron-circle-right text-xl md:text-3xl text-black hover:text-brand-orange rounded-full" />{" "}
        </button>
      </div>
      <div className="flex flex-wrap italic items-center justify-center text-brand-gray text-xs md:text-sm">
        “Keep your mindset on growth.”
        <Link
          to="/sign-in"
          className="bg-brand-orange-light border border-brand-orange font-semibold hover:bg-white m-4 text-white hover:text-brand-blue px-6 py-2 relative rounded-full"
        >
          Get Started
          <span className="absolute -z-10 top-0 right-5 h-full w-2/3 animate-ping rounded-full bg-brand-blue opacity-75 " />
        </Link>
      </div>
    </div>
  );
};

export default ExampleCarousel;
