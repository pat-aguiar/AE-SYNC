import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
import ModuleItem from "./ModuleItem";
import { Link } from "react-router-dom";

const LearnPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar sticky="" />

      <div className="bg-brand-gray/5 grow relative">

      <Link
            to="/sign-in"
            className="fixed bottom-2 md:bottom-12 right-2 md:right-12 bg-brand-blue border-2 border-b-8 border-black hover:bg-brand-orange-light text-center text-sm md:text-lg text-white p-2 rounded-xl w-36"            
          >
            I'm ready for my next step
            {/* <span className="font-bold">Learn</span> to escalate productivity.
            <br />
            <span className="font-bold">Build</span> your first web-based
            automation tool. <br />
            Increase your <span className="font-bold">worth</span>.
            <br />
            <br /> */}
          </Link>

        <div className="flex justify-center px-8 py-10 border-red-400">
          <div className="flex flex-col items-center max-w-2xl">
            <div className="text-black text-center text-2xl md:text-5xl md:leading-[1.5] font-oswald font-semibold mt-6 mb-12 border-b-4 border-brand-orange-light">
              Learn Methodology
            </div>
            <div className="text-black text-center text-sm md:text-lg font-manrope">
              Step-by-step, with an end goal: <br />
              <div className="border-l-4 border-brand-orange-light text-left p-2 m-1">
                <span className="font-bold">1)</span> Build your first app{" "}
                <br />
                <span className="font-bold">2)</span> Share it with the world{" "}
                <br />
                <span className="font-bold">3)</span> Enhance it
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center p-8">
          <div className="flex flex-wrap font-manrope gap-8 justify-center text-center max-w-5xl w-full">
            <div className="border-8 border-brand-orange-dark/50 border-dashed rounded-lg">
              <ModuleItem
                step="1"
                title="BRAINSTORM"
                description="app ideas & workflow analysis"
                level="no code required"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
              <ModuleItem
                step="2"
                title="Step 2"
                description="UX/UI & MVP"
                level="no code required"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
              <ModuleItem
                step="3"
                title="Step 3"
                description="Beta app structure & local setup (app suggestions)"
                level="intro to coding/web dev"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
            </div>
            <div className="border-8 border-brand-orange-dark/50 border-dashed rounded-lg">
              <ModuleItem
                step="4"
                title="Step 4"
                description="Beta app layout and basic functionallity"
                level="fundamentals of programming on the web"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
              <ModuleItem
                step="2"
                title="Step 2"
                description="UX/UI & MVP"
                level="no code required"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
              <ModuleItem
                step="3"
                title="Step 3"
                description="Beta app structure & local setup (app suggestions)"
                level="intro to coding/web dev"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
            </div>
            <div className="border-8 border-brand-orange-dark/50 border-dashed rounded-lg">
              <ModuleItem
                step="4"
                title="Step 4"
                description="Beta app layout and basic functionallity"
                level="fundamentals of programming on the web"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
              <ModuleItem
                step="2"
                title="Step 2"
                description="UX/UI & MVP"
                level="no code required"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
              <ModuleItem
                step="3"
                title="Step 3"
                description="Beta app structure & local setup (app suggestions)"
                level="intro to coding/web dev"
                releaseDate="April 18"
                estimatedTime="14 days"
              />
            </div>
          </div>

          {/* className="bg-brand-blue border-2 border-b-8 border-black font-semibold hover:bg-brand-orange-light text-sm md:text-lg text-white px-12 md:px-20 mb-2 py-4 rounded-full" */}

          
        </div>
        <div>
          <i className="fa-solid fa-arrows-spin"></i>
          enhance & publish
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LearnPage;
