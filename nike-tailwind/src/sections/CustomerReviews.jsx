import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Whar Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine storis from our customers about their exceptional
        experiences with us.
      </p>
      <div className="mt-14 flex flex-1 justify-evenly">
        {reviews.map((review) => {
          return (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
