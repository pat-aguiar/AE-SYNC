const ExampleCard = (props) => {
  const { example } = props;

  return (
    <div className="flex flex-col items-end m-4">
      <div className="bg-black font-manrope p-3 pb-2 rounded-t-2xl text-white text-xs text-end w-fit">
        {example.title}
      </div>
      <img
        src={example.image}
        className="border-2 border-black rounded-2xl rounded-tr-none h-40 w-60 md:h-[250px] md:w-[400px]"
      />
    </div>
  );
};

export default ExampleCard;
