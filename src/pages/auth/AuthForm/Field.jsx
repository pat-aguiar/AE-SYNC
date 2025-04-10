const Field = (props) => {
  const { label, type, onChange, value } = props;

  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="pl-1 text-brand-gray">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        className=" text-brand-dark px-2 py-1 bg-brand-gray/5 border border-brand-gray/20 rounded-lg focus:outline-brand-orange w-80"
      />
    </div>
  );
};

export default Field;
