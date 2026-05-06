import type { ReviewRating } from "../../types/progress";

type RatingButtonsProps = {
  onRate: (rating: ReviewRating) => void;
  disabled?: boolean;
};

const ratings: Array<{ value: ReviewRating; label: string; face: string; className: string }> = [
  { value: "again", label: "Errei", face: ":(", className: "danger" },
  { value: "hard", label: "Dificil", face: ":|", className: "warning" },
  { value: "good", label: "Bom", face: ":)", className: "success" },
  { value: "easy", label: "Facil", face: "**", className: "primary" },
];

export function RatingButtons({ onRate, disabled = false }: RatingButtonsProps) {
  return (
    <div className="rating-grid">
      {ratings.map((rating) => (
        <button
          className={`rating-button ${rating.className}`}
          key={rating.value}
          type="button"
          disabled={disabled}
          onClick={() => onRate(rating.value)}
        >
          <span className="rating-face">{rating.face}</span>
          <span>{rating.label}</span>
        </button>
      ))}
    </div>
  );
}
