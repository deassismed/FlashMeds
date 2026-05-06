type PageHeaderProps = {
  title: string;
  subtitle?: string;
  onBack?: () => void;
};

export function PageHeader({ title, subtitle, onBack }: PageHeaderProps) {
  return (
    <header className="page-header">
      {onBack ? (
        <button className="ghost-button" type="button" onClick={onBack}>
          Voltar
        </button>
      ) : null}
      <div>
        <h1>{title}</h1>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </header>
  );
}
