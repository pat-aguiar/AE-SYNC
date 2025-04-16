const ModuleItem = (props) => {
  const { step, title, description, level, releaseDate, estimatedTime } = props;

  return (
    <div className="bg-white border border-black flex flex-col items-center m-4 p-4 rounded-md w-56">
      <div className="bg-brand-orange-dark font-semibold mb-4 rounded-full size-8 text-sm md:text-lg text-white/90">
        {step}
      </div>
      <div className="font-bold text-lg md:text-2xl">{title}</div>
      {estimatedTime}
      <div className="text-xs md:text-sm/6 mt-6">{description}</div>
    </div>
  );
};

export default ModuleItem;
