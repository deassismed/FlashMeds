import type { Flashcard } from "../../types/flashcard";
import { RatingButtons } from "./RatingButtons";
import type { ReviewRating } from "../../types/progress";
import { AutoFitText } from "./AutoFitText";

type StudyCardProps = {
  flashcard: Flashcard;
  isAnswerVisible: boolean;
  onReveal: () => void;
  onHideAnswer: () => void;
  onRate: (rating: ReviewRating) => void;
  isRatingDisabled?: boolean;
  isLeaving?: boolean;
  ratingControlsSide?: "left" | "right";
  ratingControlsLayout?: "grid" | "row";
};

export function StudyCard({
  flashcard,
  isAnswerVisible,
  onReveal,
  onHideAnswer,
  onRate,
  isRatingDisabled = false,
  isLeaving = false,
  ratingControlsSide = "right",
  ratingControlsLayout = "grid",
}: StudyCardProps) {
  const visibleText = isAnswerVisible ? flashcard.answer : flashcard.question;
  const fitConfig = isAnswerVisible
    ? { maxFontSize: 46, minFontSize: 23, lineHeight: 1.16 }
    : { maxFontSize: 64, minFontSize: 28, lineHeight: 1.12 };

  return (
    <article
      className={`study-card ${isAnswerVisible ? "answer-visible" : ""} ${
        isLeaving ? "card-leaving" : ""
      }`}
    >
      <button
        key={`${flashcard.id}-${isAnswerVisible ? "answer" : "question"}`}
        className="prompt flip-card"
        type="button"
        onClick={isAnswerVisible ? onHideAnswer : onReveal}
        aria-label={isAnswerVisible ? "Voltar a pergunta" : "Ver resposta"}
      >
        <div className="flip-card-inner">
          <div className="card-symbol">{isAnswerVisible ? "ok" : "?"}</div>
          <AutoFitText className="fit-text" {...fitConfig}>
            {visibleText}
          </AutoFitText>
        </div>
      </button>

      {isAnswerVisible ? (
        <RatingButtons
          controlsLayout={ratingControlsLayout}
          controlsSide={ratingControlsSide}
          disabled={isRatingDisabled}
          onRate={onRate}
        />
      ) : null}
    </article>
  );
}
