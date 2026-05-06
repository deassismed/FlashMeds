import type { ReviewRating } from "../../types/progress";

type RatingFeedbackOverlayProps = {
  rating: ReviewRating;
};

const feedbackByRating: Record<
  ReviewRating,
  { label: string; face: string; className: string }
> = {
  again: { label: "Errei", face: ":(", className: "danger" },
  hard: { label: "Dificil", face: ":|", className: "warning" },
  good: { label: "Bom", face: ":)", className: "success" },
  easy: { label: "Facil", face: "**", className: "primary" },
};

export function RatingFeedbackOverlay({ rating }: RatingFeedbackOverlayProps) {
  const feedback = feedbackByRating[rating];

  return (
    <div className="rating-feedback-backdrop" aria-live="polite">
      <div className={`rating-feedback-card ${feedback.className}`} aria-label={feedback.label}>
        <div className="rating-feedback-pulse">
          <span>{feedback.face}</span>
        </div>
      </div>
    </div>
  );
}
