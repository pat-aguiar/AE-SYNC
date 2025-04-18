import PilarsItem from "./PilarsItem";

const PilarsSection = () => {
  return (
    <div className="flex justify-center p-8 text-black text-md md:text-lg font-manrope">
      <div className="flex flex-wrap justify-center items-top h-full gap-8 w-full max-w-5xl pb-10 pt-6">
        <PilarsItem
          icon="fa-solid fa-helmet-safety"
          title="AEC"
          subtitle="tailored"
          description="There are infinite ways to start your web journey. We offer you a
            straightforward approach tailored to the needs of the AEC community."
        />
        <PilarsItem
          icon="fa-solid fa-business-time"
          title="STRATEGY"
          subtitle="focused"
          description="Productivity and leadership, on demand. We present you big
            picture thinking and best ways to plan, implement, and
            leverage your ideas."
        />
        <PilarsItem
          icon="fa-solid fa-money-bill-trend-up"
          title="VALUE"
          subtitle="driven"
          description="Don’t just build, build with purpose. We focus on applications that
          increase productivity, profitability, and professional worth."
        />
        <PilarsItem
          icon="fa-solid fa-code"
          title="AUTOMATION"
          subtitle="building"
          description="Theory is good, result is better. We have a specific goal - to get
          you to your first AEC web based automation tool."
        />
      </div>
    </div>
  );
};

export default PilarsSection;
