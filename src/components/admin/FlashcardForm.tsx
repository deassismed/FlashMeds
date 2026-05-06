import { useEffect, useState } from "react";
import {
  FLASHCARD_DIFFICULTIES,
  FLASHCARD_STATUSES,
  FLASHCARD_TYPES,
  type Flashcard,
  type FlashcardDifficulty,
  type FlashcardStatus,
  type FlashcardType,
} from "../../types/flashcard";
import { createId } from "../../utils/ids";
import { toIsoDate } from "../../utils/date";

type FlashcardFormProps = {
  editingFlashcard?: Flashcard;
  onSave: (flashcard: Flashcard) => void;
  onCancel: () => void;
};

type FormState = {
  type: FlashcardType;
  question: string;
  answer: string;
  theme: string;
  area: string;
  difficulty: FlashcardDifficulty;
  status: FlashcardStatus;
  source: string;
  notes: string;
};

const emptyForm: FormState = {
  type: "clinico",
  question: "",
  answer: "",
  theme: "",
  area: "",
  difficulty: "medio",
  status: "rascunho",
  source: "",
  notes: "",
};

export function FlashcardForm({ editingFlashcard, onSave, onCancel }: FlashcardFormProps) {
  const [form, setForm] = useState<FormState>(emptyForm);

  useEffect(() => {
    if (!editingFlashcard) {
      setForm(emptyForm);
      return;
    }

    setForm({
      type: editingFlashcard.type,
      question: editingFlashcard.question,
      answer: editingFlashcard.answer,
      theme: editingFlashcard.theme,
      area: editingFlashcard.area,
      difficulty: editingFlashcard.difficulty,
      status: editingFlashcard.status,
      source: editingFlashcard.source ?? "",
      notes: editingFlashcard.notes ?? "",
    });
  }, [editingFlashcard]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const now = toIsoDate();

    onSave({
      id: editingFlashcard?.id ?? createId("card"),
      ...form,
      createdAt: editingFlashcard?.createdAt ?? now,
      updatedAt: now,
    });

    if (!editingFlashcard) {
      setForm(emptyForm);
    }
  }

  return (
    <form className="flashcard-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2>{editingFlashcard ? "Editar flashcard" : "Novo flashcard"}</h2>
        {editingFlashcard ? (
          <button className="ghost-button" type="button" onClick={onCancel}>
            Cancelar
          </button>
        ) : null}
      </div>

      <label className="field">
        <span>Pergunta</span>
        <textarea
          required
          value={form.question}
          onChange={(event) => setForm({ ...form, question: event.target.value })}
        />
      </label>

      <label className="field">
        <span>Resposta</span>
        <textarea
          required
          value={form.answer}
          onChange={(event) => setForm({ ...form, answer: event.target.value })}
        />
      </label>

      <div className="form-grid">
        <label className="field">
          <span>Tipo</span>
          <select
            value={form.type}
            onChange={(event) => setForm({ ...form, type: event.target.value as FlashcardType })}
          >
            {FLASHCARD_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Dificuldade</span>
          <select
            value={form.difficulty}
            onChange={(event) =>
              setForm({ ...form, difficulty: event.target.value as FlashcardDifficulty })
            }
          >
            {FLASHCARD_DIFFICULTIES.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Status</span>
          <select
            value={form.status}
            onChange={(event) =>
              setForm({ ...form, status: event.target.value as FlashcardStatus })
            }
          >
            {FLASHCARD_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Tema</span>
          <input
            required
            value={form.theme}
            onChange={(event) => setForm({ ...form, theme: event.target.value })}
          />
        </label>

        <label className="field">
          <span>Area medica</span>
          <input
            required
            value={form.area}
            onChange={(event) => setForm({ ...form, area: event.target.value })}
          />
        </label>

        <label className="field">
          <span>Fonte</span>
          <input
            value={form.source}
            onChange={(event) => setForm({ ...form, source: event.target.value })}
          />
        </label>
      </div>

      <label className="field">
        <span>Notas editoriais</span>
        <textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} />
      </label>

      <button className="primary-button" type="submit">
        Salvar flashcard
      </button>
    </form>
  );
}
