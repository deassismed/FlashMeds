import { useEffect, useMemo, useRef, useState } from "react";
import { EmptyState } from "../components/common/EmptyState";
import { RatingFeedbackOverlay } from "../components/study/RatingFeedbackOverlay";
import { StudyCard } from "../components/study/StudyCard";
import { StudyFilters, type StudyFilterState } from "../components/study/StudyFilters";
import { StudyProgress } from "../components/study/StudyProgress";
import { getPublishedFlashcards } from "../services/flashcardStorage";
import { getUserProgress, saveUserCardProgress } from "../services/progressStorage";
import { buildStudyQueue } from "../spacedRepetition/buildStudyQueue";
import { calculateNextReview } from "../spacedRepetition/calculateNextReview";
import type { Flashcard } from "../types/flashcard";
import { LOCAL_USER_ID, type ReviewRating, type UserCardProgress } from "../types/progress";

type StudyPageProps = {
  onBack: () => void;
};

const initialFilters: StudyFilterState = {
  area: "",
  theme: "",
  difficulty: "",
  type: "",
  reviewAll: false,
};

export function StudyPage({ onBack }: StudyPageProps) {
  const [flashcards] = useState<Flashcard[]>(() => getPublishedFlashcards());
  const [progress, setProgress] = useState<UserCardProgress[]>(() => getUserProgress(LOCAL_USER_ID));
  const [filters, setFilters] = useState<StudyFilterState>(initialFilters);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState<ReviewRating | null>(null);
  const [isCardLeaving, setIsCardLeaving] = useState(false);
  const advanceTimeoutRef = useRef<number | null>(null);
  const feedbackTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (advanceTimeoutRef.current) {
        window.clearTimeout(advanceTimeoutRef.current);
      }

      if (feedbackTimeoutRef.current) {
        window.clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  const progressByCardId = useMemo(
    () =>
      Object.fromEntries(
        progress.map((item) => [item.flashcardId, item] as const),
      ) as Record<string, UserCardProgress>,
    [progress],
  );

  const filteredFlashcards = useMemo(
    () =>
      flashcards.filter((flashcard) => {
        return (
          (!filters.area || flashcard.area === filters.area) &&
          (!filters.theme || flashcard.theme === filters.theme) &&
          (!filters.difficulty || flashcard.difficulty === filters.difficulty) &&
          (!filters.type || flashcard.type === filters.type)
        );
      }),
    [flashcards, filters],
  );

  const queue = useMemo(
    () =>
      buildStudyQueue(filteredFlashcards, progressByCardId, {
        reviewAll: filters.reviewAll,
      }),
    [filteredFlashcards, filters.reviewAll, progressByCardId],
  );

  const currentFlashcard = queue[0];
  const sessionTotal = answeredCount + queue.length;

  function handleRate(rating: ReviewRating) {
    if (!currentFlashcard || feedbackRating) {
      return;
    }

    const ratedFlashcard = currentFlashcard;
    const currentProgress = progressByCardId[currentFlashcard.id];

    setFeedbackRating(rating);
    setIsCardLeaving(true);

    advanceTimeoutRef.current = window.setTimeout(() => {
      const updatedProgress = calculateNextReview({
        userId: LOCAL_USER_ID,
        flashcardId: ratedFlashcard.id,
        progress: currentProgress,
        rating,
      });

      setProgress(saveUserCardProgress(updatedProgress));
      setAnsweredCount((count) => count + 1);
      setIsAnswerVisible(false);
      setIsCardLeaving(false);
      advanceTimeoutRef.current = null;
    }, 1000);

    feedbackTimeoutRef.current = window.setTimeout(() => {
      setFeedbackRating(null);
      feedbackTimeoutRef.current = null;
    }, 2000);
  }

  return (
    <main className="page-shell study-shell">
      <header className="study-topbar">
        <button className="icon-button" type="button" aria-label="Voltar" onClick={onBack}>
          x
        </button>
        <StudyProgress current={answeredCount} total={sessionTotal} />
        <button
          className="icon-button"
          type="button"
          aria-label="Ajustes"
          onClick={() => setAreFiltersVisible((visible) => !visible)}
        >
          ...
        </button>
      </header>

      <div className="study-filter-slot">
        {areFiltersVisible ? (
          <StudyFilters flashcards={flashcards} filters={filters} onChange={setFilters} />
        ) : null}
      </div>

      {currentFlashcard ? (
        <StudyCard
          key={currentFlashcard.id}
          flashcard={currentFlashcard}
          isAnswerVisible={isAnswerVisible}
          onReveal={() => setIsAnswerVisible(true)}
          onHideAnswer={() => setIsAnswerVisible(false)}
          onRate={handleRate}
          isRatingDisabled={Boolean(feedbackRating)}
          isLeaving={isCardLeaving}
        />
      ) : (
        <EmptyState
          title="Nenhum card disponivel"
          description="Nao ha cards publicados vencidos para estes filtros. Ative revisar todos ou ajuste os filtros."
        />
      )}

      {feedbackRating ? <RatingFeedbackOverlay rating={feedbackRating} /> : null}
    </main>
  );
}
