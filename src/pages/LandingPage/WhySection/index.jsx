import whyProfessionals from "../../../../public/whyProfessionals";
import whyCompanies from "../../../../public/whyCompanies";
import WhyItem from "./WhyItem";

const WhySection = () => {
  const whyProfessionalsList = whyProfessionals.map((item, idx) => (
    <WhyItem item={item} key={idx} />
  ));

  const whyCompaniesList = whyCompanies.map((item, idx) => (
    <WhyItem item={item} key={idx} />
  ));

  return (
    <div className="flex flex-col items-center p-8">
      <div className="font-oswald font-semibold mb-7 text-center text-black text-2xl md:text-4xl md:leading-[1.5] ">
        Why AEC professionals choose AE-SYNC
      </div>
      <div className="text-black text-center text-sm md:text-base max-w-2xl mb-12">
        IT ALL COMES DOWN TO COST-BENEFIT.
      </div>
      <div className="bg-white  border-2 border-brand-orange-dark flex items-top rounded-2xl max-w-6xl">
        <div className="border-r border-brand-orange-dark flex flex-col items-center p-8 text-brand-orange-dark w-1/2">
          <i className="fa-solid fa-screwdriver-wrench text-3xl" />
          <span className="font-bold mt-4 text-sm md:text-base">
            For Professionals
          </span>
          <span className="italic mb-6 text-brand-gray text-xs md:text-sm">
            "How much are you worth?"
          </span>
          {whyProfessionalsList}
        </div>

        <div className="border-l border-brand-orange-dark flex flex-col items-center p-8 text-brand-orange-dark w-1/2">
          <i className="fa-solid fa-screwdriver-wrench text-3xl" />
          <span className="font-bold mt-4 text-sm md:text-base">
            For Companies
          </span>
          <span className="italic mb-6 text-brand-gray text-xs md:text-sm">
            "How many engineering hours will you save?"
          </span>
          <span className="font-bold text-black w-full">
            All benefits of traditional automation tools +:
          </span>
          {whyCompaniesList}
        </div>

        {/* <div className="flex flex-col font-bold h-full items-center justify-center m-4 p-4 text-brand-orange-dark">
          <i className="fa-solid fa-screwdriver-wrench m-2 text-3xl" />
          <span>For professionals</span>
        </div>
        <div className="">{whyProfessionalsList}</div> */}
      </div>
    </div>
  );
};

export default WhySection;
