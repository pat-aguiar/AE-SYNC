const ModuleItem = (props) => {
  const { step, title, subtitle, description, level, releaseDate, estimatedTime } = props;

  return (
    <div className="bg-white border border-black flex flex-col items-center m-4 p-4 rounded-md w-56">
      <div className="bg-brand-orange-dark font-semibold m-6 py-1 rounded-full  text-sm md:text-lg text-white/90 w-7 md:w-9">
        {step}
      </div>
      <div className="font-bold text-lg md:text-2xl">{title}</div>
      {estimatedTime}
      <div className="text-xs md:text-sm/6 mt-6">{subtitle}<br/>{description}</div>
    </div>
  );
};

export default ModuleItem;
