import { FilterSelect } from "../common/FilterSelect";
import type { FlashcardStatus } from "../../types/flashcard";

export type AdminFilterState = {
  query: string;
  status: "" | FlashcardStatus;
  area: string;
};

type AdminFiltersProps = {
  filters: AdminFilterState;
  areas: string[];
  onChange: (filters: AdminFilterState) => void;
};

export function AdminFilters({ filters, areas, onChange }: AdminFiltersProps) {
  return (
    <section className="filters admin-filters">
      <label className="field search-field">
        <span>Buscar</span>
        <input
          value={filters.query}
          placeholder="Pergunta, tema ou area"
          onChange={(event) => onChange({ ...filters, query: event.target.value })}
        />
      </label>
      <FilterSelect
        label="Status"
        value={filters.status}
        options={["rascunho", "publicado", "arquivado"]}
        onChange={(status) => onChange({ ...filters, status: status as AdminFilterState["status"] })}
      />
      <FilterSelect
        label="Area"
        value={filters.area}
        options={areas}
        onChange={(area) => onChange({ ...filters, area })}
      />
    </section>
  );
}
