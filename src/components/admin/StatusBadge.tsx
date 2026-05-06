import type { FlashcardStatus } from "../../types/flashcard";

type StatusBadgeProps = {
  status: FlashcardStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`status-badge ${status}`}>{status}</span>;
}
