import whyProfessionals from "../../../../public/whyProfessionals";
import WhyItem from "./WhyItem";

const WhyProfessionalsSection = () => {
  const whyProfessionalsList = whyProfessionals.map((item, idx) => (
    <WhyItem item={item} key={idx} />
  ));

  return (
    <div className="flex flex-col items-center p-8">
      <div className="flex flex-col items-center sm:px-10 text-brand-orange-dark rounded-2xl max-w-5xl">
        <div className="font-oswald font-semibold mb-7 text-center text-black text-lg md:text-2xl md:leading-[1.5]">
          WHY PROFESSIONALS CHOOSE AE-SYNC
        </div>
        <i className="fa-solid fa-screwdriver-wrench text-3xl" />
        <span className="font-bold mt-4 text-sm md:text-base">
          For Professionals
        </span>
        <span className="italic mb-6 text-brand-gray text-xs md:text-sm">
          "How much are you worth?"
        </span>
        {whyProfessionalsList}
      </div>
    </div>
  );
};

export default WhyProfessionalsSection;
