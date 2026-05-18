import Banner from '@/components/Banner';
import MatrixRain from '@/components/matrix-rain';
import WhatsAppButton from '@/components/whatsapp-button';
import { AnimatedBorder } from '@/components/animated-border';
import { ArticleCard, ArticleCardProps } from '@/components/ui/card-23';
import { VideoPlayer } from '@/components/ui/video-thumbnail-player';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .glass-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .glass-btn:hover {
          transform: translateY(-2px) scale(1.03);
        }
        .glass-btn:active {
          transform: translateY(0) scale(0.98);
        }
        .glass-btn-indigo:hover {
          background: rgba(99,102,241,0.22) !important;
          border-color: rgba(99,102,241,0.55) !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.14), 0 10px 36px rgba(99,102,241,0.35) !important;
        }
        .glass-btn-purple:hover {
          background: rgba(168,85,247,0.22) !important;
          border-color: rgba(168,85,247,0.55) !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.14), 0 10px 36px rgba(168,85,247,0.35) !important;
        }
      `}} />
      <MatrixRain />
      {/* Banner principal */}
      <Banner />

      {/* Em Destaque Section */}
      <section className="py-16 px-4 w-full border-y border-purple-900/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-normal tracking-tighter mb-12 text-center text-foreground">
            No que podemos contribuir com o seu despertar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(
              [
                {
                  tag: "Atendimentos",
                  title: "Atendimentos",
                  description: "Sessões online com Sergio Oliveira para orientação espiritual personalizada e proteção energética.",
                  imageUrl: "/images/atendimento-img.png",
                  imageAlt: "Atendimentos Academia HQ",
                  href: "/atendimentos",
                },
                {
                  tag: "Cursos",
                  title: "Cursos",
                  description: "Estruturas de aprendizado para quem busca desenvolver lucidez, percepção mediúnica e autonomia na própria jornada consciencial.",
                  imageUrl: "/images/cursos-img.png",
                  imageAlt: "Cursos Academia HQ",
                  href: "/cursos",
                },
                {
                  tag: "Ativações",
                  title: "Ativações",
                  description: "Ativações energéticas criptografadas para expansão da consciência e alinhamento com esferas superiores.",
                  imageUrl: "/images/ativacoes-img.png",
                  imageAlt: "Ativações Academia HQ",
                  href: "/ativacoes",
                },
              ] as ArticleCardProps[]
            ).map((card, i) => (
              <ArticleCard key={i} {...card} className="max-w-none w-full" />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto border-b border-purple-900/30 w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-normal tracking-tighter mb-4 text-foreground">Sobre a Academia HQ</h2>
            <p className="font-light text-lg text-muted-foreground mb-6">
              A Academia HQ é a ponte entre espiritualidade e tecnologia, trazendo um método inovador para acessar, interagir e transformar realidades no plano astral. Nossa abordagem combina conhecimento energético avançado com técnicas modernas de conexão e proteção, permitindo que você desenvolva autonomia e precisão na sua jornada espiritual.
            </p>
            <p className="font-light text-lg text-muted-foreground">
              Aqui, a Academia HQ vai além da teoria: utilizamos protocolos estruturados, inspirados em sistemas inteligentes, para otimizar a interação com dimensões sutis. O resultado? Uma conexão clara, segura e livre de interferências.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/cursos"
                className="glass-btn glass-btn-indigo inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                style={{
                  background: "rgba(99,102,241,0.12)",
                  border: "1px solid rgba(99,102,241,0.3)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 24px rgba(99,102,241,0.2)",
                }}
              >
                Ver Cursos
              </Link>
              <Link
                href="/atendimentos"
                className="glass-btn glass-btn-purple inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                style={{
                  background: "rgba(168,85,247,0.12)",
                  border: "1px solid rgba(168,85,247,0.3)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 24px rgba(168,85,247,0.2)",
                }}
              >
                Agendar Atendimento
              </Link>
            </div>
          </div>
          <AnimatedBorder>
            <div 
              className="h-80 overflow-hidden"
              style={{
                backgroundImage: "url('/images/sobre.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </div>
          </AnimatedBorder>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 w-full relative z-10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-3xl font-normal tracking-tighter mb-4 text-foreground">Estude pelo YouTube</h2>
          <p className="font-light text-lg text-muted-foreground mb-8">
            Acesse conteúdo exclusivo da Academia HQ no nosso canal e amplie seus conhecimentos sobre espiritualidade e tecnologia astral.
          </p>
          <VideoPlayer
            thumbnailUrl="https://img.youtube.com/vi/GxyK1Y7zsus/maxresdefault.jpg"
            videoUrl="https://www.youtube.com/embed/GxyK1Y7zsus?autoplay=1&start=1"
            title="Estude pelo YouTube"
            description="Acesse conteúdo exclusivo da Academia HQ no nosso canal"
            externalHref="https://www.youtube.com/@apometriahq"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 w-full border-y border-purple-900/30 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-normal tracking-tighter text-foreground">
            Pronto para expandir sua consciência?
          </h2>
          <p className="font-light text-lg text-muted-foreground">
            Se algo dentro de você já sabe que existe mais além do que está vivendo, estamos aqui para caminhar junto nesse processo. Fale com a gente.
          </p>
          <WhatsAppButton />
        </div>
      </section>
    </main>
  );
}
