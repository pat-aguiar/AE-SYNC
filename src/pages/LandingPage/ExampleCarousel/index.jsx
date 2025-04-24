import { useState } from "react";
import examples from "../../../../public/examples";
import ExampleCard from "./ExampleCard";

const ExampleCarousel = () => {
  const [startIdx, setStartIdx] = useState(1);

  const exampleCards = examples
    .slice(startIdx, startIdx + 4)
    .map((example, idx) => <ExampleCard example={example} key={idx} />);

  return (
    <div className="flex flex-col items-center p-8">
      <div className="font-oswald text-center text-black text-2xl md:text-4xl  md:leading-[1.5] mb-4 font-semibold">
        What will you Build?
      </div>
      <div className="text-black text-center text-sm md:text-lg font-manrope mb-10">
        Productivity increasing automation tools, on the web.
      </div>
      <div className="flex justify-center max-w-6xl">
        <button
          onClick={() => {
            if (startIdx > 0) {
              setStartIdx(startIdx - 1);
            }
          }}
        >
          <i className="fa-solid fa-chevron-circle-left text-xl md:text-3xl text-brand-orange-dark hover:text-brand-orange rounded-full" />
        </button>
        <div className="flex flex-wrap justify-center">{exampleCards}</div>
        <button
          onClick={() => {
            if (startIdx < examples.length - 3) {
              setStartIdx(startIdx + 1);
            }
          }}
        >
          <i className="fa-solid fa-chevron-circle-right text-xl md:text-3xl text-brand-orange-dark hover:text-brand-orange rounded-full" />{" "}
        </button>
      </div>
    </div>
  );
};

export default ExampleCarousel;
