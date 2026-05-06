type StudyProgressProps = {
  current: number;
  total: number;
};

export function StudyProgress({ current, total }: StudyProgressProps) {
  return (
    <div className="study-progress" aria-label="Progresso da sessao">
      <span>
        {current} / {total}
      </span>
      <div>
        <div style={{ width: `${total ? (current / total) * 100 : 0}%` }} />
      </div>
    </div>
  );
}
