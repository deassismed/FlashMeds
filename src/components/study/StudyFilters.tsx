import { FilterSelect } from "../common/FilterSelect";
import type { Flashcard, FlashcardDifficulty, FlashcardType } from "../../types/flashcard";

export type StudyFilterState = {
  area: string;
  theme: string;
  difficulty: "" | FlashcardDifficulty;
  type: "" | FlashcardType;
  reviewAll: boolean;
};

type StudyFiltersProps = {
  flashcards: Flashcard[];
  filters: StudyFilterState;
  onChange: (filters: StudyFilterState) => void;
};

export function StudyFilters({ flashcards, filters, onChange }: StudyFiltersProps) {
  const areas = unique(flashcards.map((flashcard) => flashcard.area));
  const themes = unique(flashcards.map((flashcard) => flashcard.theme));
  const difficulties = unique(flashcards.map((flashcard) => flashcard.difficulty));
  const types = unique(flashcards.map((flashcard) => flashcard.type));

  return (
    <section className="filters compact-filters">
      <FilterSelect
        label="Area"
        value={filters.area}
        options={areas}
        onChange={(area) => onChange({ ...filters, area })}
      />
      <FilterSelect
        label="Tema"
        value={filters.theme}
        options={themes}
        onChange={(theme) => onChange({ ...filters, theme })}
      />
      <FilterSelect
        label="Dificuldade"
        value={filters.difficulty}
        options={difficulties}
        onChange={(difficulty) =>
          onChange({ ...filters, difficulty: difficulty as StudyFilterState["difficulty"] })
        }
      />
      <FilterSelect
        label="Tipo"
        value={filters.type}
        options={types}
        onChange={(type) => onChange({ ...filters, type: type as StudyFilterState["type"] })}
      />
      <label className="toggle-field">
        <input
          type="checkbox"
          checked={filters.reviewAll}
          onChange={(event) => onChange({ ...filters, reviewAll: event.target.checked })}
        />
        <span>Revisar todos</span>
      </label>
    </section>
  );
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values)).sort((first, second) => first.localeCompare(second));
}
