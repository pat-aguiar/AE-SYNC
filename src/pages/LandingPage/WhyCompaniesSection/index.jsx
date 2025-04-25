import whyCompanies from "../../../../public/whyCompanies";
import WhyItem from "./WhyItem";

const WhyCompaniesSection = () => {
  const whyCompaniesList = whyCompanies.map((item, idx) => (
    <WhyItem item={item} key={idx} />
  ));

  return (
    <div className="flex flex-col items-center p-8 mt-10">
      <div className="flex flex-col items-center sm:px-10 text-brand-orange-dark rounded-2xl max-w-5xl">
        <div className="font-oswald font-semibold mb-7 text-center text-black text-lg md:text-2xl md:leading-[1.5]">
          WHY COMPANIES CHOOSE WEB DEV
        </div>
        <i className="fa-solid fa-gear text-3xl" />
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
    </div>
  );
};

export default WhyCompaniesSection;
