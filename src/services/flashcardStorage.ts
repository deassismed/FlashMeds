import { seedFlashcards } from "../data/seedFlashcards";
import type { Flashcard } from "../types/flashcard";

const FLASHCARDS_KEY = "flashmeds.flashcards.v1";

function readFlashcards(): Flashcard[] {
  const stored = localStorage.getItem(FLASHCARDS_KEY);

  if (!stored) {
    localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(seedFlashcards));
    return seedFlashcards;
  }

  try {
    const flashcards = JSON.parse(stored) as Flashcard[];
    const existingIds = new Set(flashcards.map((flashcard) => flashcard.id));
    const missingSeedCards = seedFlashcards.filter(
      (flashcard) => !existingIds.has(flashcard.id),
    );

    if (missingSeedCards.length) {
      const merged = [...flashcards, ...missingSeedCards];
      localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(merged));
      return merged;
    }

    return flashcards;
  } catch {
    localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(seedFlashcards));
    return seedFlashcards;
  }
}

function writeFlashcards(flashcards: Flashcard[]): void {
  localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(flashcards));
}

export function getAllFlashcards(): Flashcard[] {
  return readFlashcards();
}

export function getPublishedFlashcards(): Flashcard[] {
  return readFlashcards().filter((flashcard) => flashcard.status === "publicado");
}

export function saveFlashcard(flashcard: Flashcard): Flashcard[] {
  const flashcards = readFlashcards();
  const exists = flashcards.some((item) => item.id === flashcard.id);
  const updated = exists
    ? flashcards.map((item) => (item.id === flashcard.id ? flashcard : item))
    : [flashcard, ...flashcards];

  writeFlashcards(updated);
  return updated;
}

export function deleteFlashcard(id: string): Flashcard[] {
  const updated = readFlashcards().filter((flashcard) => flashcard.id !== id);
  writeFlashcards(updated);
  return updated;
}
