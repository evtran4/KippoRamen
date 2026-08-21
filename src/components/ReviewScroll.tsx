import { useEffect, useMemo, useRef, useState } from "react";
import Review from "./Review";
import { reviews } from "../reviews";
import styles from "./Components.module.css";

// These must match the CSS: .slide { width: 400px; margin-right: 60px; }
const REVIEW_WIDTH = 400;
const REVIEW_GAP = 60;
const SET_WIDTH = reviews.length * (REVIEW_WIDTH + REVIEW_GAP);

// Roughly how long (in seconds) each single review card should stay
// on screen. Total duration scales with the list length so the
// scroll speed feels the same no matter how many reviews you have.
const SECONDS_PER_REVIEW = 10;

// Minimum number of times to duplicate the review list. This is
// bumped up automatically (see effect below) if the container is
// wide enough that this isn't enough to fill it.
const MIN_COPIES = 3;

export default function ReviewScroll() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [numCopies, setNumCopies] = useState(MIN_COPIES);

  const allReviews = useMemo(() => {
    const result: typeof reviews = [];
    for (let i = 0; i < numCopies; i++) {
      result.push(...reviews);
    }
    return result;
  }, [numCopies]);

  useEffect(() => {
    function recalc() {
      if (!wrapperRef.current) return;

      const wrapperWidth = wrapperRef.current.offsetWidth;

      // Make sure there's always enough duplicated content that the
      // track never runs dry while scrolling by one set-width — i.e.
      // the container must never be wider than (numCopies - 1) sets.
      const neededCopies = Math.ceil(wrapperWidth / SET_WIDTH) + 2;

      if (neededCopies > numCopies) {
        setNumCopies(neededCopies);
      }
    }

    recalc();

    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [numCopies]);

  const duration = reviews.length * SECONDS_PER_REVIEW;

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div
        className={styles.track}
        style={
          {
            animationDuration: `${duration}s`,
            "--scroll-distance": `${SET_WIDTH}px`,
          } as React.CSSProperties
        }
      >
        {allReviews.map((review, index) => (
          <div key={index} className={styles.slide}>
            <Review review={review} />
          </div>
        ))}
      </div>
    </div>
  );
}