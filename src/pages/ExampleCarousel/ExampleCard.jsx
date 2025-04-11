const ExampleCard = (props) => {
  const { example } = props;

  return (
    <div className="m-2 mb-10 relative">
      <div className="absolute -top-8 right-0 bg-brand-orange/20 font-manrope p-2 rounded-t-2xl text-xs text-end w-fit">{example.title}</div>
      <img src={example.image} className="border-8 border-brand-orange rounded-2xl rounded-tr-none h-40 w-60 md:h-[250px] md:w-[400px]" />
    </div>
  );
};

export default ExampleCard;