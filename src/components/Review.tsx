import { useMemo } from "react";
import styles from "./Components.module.css";

export interface Review {
  name: string;
  text: string;
  stars: number;
}

interface GoogleReviewProps {
  review: Review;
}

const COLORS = [
  "#4285F4",
  "#EA4335",
  "#FBBC05",
  "#34A853",
  "#7E57C2",
  "#00ACC1",
  "#F4511E",
  "#8E24AA",
  "#5E35B1",
  "#43A047",
];

function stringToColor(name: string) {
  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return COLORS[Math.abs(hash) % COLORS.length];
} 

export default function Review({ review }: GoogleReviewProps) {
  const avatarColor = useMemo(() => stringToColor(review.name), [review.name]);

  const initial = review.name.charAt(0).toUpperCase();

  return (
    <div className={styles.review}>
        <div className={styles.header}>
        <div
            className={styles.avatar}
            style={{ backgroundColor: avatarColor }}
        >
            {initial}
        </div>

        <div>
            <div className={styles.name}>{review.name}</div>

            <div className={styles.stars}>
            {Array.from({ length: 5 }, (_, i) => (
                <span
                key={i}
                className={
                    i < review.stars ? styles.filledStar : styles.emptyStar
                }
                >
                ★
                </span>
            ))}
            </div>
        </div>
        </div>

        <p className={styles.text}>{review.text}</p>
    </div>
    );
}