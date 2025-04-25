const ExampleCard = (props) => {
  const { example } = props;

  return (
    <div className="flex flex-col items-end m-4 relative">
      <div className="absolute bg-black/80 font-manrope px-4 py-3 rounded-bl-2xl text-white text-xs text-end">
        {example.title}
      </div>
      <img
        src={example.image}
        className="border-4 border-black/80 rounded-2xl rounded-tr-none h-40 w-60 md:h-[250px] md:w-[400px]"
      />
    </div>
  );
};

export default ExampleCard;
