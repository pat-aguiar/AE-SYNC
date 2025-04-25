const WhyItem = (props) => {
  const { item } = props;

  return (
    <div className="font-manrope text-black text-sm md:text-base mb-4 w-full">
      <span className="font-bold">{item.title}</span>
      {" "}
      <span>{item.description}</span>
    </div>
  );
};

export default WhyItem;
