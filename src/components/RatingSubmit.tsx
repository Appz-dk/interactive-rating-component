import submitImg from "/images/illustration-thank-you.svg";

type RatingSubmitProps = {
  rating?: number;
  maxRating: number;
};

const RatingSubmit: React.FC<RatingSubmitProps> = ({ rating, maxRating }) => {
  return (
    <div className="submit__container">
      <div>
        <img src={submitImg} />
      </div>
      <div className="submit__rating-container">
        <p>
          You selected {rating} out of {maxRating}
        </p>
      </div>
      <div className="submit__text-container">
        <h2>Thanks you!</h2>
        <p>
          We appreciate you talking the time to give a rating. If you ever need more support, don't
          hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default RatingSubmit;
