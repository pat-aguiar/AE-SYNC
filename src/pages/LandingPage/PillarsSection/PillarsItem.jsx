const PillarsItem = (props) => {
  const { icon, title, subtitle, description } = props;
  return (
    <div className="bg-white border border-black p-4 rounded-md text-center w-56">
      <i
        className={icon + " text-brand-orange-dark text-lg md:text-2xl mb-4"}
      />
      <div className="font-oswald text-lg md:text-2xl font-bold">{title}</div>
      <div className="text-sm md:text-base">{subtitle}</div>
      <div className="text-xs md:text-sm/6 mt-6">{description}</div>
    </div>
  );
};

export default PillarsItem;
