import type { Flashcard, FlashcardStatus } from "../../types/flashcard";
import { formatShortDate } from "../../utils/date";
import { StatusBadge } from "./StatusBadge";

type FlashcardListProps = {
  flashcards: Flashcard[];
  selectedId?: string;
  onEdit: (flashcard: Flashcard) => void;
  onDelete: (id: string) => void;
  onStatusChange: (flashcard: Flashcard, status: FlashcardStatus) => void;
};

export function FlashcardList({
  flashcards,
  selectedId,
  onEdit,
  onDelete,
  onStatusChange,
}: FlashcardListProps) {
  return (
    <div className="admin-list">
      {flashcards.map((flashcard) => (
        <article
          className={`admin-card ${selectedId === flashcard.id ? "selected" : ""}`}
          key={flashcard.id}
        >
          <div className="admin-card-header">
            <StatusBadge status={flashcard.status} />
            <span>{flashcard.area}</span>
          </div>
          <h3>{flashcard.question}</h3>
          <p>{flashcard.theme} · {flashcard.type} · {flashcard.difficulty}</p>
          <small>Atualizado em {formatShortDate(flashcard.updatedAt)}</small>
          <div className="admin-actions">
            <button type="button" onClick={() => onEdit(flashcard)}>
              Editar
            </button>
            <button type="button" onClick={() => onStatusChange(flashcard, "publicado")}>
              Publicar
            </button>
            <button type="button" onClick={() => onStatusChange(flashcard, "rascunho")}>
              Rascunho
            </button>
            <button type="button" onClick={() => onStatusChange(flashcard, "arquivado")}>
              Arquivar
            </button>
            <button className="danger-text" type="button" onClick={() => onDelete(flashcard.id)}>
              Excluir
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
