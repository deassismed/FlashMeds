import { useMemo, useState } from "react";
import { AdminFilters, type AdminFilterState } from "../components/admin/AdminFilters";
import { FlashcardForm } from "../components/admin/FlashcardForm";
import { FlashcardList } from "../components/admin/FlashcardList";
import { EmptyState } from "../components/common/EmptyState";
import { PageHeader } from "../components/common/PageHeader";
import {
  deleteFlashcard,
  getAllFlashcards,
  saveFlashcard,
} from "../services/flashcardStorage";
import type { Flashcard, FlashcardStatus } from "../types/flashcard";
import { toIsoDate } from "../utils/date";

type AdminPageProps = {
  onBack: () => void;
};

const initialFilters: AdminFilterState = {
  query: "",
  status: "",
  area: "",
};

export function AdminPage({ onBack }: AdminPageProps) {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(() => getAllFlashcards());
  const [editingFlashcard, setEditingFlashcard] = useState<Flashcard>();
  const [filters, setFilters] = useState<AdminFilterState>(initialFilters);

  const areas = useMemo(
    () => Array.from(new Set(flashcards.map((flashcard) => flashcard.area))).sort(),
    [flashcards],
  );

  const filteredFlashcards = useMemo(() => {
    const query = filters.query.trim().toLowerCase();

    return flashcards.filter((flashcard) => {
      const matchesQuery =
        !query ||
        [flashcard.question, flashcard.answer, flashcard.theme, flashcard.area]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return (
        matchesQuery &&
        (!filters.status || flashcard.status === filters.status) &&
        (!filters.area || flashcard.area === filters.area)
      );
    });
  }, [flashcards, filters]);

  function handleSave(flashcard: Flashcard) {
    setFlashcards(saveFlashcard(flashcard));
    setEditingFlashcard(undefined);
  }

  function handleStatusChange(flashcard: Flashcard, status: FlashcardStatus) {
    setFlashcards(
      saveFlashcard({
        ...flashcard,
        status,
        updatedAt: toIsoDate(),
      }),
    );
  }

  function handleDelete(id: string) {
    const shouldDelete = window.confirm("Excluir este flashcard permanentemente?");

    if (shouldDelete) {
      setFlashcards(deleteFlashcard(id));
      if (editingFlashcard?.id === id) {
        setEditingFlashcard(undefined);
      }
    }
  }

  return (
    <main className="page-shell admin-shell">
      <PageHeader
        title="Administracao"
        subtitle="Criacao, revisao e publicacao dos flashcards"
        onBack={onBack}
      />

      <section className="admin-layout">
        <FlashcardForm
          editingFlashcard={editingFlashcard}
          onSave={handleSave}
          onCancel={() => setEditingFlashcard(undefined)}
        />

        <section>
          <AdminFilters filters={filters} areas={areas} onChange={setFilters} />
          {filteredFlashcards.length ? (
            <FlashcardList
              flashcards={filteredFlashcards}
              selectedId={editingFlashcard?.id}
              onEdit={setEditingFlashcard}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ) : (
            <EmptyState
              title="Nenhum flashcard encontrado"
              description="Ajuste os filtros ou cadastre um novo card."
            />
          )}
        </section>
      </section>
    </main>
  );
}
