export type FlashcardType =
  | "clinico"
  | "diagnostico"
  | "conduta"
  | "medicamento"
  | "caso_clinico"
  | "rastreamento"
  | "prevencao";

export type FlashcardStatus = "rascunho" | "publicado" | "arquivado";

export type FlashcardDifficulty = "facil" | "medio" | "dificil";

export type Flashcard = {
  id: string;
  type: FlashcardType;
  question: string;
  answer: string;
  theme: string;
  area: string;
  difficulty: FlashcardDifficulty;
  status: FlashcardStatus;
  source?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export const FLASHCARD_TYPES: FlashcardType[] = [
  "clinico",
  "diagnostico",
  "conduta",
  "medicamento",
  "caso_clinico",
  "rastreamento",
  "prevencao",
];

export const FLASHCARD_STATUSES: FlashcardStatus[] = [
  "rascunho",
  "publicado",
  "arquivado",
];

export const FLASHCARD_DIFFICULTIES: FlashcardDifficulty[] = [
  "facil",
  "medio",
  "dificil",
];
