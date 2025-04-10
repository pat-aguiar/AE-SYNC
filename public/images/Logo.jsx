const Logo = (props) => {
  const {colors} = props;

  return (
    <svg className="w-[557px] h-[372px] border border-blue-600" viewBox="0 0 557 372">
      <circle
        r="165px"
        cx="370px"
        cy="186px"
        fill="none"
        stroke={colors[0]}
        strokeWidth="42px"
      />
      <line
        x1="0px"
        y1="130px"
        x2="522px"
        y2="130px"
        stroke={colors[1]}
        strokeWidth="42px"
      />
      <circle r="35px" cx="522px" cy="130px" fill={colors[2]} />
      <circle r="35px" cx="217px" cy="130px" fill={colors[2]} />
    </svg>
  );
};

export default Logo;
