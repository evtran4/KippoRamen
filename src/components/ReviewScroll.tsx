import Review from "./Review";
import { reviews } from "../reviews";
import styles from "./Components.module.css";

export default function ReviewScroll() {
  // Duplicate the array so the animation loops seamlessly
  const allReviews = [...reviews, ...reviews];

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {allReviews.map((review, index) => (
          <div key={index} className={styles.slide}>
            <Review review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}