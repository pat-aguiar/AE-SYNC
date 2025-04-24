import FeatureItem from "./FeatureItem";

const FeatureSection = () => {
  return (
    <div className="flex justify-center p-8">
      <div className="flex flex-col items-center w-full max-w-6xl sm:px-10">
        <div className="flex flex-wrap justify-center">
          <FeatureItem
            icon="fa-solid fa-lightbulb"
            title="Step-by-Step Method"
            description="To get you from zero to your first web app. Earn for the value you bring, display your automation power with a shareable link."
          />
          <FeatureItem
            icon="fa-solid fa-chalkboard-user"
            title="Live ZOOM Sessions"
            description="Learn from specialists and brainstorm ideas. Get the best out of a community of AEC professionals who think “work smart, increase your worth”."
          />
          <FeatureItem
            icon="fa-solid fa-screwdriver-wrench"
            title="Access To Build"
            description="We’ll do everything we can to get you to your goal, quickly. Build is a library of pre-built icons and code snippets, all tailored to the AEC industry."
          />
        </div>
        <div className="flex font-manrope max-w-5xl text-sm md:text-base pt-6">
          <i className="fa-solid fa-check font-bold text-2xl text-end"></i>
          <div className="p-2">
            <span className="font-bold">7-days money back guarantee:</span> no
            catch here. Life is unexpected! 7-days,{" "}
            <span className="font-bold">no questions asked</span>, money back
            guarantee policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
