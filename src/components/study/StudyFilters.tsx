import { FilterSelect } from "../common/FilterSelect";
import type { Flashcard, FlashcardDifficulty, FlashcardType } from "../../types/flashcard";

export type StudyFilterState = {
  area: string;
  theme: string;
  difficulty: "" | FlashcardDifficulty;
  type: "" | FlashcardType;
  reviewAll: boolean;
};

export type RatingControlsSide = "left" | "right";
export type RatingControlsLayout = "grid" | "row";

type StudyFiltersProps = {
  flashcards: Flashcard[];
  filters: StudyFilterState;
  ratingControlsLayout: RatingControlsLayout;
  ratingControlsSide: RatingControlsSide;
  onChange: (filters: StudyFilterState) => void;
  onRatingControlsLayoutChange: (layout: RatingControlsLayout) => void;
  onRatingControlsSideChange: (side: RatingControlsSide) => void;
};

export function StudyFilters({
  flashcards,
  filters,
  ratingControlsLayout,
  ratingControlsSide,
  onChange,
  onRatingControlsLayoutChange,
  onRatingControlsSideChange,
}: StudyFiltersProps) {
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
      <label className="field">
        <span>Posicao</span>
        <select
          value={ratingControlsSide}
          onChange={(event) =>
            onRatingControlsSideChange(event.target.value as RatingControlsSide)
          }
        >
          <option value="right">Direita</option>
          <option value="left">Esquerda</option>
        </select>
      </label>
      <label className="field">
        <span>Formato</span>
        <select
          value={ratingControlsLayout}
          onChange={(event) =>
            onRatingControlsLayoutChange(event.target.value as RatingControlsLayout)
          }
        >
          <option value="grid">2 x 2</option>
          <option value="row">Lado a lado</option>
        </select>
      </label>
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
