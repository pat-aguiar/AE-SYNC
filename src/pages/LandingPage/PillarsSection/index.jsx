import PillarsItem from "./PillarsItem";
import { Link } from "react-router-dom";

const PillarsSection = () => {
  return (
    <div className="flex flex-col items-center px-8 text-black text-md md:text-lg font-manrope">
      <div className="flex flex-wrap justify-center lg:justify-between items-top h-full gap-2 sm:px-10 w-full max-w-5xl">
        <PillarsItem
          icon="fa-solid fa-helmet-safety"
          title="AEC"
          subtitle="tailored"
          description="There are infinite ways to start your web journey. We offer you a
            straightforward approach tailored to the needs of the AEC community."
        />
        <PillarsItem
          icon="fa-solid fa-business-time"
          title="STRATEGY"
          subtitle="focused"
          description="Productivity and leadership, on demand. We present you big
            picture thinking and best ways to plan, implement, and
            leverage your ideas."
        />
        <PillarsItem
          icon="fa-solid fa-money-bill-trend-up"
          title="VALUE"
          subtitle="driven"
          description="Don’t just build, build with purpose. We focus on applications that
          increase productivity, profitability, and professional worth."
        />
        <PillarsItem
          icon="fa-solid fa-code"
          title="AUTOMATION"
          subtitle="building"
          description="Theory is good, result is better. We have a specific goal - to get
          you to your first AEC web based automation tool."
        />
      </div>
      <Link
        to="/sign-in"
        className="flex items-center justify-center m-4"
      >
        <div className="italic text-brand-gray text-xs md:text-sm">"Add $$$ to your next salary negotiation." {"  "}</div>
        <i className="fa-solid fa-arrow-right px-2 text-2xl text-brand-orange" />
      </Link>
    </div>
  );
};

export default PillarsSection;
