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
};

export function StudyCard({
  flashcard,
  isAnswerVisible,
  onReveal,
  onHideAnswer,
  onRate,
  isRatingDisabled = false,
  isLeaving = false,
}: StudyCardProps) {
  const visibleText = isAnswerVisible ? flashcard.answer : flashcard.question;
  const fitConfig = isAnswerVisible
    ? { maxFontSize: 42, minFontSize: 21, lineHeight: 1.18 }
    : { maxFontSize: 58, minFontSize: 26, lineHeight: 1.14 };

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
        <RatingButtons disabled={isRatingDisabled} onRate={onRate} />
      ) : null}
    </article>
  );
}
