export default function AgendaPage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Hero Section */}
      <section className="w-full border-b border-purple-900/30 py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-normal tracking-tighter mb-4 text-foreground">Agenda de Eventos</h1>
          <p className="text-xl max-w-3xl mx-auto font-light text-muted-foreground">
            Confira os próximos workshops, palestras e eventos da Academia HQ
          </p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-4">
          <p className="text-2xl font-normal tracking-tight text-foreground">Nenhum evento agendado no momento</p>
          <p className="font-light text-muted-foreground">Acompanhe nossas redes sociais para ficar por dentro das próximas datas.</p>
        </div>
      </section>
    </main>
  );
}
