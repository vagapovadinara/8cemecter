import { Review } from "../../types/review";
import { JSX } from "react";
import ReviewItem from "../review-Item/review-item";

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <section className="offer__reviews reviews margin='0px'">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
    </section>
  );
}

export default ReviewsList;
