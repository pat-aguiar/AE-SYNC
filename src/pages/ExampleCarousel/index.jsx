import { useState } from "react";
import examples from "../../examples";
import ExampleCard from "./ExampleCard";

const ExampleCarousel = () => {
  const [startIdx, setStartIdx] = useState(1);
  console.log(startIdx);

  const exampleCards = examples
    .slice(startIdx, startIdx + 3)
    .map((example, idx) => <ExampleCard example={example} key={idx} />);

  return (
    <div className="flex flex-col justify-center p-8">
      <div className="font-oswald text-center text-black text-2xl md:text-4xl  md:leading-[1.5] mb-4 font-semibold">
        What will you Build?
      </div>
      <div className="text-black text-center text-sm md:text-lg font-manrope mb-16">
        Productivity increasing automation tools, on the web.
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            if (startIdx > 0) {
              setStartIdx(startIdx - 1);
            }
          }}
        >
          <i className="fa-solid fa-chevron-circle-left mb-4 text-xl md:text-3xl text-brand-gray/50 rounded-full" />
        </button>
        <div className="flex flex-wrap justify-center">{exampleCards}</div>
        <button
          onClick={() => {
            if (startIdx < examples.length - 3) {
              setStartIdx(startIdx + 1);
            }
          }}
        >
          <i className="fa-solid fa-chevron-circle-right mb-4 text-xl md:text-3xl text-brand-gray/50 rounded-full" />{" "}
        </button>
      </div>
    </div>
  );
};

export default ExampleCarousel;
