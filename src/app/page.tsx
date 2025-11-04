import Banner from '@/components/Banner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedBorder } from '@/components/animated-border';
import Link from 'next/link';

export default function Home() {
  // Dados dos banners
  const banners = [
    {
      id: 2,
      title: "Curso Nível 1",
      description: "Fundamentos para Despertar Consciencial. Próxima turma em 18 de janeiro de 2026.",
      buttonText: "Inscreva-se",
      buttonLink: "/cursos/nivel1",
      imageUrl: "/images/galaxy",
    },
    {
      id: 1,
      title: "Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA",
            description: "Conheça o método único TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA que combina tecnologia espiritual e conexão astral para transformar sua jornada de despertar",
      buttonText: "Conheça o método",
      buttonLink: "/cursos",
      imageUrl: "/images/teac",
    },
    {
      id: 3,
      title: "Atendimentos Online",
      description: "Agende seu atendimento online com Sergio Oliveira, fundador da Academia HQ",
      buttonText: "Agende agora",
      buttonLink: "/atendimentos",
      imageUrl: "/images/atendimento",
    },
  ];

  console.log("Enviando banners para o componente:", banners); // Depuração

  return (
    <main className="flex flex-col items-center">
      {/* Banner principal com carrossel */}
      <Banner banners={banners} />

      {/* Courses Section */}
      <section className="py-16 px-4 bg-slate-950 w-full border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Em Destaque</h2>
          
          {/* Curso Nível 1 - Em Destaque */}
          <div className="mb-12 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-green-500 to-primary rounded-2xl blur-lg opacity-50"></div>
            <AnimatedBorder>
              <div className="relative bg-slate-900 rounded-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto min-h-[300px] flex-shrink-0">
                    <img 
                      src="/images/SITE-NIVEL1.jpg"
                      alt="Curso Nível 1 - O Poder do Conhecimento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 relative">
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      EM DESTAQUE
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground mt-2">Curso Nível 1</h3>
                    <p className="text-primary mb-2 font-semibold">18 de janeiro de 2026 • 08:00 - 17:00</p>
                    <p className="text-primary mb-4 text-sm">Duração: 1 dia | Curso Online Ao vivo</p>
                    <p className="text-muted-foreground mb-4">
                      Este curso tem por objetivo atender aos alunos que estão iniciando sua jornada no despertar consciencial. Sua estrutura é extremamente didática, facilitando o aprendizado e a absorção do conteúdo proposto para quem está dando os primeiros passos na expansão da consciência e desenvolvimento espiritual.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">Atendimento</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">Auto-atendimento</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">Interação energética</span>
                    </div>
                    <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
                      <Link href="/cursos/nivel1">
                        Inscreva-se Agora
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedBorder>
          </div>

          {/* Outros cursos */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA",
                description: "Descubra o revolucionário método que está transformando a forma de aprender e ensinar.",
                image: "/images/teac.jpg?v=1",
                link: "https://teachq.com.br"
              },
              {
                title: "21 Dias de Prosperidade",
                description: "Transforme sua vida com nosso programa exclusivo de prosperidade e abundância.",
                image: "https://img.youtube.com/vi/O0rB357GylU/maxresdefault.jpg",
                link: "https://www.youtube.com/watch?v=O0rB357GylU&list=PLX7WSGdI0C0UmFXeO6sD53lEH-uN37iMq"
              },
            ].map((course, index) => (
              <AnimatedBorder key={index}>
                <div className="flex flex-col h-full">
                  <div 
                    className="h-48 w-full"
                    style={{
                      backgroundImage: `url('${course.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  </div>
                  <div className="p-5 pt-0 flex-grow">
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>
                  <div className="p-5">
                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80" asChild>
                      {course.link.startsWith('/') ? (
                        <Link href={course.link}>
                          Saiba mais →
                        </Link>
                      ) : (
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          Saiba mais →
                        </a>
                      )}
                    </Button>
                  </div>
                </div>
              </AnimatedBorder>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Sobre a Academia HQ</h2>
            <p className="text-muted-foreground mb-6">
              A Academia HQ é a ponte entre espiritualidade e tecnologia, trazendo um método inovador para acessar, interagir e transformar realidades no plano astral. Nossa abordagem combina conhecimento energético avançado com técnicas modernas de conexão e proteção, permitindo que você desenvolva autonomia e precisão na sua jornada espiritual.
            </p>
            <p className="text-muted-foreground">
              Aqui, a Academia HQ vai além da teoria: utilizamos protocolos estruturados, inspirados em sistemas inteligentes, para otimizar a interação com dimensões sutis. O resultado? Uma conexão clara, segura e livre de interferências.
            </p>
          </div>
          <AnimatedBorder>
            <div 
              className="h-80 overflow-hidden"
              style={{
                backgroundImage: "url('/images/sobre-academia.jpg?v=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </div>
          </AnimatedBorder>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Estude pelo YouTube</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                Acesse conteúdo exclusivo da Academia HQ através do nosso canal no YouTube. Aprenda técnicas, 
                assista a palestras e amplie seus conhecimentos com vídeos educativos que irão transformar sua 
                forma de perceber o mundo espiritual.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button size="lg" className="font-bold bg-red-600 hover:bg-red-700 text-white" asChild>
                  <a 
                    href="https://www.youtube.com/@apometriahq" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    Acesse nosso canal
                  </a>
                </Button>
              </div>
            </div>
            <AnimatedBorder>
              <div className="aspect-video w-full overflow-hidden">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/P5c7saR6rCo?si=_7_uvVrqqqqqqqq"
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </AnimatedBorder>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-16 px-4 w-full border-y border-slate-800 bg-slate-950"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Alguma dúvida?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Entre em contato via WhatsApp
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://wa.me/5514998525760?text=Ol%C3%A1%2C%20gostaria%20de%20esclarecer%20uma%20d%C3%BAvida%20sobre%20a%20Academia%20HQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Fale conosco no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
