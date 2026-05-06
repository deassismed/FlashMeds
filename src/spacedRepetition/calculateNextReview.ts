import type { ReviewRating, UserCardProgress } from "../types/progress";
import { addDays, toIsoDate } from "../utils/date";
import { createId } from "../utils/ids";

const DEFAULT_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;

type ReviewInput = {
  userId: string;
  flashcardId: string;
  progress?: UserCardProgress;
  rating: ReviewRating;
  reviewedAt?: Date;
};

export function createInitialProgress(userId: string, flashcardId: string): UserCardProgress {
  return {
    id: createId("progress"),
    userId,
    flashcardId,
    reviewCount: 0,
    correctCount: 0,
    wrongCount: 0,
    easeFactor: DEFAULT_EASE_FACTOR,
    intervalDays: 0,
    nextReviewAt: toIsoDate(new Date()),
  };
}

export function calculateNextReview({
  userId,
  flashcardId,
  progress,
  rating,
  reviewedAt = new Date(),
}: ReviewInput): UserCardProgress {
  const current = progress ?? createInitialProgress(userId, flashcardId);
  const reviewCount = current.reviewCount + 1;
  const isWrong = rating === "again";
  const correctCount = current.correctCount + (isWrong ? 0 : 1);
  const wrongCount = current.wrongCount + (isWrong ? 1 : 0);
  const easeFactor = getNextEaseFactor(current.easeFactor, rating);
  const intervalDays = getNextInterval(current.intervalDays, easeFactor, rating);

  return {
    ...current,
    reviewCount,
    correctCount,
    wrongCount,
    easeFactor,
    intervalDays,
    lastReviewedAt: toIsoDate(reviewedAt),
    nextReviewAt: toIsoDate(addDays(reviewedAt, intervalDays)),
    lastRating: rating,
  };
}

function getNextEaseFactor(currentEaseFactor: number, rating: ReviewRating): number {
  const adjustmentByRating: Record<ReviewRating, number> = {
    again: -0.25,
    hard: -0.15,
    good: 0,
    easy: 0.15,
  };

  return Math.max(MIN_EASE_FACTOR, round(currentEaseFactor + adjustmentByRating[rating]));
}

function getNextInterval(
  currentIntervalDays: number,
  easeFactor: number,
  rating: ReviewRating,
): number {
  if (rating === "again") {
    return 0;
  }

  if (currentIntervalDays === 0) {
    return rating === "hard" ? 1 : rating === "easy" ? 4 : 2;
  }

  if (rating === "hard") {
    return Math.max(1, Math.ceil(currentIntervalDays * 1.2));
  }

  if (rating === "easy") {
    return Math.ceil(currentIntervalDays * (easeFactor + 0.6));
  }

  return Math.ceil(currentIntervalDays * easeFactor);
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}
