import type { Flashcard } from "../types/flashcard";
import type { UserCardProgress } from "../types/progress";
import { isDue } from "../utils/date";

export type StudyQueueOptions = {
  reviewAll?: boolean;
  now?: Date;
};

export function buildStudyQueue(
  flashcards: Flashcard[],
  progressByCardId: Record<string, UserCardProgress>,
  options: StudyQueueOptions = {},
): Flashcard[] {
  const now = options.now ?? new Date();

  const groupedByPriority = flashcards
    .filter((flashcard) => {
      const progress = progressByCardId[flashcard.id];
      return options.reviewAll || !progress || isDue(progress.nextReviewAt, now);
    })
    .reduce<Record<number, Flashcard[]>>((groups, flashcard) => {
      const priority = getPriority(progressByCardId[flashcard.id]);
      groups[priority] = [...(groups[priority] ?? []), flashcard];
      return groups;
    }, {});

  return Object.entries(groupedByPriority)
    .sort(([firstPriority], [secondPriority]) => Number(secondPriority) - Number(firstPriority))
    .flatMap(([, priorityFlashcards]) => shuffle(priorityFlashcards));
}

function getPriority(progress?: UserCardProgress): number {
  if (!progress) {
    return 20;
  }

  if (progress.lastRating === "again") {
    return 50;
  }

  if (progress.lastRating === "hard") {
    return 40;
  }

  return 30;
}

function shuffle<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }

  return shuffled;
}
