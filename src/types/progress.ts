export type ReviewRating = "again" | "hard" | "good" | "easy";

export type UserCardProgress = {
  id: string;
  userId: string;
  flashcardId: string;
  reviewCount: number;
  correctCount: number;
  wrongCount: number;
  easeFactor: number;
  intervalDays: number;
  lastReviewedAt?: string;
  nextReviewAt: string;
  lastRating?: ReviewRating;
};

export const LOCAL_USER_ID = "local-user";
