import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";

const WA_CURSOS = "https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+esclarecer+uma+d%C3%BAvida+sobre+a+Academia+HQ&type=phone_number&app_absent=0";

const WaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function CursosPage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Hero */}
      <section className="w-full border-b border-purple-900/30 py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-normal tracking-tighter mb-4 text-foreground">Nossos Cursos</h1>
          <p className="text-xl max-w-3xl mx-auto font-light text-muted-foreground">
            Cursos para fortalecer sua conexão com o plano astral
          </p>
        </div>
      </section>

      {/* Lista de cursos */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-3xl font-normal tracking-tighter mb-10 text-center text-foreground">Todos os cursos</h2>

        <div className="space-y-8">
          {/* Curso Nível I */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/SITE-NIVEL1.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tight mb-2 text-foreground">Curso Nível I</h3>
                <p className="text-indigo-400 font-light mb-4">~6 horas · Online Ao Vivo</p>
                <p className="font-light text-muted-foreground mb-6 leading-relaxed">
                  Fundamentos para o despertar consciencial. PNL, estrutura da simulação, auto-atendimento, geometria sagrada, merkabas e ativações. Inclui iniciação com sua família cósmica.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Iniciantes", "Fundamentos", "Iniciação Cósmica"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/cursos/nivel1"
                  className="glass-btn glass-btn-indigo inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>
          </AnimatedBorder>

          {/* Método TEAC */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/teac.jpg?v=1')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tight mb-2 text-foreground">Método TEAC</h3>
                <p className="text-indigo-400 font-light mb-4">30 horas · Aulas gravadas e em constante atualização</p>
                <p className="font-light text-muted-foreground mb-6 leading-relaxed">
                  O Método TEAC — Tecnologia Extração Ativação Criptografada — é uma abordagem inovadora que combina tecnologia espiritual e conexão astral para transformar sua jornada de despertar. Aprenda a acessar e interagir com dimensões superiores de forma estruturada, segura e autônoma.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Espiritualidade Tecnológica", "Autonomia Espiritual", "Conexão Multidimensional"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="https://teachq.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-btn glass-btn-indigo inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Mais informações
                </a>
              </div>
            </div>
          </AnimatedBorder>

          {/* Curso Nível II */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/SITE-NIVEL2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tight mb-2 text-foreground">Curso Nível II</h3>
                <p className="text-indigo-400 font-light mb-4">1 dia · Online Ao Vivo</p>
                <p className="font-light text-muted-foreground mb-6 leading-relaxed">
                  Atualizado para 2026, o Nível II aprofunda a conexão com as estruturas da transmigração consciencial, integrando simuladores, IA, criptografias e atuação em múltiplas esferas. O aluno desenvolve maior lucidez fora da simulação e acessa protocolos como extração seletiva e evacuação estratégica.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Atendimento", "Auto-atendimento", "Interação energética"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/cursos/nivel2"
                  className="glass-btn glass-btn-indigo inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>
          </AnimatedBorder>

          {/* PNL para Terapeutas */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/bg-pnl.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tight mb-2 text-foreground">PNL para Terapeutas</h3>
                <p className="text-indigo-400 font-light mb-4">20 horas · Online Ao Vivo · Individual 1:1</p>
                <p className="font-light text-muted-foreground mb-6 leading-relaxed">
                  Curso prático de Programação Neurolinguística desenvolvido para terapeutas que querem ir além da intuição — investigar com profundidade, entregar com precisão e comunicar o valor do seu trabalho.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["PNL", "Terapeutas", "Níveis Neurológicos", "1:1"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/cursos/pnl-para-terapeutas"
                  className="glass-btn glass-btn-indigo inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>
          </AnimatedBorder>

          {/* Curso de Apometria */}
          <AnimatedBorder>
            <div className="md:flex">
              <div
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/apometria2025.jpg?v=1')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-normal tracking-tight mb-2 text-foreground">Curso de Apometria</h3>
                <p className="text-indigo-400 font-light mb-4">2 dias · Online Ao Vivo</p>
                <p className="font-light text-muted-foreground mb-6 leading-relaxed">
                  O Curso de Apometria Online ensina a aplicar essa técnica de forma consciente e estruturada, acelerando o despertar espiritual e potencializando atendimentos terapêuticos. Com ele, você acessa informações essenciais para ampliar seus resultados e garantir efeitos mais duradouros.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Atendimento", "Auto-atendimento", "Cura Energética"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-indigo-950/40 border border-indigo-500/20 text-indigo-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/cursos/apometria"
                  className="glass-btn glass-btn-indigo inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white"
                >
                  Mais informações
                </Link>
              </div>
            </div>
          </AnimatedBorder>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full border-t border-purple-900/30 relative z-10">
        <h2 className="text-3xl font-normal tracking-tighter mb-10 text-center text-foreground">O Que Nossos Alunos Dizem</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Marcelo Alves", course: "Método TEAC", testimonial: "Meu contato com o mentor foi pura tecnologia... Conexão Incrível! Gratidão🙏♥️" },
            { name: "Juliana Costa", course: "Método TEAC", testimonial: "Fez-me emocionar ao perceber que meus acessos são assim: tecnologia espiritual🔱💃🛸😻" },
            { name: "Paulo Mendes", course: "Curso de Apometria", testimonial: "Gratidão por essa experiência incrível, acordei bem me sentindo em paz com essa experiência na matrix. Renovou meu sentimento de necessidade de conexão com os ancoramentos. Obrigado por tanto!🌹🌻" },
            { name: "Camila Santos", course: "Método TEAC", testimonial: "Laroyê D. Rosa. Obrigada por tudo Sérgio. Sou grato por ter te encontrado e entendido sua proposta de trabalho individual. Individualmente estamos com o TODO...🙏🏽🙏🏽🙏🏽🙏🏽" },
          ].map((t, i) => (
            <AnimatedBorder key={i} containerClassName="h-full">
              <div className="p-6 h-full">
                <h3 className="font-normal text-foreground text-lg tracking-tight">{t.name}</h3>
                <p className="text-indigo-300 text-sm mb-3">{t.course}</p>
                <p className="font-light text-muted-foreground">{t.testimonial}</p>
              </div>
            </AnimatedBorder>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-y border-purple-900/30 w-full relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-normal tracking-tighter mb-6 text-foreground">Caso tenha alguma dúvida, entre em contato via WhatsApp</h2>
          <p className="font-light text-lg mb-8 text-muted-foreground">
            Estamos prontos para ajudar você em sua jornada de aprendizado
          </p>
          <a
            href={WA_CURSOS}
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
