const FeatureItem = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="flex flex-col w-80 m-4 rounded-xl bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-center text-white font-oswald text-sm md:text-lg font-semibold p-8 bg-black">
        <>{title}</>
      </div>
      <div className="border border-brand-orange font-manrope p-8 py-6 rounded-b-xl text-black text-xs md:text-sm/6 ">
        {description}
      </div>
    </div>
  );
};

export default FeatureItem;
