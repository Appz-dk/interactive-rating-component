import "./App.css";
import { useState } from "react";
import Rating from "./components/Rating";
import RatingSubmit from "./components/RatingSubmit";

const ratingValues = [1, 2, 3, 4, 5];

function App() {
  const [rating, setRating] = useState<number>();
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleOnSubmit = () => {
    if (!rating) return;
    setSubmitted(true);
  };

  return (
    <main className="App">
      {!submitted && (
        <Rating
          rating={rating}
          handleOnSubmit={handleOnSubmit}
          handleRatingClick={handleRatingClick}
          ratingValues={ratingValues}
        />
      )}
      {submitted && <RatingSubmit rating={rating} maxRating={ratingValues.length} />}
    </main>
  );
}

export default App;
