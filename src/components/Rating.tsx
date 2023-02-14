import star from "/images/icon-star.svg";
import RatingValue from "./RatingValue";

type RatingProps = {
  ratingValues: number[];
  rating?: number;
  handleRatingClick: (value: number) => void;
  handleOnSubmit: () => void;
};

const Rating: React.FC<RatingProps> = ({
  ratingValues,
  rating,
  handleRatingClick,
  handleOnSubmit,
}) => {
  return (
    <>
      <div>
        <img className="rating__star-icon" src={star} />
      </div>
      <div>
        <h2>How did we do?</h2>
        <p className="rating__text">
          Please let us know how we did with your support request. All feedback is appreciated to
          help us improve our offering!
        </p>
      </div>
      <div className="rating__value-container">
        {ratingValues.map((value) => (
          <RatingValue
            key={value}
            value={value}
            isSelected={rating}
            onClick={() => handleRatingClick(value)}
          />
        ))}
      </div>
      <button className="rating__btn" onClick={handleOnSubmit}>
        Submit
      </button>
    </>
  );
};

export default Rating;
