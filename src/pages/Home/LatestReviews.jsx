import { useEffect, useState } from "react";
import LatestReview from "./LatestReview";

const LatestReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/feedbacks")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="my-4">
      <h1 className="font-bold text-center text-3xl my-4">Latest Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <LatestReview key={review._id} review={review}></LatestReview>
        ))}
      </div>
    </div>
  );
};

export default LatestReviews;
