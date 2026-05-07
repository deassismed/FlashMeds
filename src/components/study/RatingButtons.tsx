import type { ReviewRating } from "../../types/progress";

type RatingButtonsProps = {
  onRate: (rating: ReviewRating) => void;
  disabled?: boolean;
  controlsSide?: "left" | "right";
  controlsLayout?: "grid" | "row";
};

const ratings: Array<{ value: ReviewRating; label: string; face: string; className: string }> = [
  { value: "again", label: "Errei", face: ":(", className: "danger" },
  { value: "hard", label: "Dificil", face: ":|", className: "warning" },
  { value: "good", label: "Bom", face: ":)", className: "success" },
  { value: "easy", label: "Facil", face: "**", className: "primary" },
];

export function RatingButtons({
  onRate,
  disabled = false,
  controlsSide = "right",
  controlsLayout = "grid",
}: RatingButtonsProps) {
  return (
    <div className={`rating-panel controls-${controlsSide} layout-${controlsLayout}`}>
      <div className="rating-grid">
        {ratings.map((rating) => (
          <button
            className={`rating-button ${rating.className}`}
            key={rating.value}
            type="button"
            disabled={disabled}
            onClick={() => onRate(rating.value)}
            aria-label={rating.label}
            title={rating.label}
          >
            <span className="rating-face">{rating.face}</span>
            <span className="rating-label">{rating.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
