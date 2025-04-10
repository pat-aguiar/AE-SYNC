const WhatItem = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="flex flex-col items-center w-full md:w-[410px] my-6">
      <i className={icon + " text-2xl text-brand-orange"} />
      <div className="text-black font-oswald text-sm md:text-lg text-center font-semibold my-4">
        {title}
      </div>
      <div className="text-black font-manrope text-xs md:text-sm text-center">{description}</div>
    </div>
  );
};

export default WhatItem;