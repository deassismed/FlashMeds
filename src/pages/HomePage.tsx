type HomePageProps = {
  onNavigate: (page: "study" | "admin") => void;
};

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="home-page">
      <section className="home-panel">
        <div className="app-mark">FM</div>
        <p className="eyebrow">FlashMEDs</p>
        <h1>Estude medicina em cards curtos</h1>
        <p>Revisoes simples, progresso individual e conteudo medico publicado pelo editor.</p>
        <div className="phone-preview" aria-hidden="true">
          <div className="preview-top">
            <span>3 / 20</span>
            <i />
          </div>
          <div className="preview-card">
            <div className="preview-icon">?</div>
            <strong>Conduta inicial na crise asmatica?</strong>
          </div>
        </div>
        <div className="home-actions">
          <button className="primary-button" type="button" onClick={() => onNavigate("study")}>
            Estudar flashcards
          </button>
          <button className="secondary-button" type="button" onClick={() => onNavigate("admin")}>
            Administracao
          </button>
        </div>
      </section>
    </main>
  );
}
