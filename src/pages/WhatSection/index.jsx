import { Link } from "react-router-dom";
import WhatItem from "./WhatItem";

const WhatSection = () => {
  return (
    <div className="flex justify-center p-8 bg-brand-gray/5">
      <div className="flex flex-col items-center w-full max-w-5xl px-10">
        <div className="font-oswald text-center text-black text-2xl md:text-4xl  md:leading-[1.5] mb-4 font-semibold">
          What will you Build?
        </div>
        <div className="text-black text-center text-sm md:text-lg font-manrope mb-16">
          Productivity increasing automation tools, on the web. <br />
          Join driven AEC professionals with a mindset on growth and
          productivity.
        </div>
        <div className="bg-green-800 border-8 border-brand-gray/50 h-[450px] w-[700px] rounded-2xl"></div>

        {/* md:leading-[1.5] */}

        {/* <div className="flex flex-wrap justify-between mb-12">
          <WhatItem
            icon="fa-solid fa-lightbulb"
            title="Beginner To Leader"
            description="We focus on strategic thinking. Broaden your mindset, get ready to improve your whole company - with a sprinkle of code."
          />
          <WhatItem
            icon="fa-solid fa-circle-play"
            title="Bite-Sized Video Tutorials"
            description="Learn & Build with an incremental approach - short and clear step-by-step beginner friendly video tutorials."
          />
          <WhatItem
            icon="fa-solid fa-chalkboard-user"
            title="Created For And By AEC Professionals"
            description="Solve practical AEC problems. We give you the skills and tools needed to develop web applications quickly and thoroughly."
          />
          <WhatItem
            icon="fa-solid fa-laptop-code"
            title="Enhance Your Portifolio"
            description="Create value, display value. Build your first automation tool, create a shareable link, showcase your skills."
          />
          <WhatItem
            icon="fa-solid fa-screwdriver-wrench"
            title="Unlock The Build Library"
            description="Gain access to the most extensive AEC web development toolkit - AE-SYNC, your go-to AEC automation library."
          />
          <WhatItem
            icon="fa-solid fa-gift"
            title="Try For Free"
            description="
            Time to escalate your work's impact and become an all around asset. Take your first step today, start for free."
          />
        </div>
        <Link
          to="sign-in"
          className="bg-black hover:bg-brand-orange text-sm md:text-lg text-white font-semibold px-12 md:px-20 py-4 mb-12 rounded-3xl"
        >
          Get Started For Free
          <i className="fa-solid fa-arrow-right ml-4 text-xl"></i>
        </Link> */}
      </div>
    </div>
  );
};

export default WhatSection;
