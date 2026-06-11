import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ativações | Academia HQ",
  description: "Conheça as ativações espirituais disponíveis para potencializar seu caminho de evolução espiritual",
};

const WA_ATIVACOES = "https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+esclarecer+uma+d%C3%BAvida+sobre+as+Ativa%C3%A7%C3%B5es&type=phone_number&app_absent=0";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function AtivacoesPage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Hero Section */}
      <section className="w-full border-b border-purple-900/30 py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-normal tracking-tighter mb-4 text-foreground">Ativações</h1>
          <p className="text-xl max-w-3xl mx-auto font-light text-muted-foreground">
            Potencialize sua jornada espiritual através de ativações energéticas específicas
          </p>
        </div>
      </section>

      {/* Lista de Ativações */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-3xl font-normal tracking-tighter mb-10 text-center text-foreground">Todas as ativações</h2>

        <div className="space-y-12">
          {/* Os 21 dias de prosperidade */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{ backgroundImage: "url('/images/21dias.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
              ></div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-2">
                  <h3 className="text-2xl font-normal tracking-tighter text-foreground mr-2">Os 21 dias de prosperidade</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-normal"
                    style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#6ee7b7" }}>
                    GRÁTIS
                  </span>
                </div>
                <p className="text-primary font-light mb-4">Duração: 21 dias | Conteúdo Online</p>
                <p className="font-light text-muted-foreground mb-6">
                  O programa &quot;21 dias de prosperidade&quot; é um poderoso processo de transformação energética que visa reprogramar suas crenças limitantes sobre dinheiro e abundância. Durante 21 dias, você receberá ativações, meditações guiadas e práticas diárias que irão ajudá-lo a se alinhar com o fluxo natural da prosperidade.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Abundância</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Reprogramação Mental</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Prática Diária</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=gDdO06xj6eQ&list=PLX7WSGdI0C0UmFXeO6sD53lEH-uN37iMq&index=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn glass-btn-indigo inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Começar Agora
                </a>
              </div>
            </div>
          </AnimatedBorder>

          {/* D'JHON RHU'O */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #030712 0%, #041a0f 100%)", minHeight: "240px" }}
              >
                <svg viewBox="0 0 200 200" fill="none" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                  <circle cx="100" cy="100" r="90" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="6 4" />
                  <circle cx="100" cy="100" r="68" stroke="#10b981" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="46" stroke="#d4af37" strokeWidth="0.6" strokeDasharray="3 5" />
                  <polygon points="100,10 190,155 10,155" stroke="#10b981" strokeWidth="0.5" fill="none" />
                  <polygon points="100,190 10,45 190,45" stroke="#d4af37" strokeWidth="0.4" fill="none" />
                </svg>
                <div className="relative z-10 text-center">
                  <p className="text-4xl font-normal tracking-widest" style={{
                    background: "linear-gradient(135deg, #d4af37, #f5e17a, #a07d1c)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "0.15em",
                  }}>
                    D&apos;JHON<br />RHU&apos;O
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-normal tracking-tighter text-foreground">D&apos;JHON RHU&apos;O</h3>
                  <span className="text-xs font-normal py-1 px-2 rounded-full" style={{ background: "#d4af3720", color: "#d4af37", border: "1px solid #d4af3740" }}>ATIVAÇÃO</span>
                </div>
                <p className="text-primary font-light mb-4">Ativação Consciencial</p>
                <p className="font-light text-muted-foreground mb-6">
                  Uma ativação voltada para quebra de criptografias conscienciais, expansão de leitura da simulação e reorganização da percepção fora dos padrões de aprisionamento. Não se trata de crença — é um processo de percepção, alinhamento e reorganização interna.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Quebra de Criptografia</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Expansão de Lucidez</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Leitura da Simulação</span>
                </div>
                <Link
                  href="/ativacoes/djhon-rhuo"
                  className="glass-btn glass-btn-indigo inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>
          </AnimatedBorder>

          {/* Ativação Haseya */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{ backgroundImage: "url('/images/haseya.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
              ></div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tighter mb-2 text-foreground">Ativação Haseya</h3>
                <p className="text-primary font-light mb-4">Ativação Gravada</p>
                <p className="font-light text-muted-foreground mb-6">
                  A &quot;Ativação Haseya&quot; é canalizada para elevar sua conexão com seus mentores espirituais e proporcionar experiências espirituais inéditas. Esta ativação utiliza um conjunto exclusivo de técnicas conhecidas como Haseya, desenvolvidas especificamente para facilitar uma conexão espiritual autônoma e independente.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Ativação Tecnológica</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Cura Energética</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Conexões Sutis</span>
                </div>
                <Link
                  href="/ativacoes/haseya"
                  className="glass-btn glass-btn-indigo inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>
          </AnimatedBorder>

          {/* Ativação Prosperidade e Propósito */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{ backgroundImage: "url('/images/prosperidade.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
              ></div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tighter mb-2 text-foreground">Ativação Prosperidade e Propósito</h3>
                <p className="text-primary font-light mb-4">Ativação Gravada</p>
                <p className="font-light text-muted-foreground mb-6">
                  A ativação Prosperidade e Propósito foi criada para alinhar sua energia com o fluxo natural da abundância e clareza do seu propósito, enquanto encarnado. Utilizando técnicas avançadas de reprogramação energética, removemos bloqueios que impedem sua realização e ativamos frequências que impulsionam sua prosperidade.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Abundância</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Exu do Ouro</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Manifestação</span>
                </div>
                <a
                  href="https://pay.hub.la/hnqMTl3dg8UYKupfjphc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn glass-btn-purple inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Adquirir Ativação
                </a>
              </div>
            </div>
          </AnimatedBorder>

          {/* Ativação Sexo: Conexão Consciente */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{ backgroundImage: "url('/images/sexo.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
              ></div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tighter mb-2 text-foreground">Ativação: Sexo - Conexão Consciente</h3>
                <p className="text-primary font-light mb-4">Ativação Gravada</p>
                <p className="font-light text-muted-foreground mb-6">
                  Sexo - Conexão Consciente é uma ativação transformadora que propõe um novo olhar sobre a sexualidade, ajudando as pessoas a ressignificarem suas experiências e a desbloquearem traumas que podem estar impactando sua vida íntima e emocional.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Energia Sexual</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Transmutação Energética</span>
                  <span className="px-3 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-sm">Cura Emocional</span>
                </div>
                <a
                  href="https://pay.hub.la/Sm9eJcqrVUryVg0TgA1Y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn glass-btn-purple inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Adquirir Ativação
                </a>
              </div>
            </div>
          </AnimatedBorder>
        </div>
      </section>

      {/* Informação Adicional */}
      <section className="py-12 px-4 max-w-6xl mx-auto w-full relative z-10">
        <AnimatedBorder>
          <div className="p-8">
            <h2 className="text-2xl font-normal tracking-tighter mb-4 text-foreground text-center">Sobre as Ativações</h2>
            <p className="font-light text-muted-foreground mb-6">
              As ativações energéticas são processos facilitados por Sergio Oliveira, fundador da Academia HQ, que utiliza sua conexão com mentores espirituais e tecnologia energética avançada para potencializar aspectos específicos da sua estrutura energética.
            </p>
            <p className="font-light text-muted-foreground">
              Todas as ativações são gravadas e incluem orientações. Os efeitos podem ser percebidos imediatamente ou se desenvolverem ao longo das semanas seguintes, dependendo da receptividade energética de cada indivíduo.
            </p>
          </div>
        </AnimatedBorder>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 border-y border-purple-900/30 w-full relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-normal tracking-tighter mb-6 text-foreground">Caso tenha alguma dúvida, entre em contato via WhatsApp</h2>
          <p className="font-light text-lg mb-8 text-muted-foreground">
            Estamos prontos para ajudar você em sua jornada de despertar
          </p>
          <a
            href={WA_ATIVACOES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-normal text-white bg-green-700 hover:bg-green-600 transition-colors"
          >
            <WaIcon />
            Fale conosco no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
