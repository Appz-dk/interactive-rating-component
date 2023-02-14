type RatingValueProps = {
  value: number;
  isSelected?: number;
  onClick: (value: number) => void;
};

const RatingValue: React.FC<RatingValueProps> = ({ value, onClick, isSelected }) => {
  return (
    <span
      className={`rating__value-circle ${isSelected === value ? "checked" : ""}`}
      onClick={() => onClick(value)}
    >
      <div className="rating__value">{value} </div>
    </span>
  );
};

export default RatingValue;
