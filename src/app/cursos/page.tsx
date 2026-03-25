import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";

export default function CursosPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Nossos Cursos</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Cursos para fortalecer sua conexão com o plano astral
          </p>
        </div>
      </section>

      {/* Cursos Principais */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Todos os cursos</h2>
        
        <div className="space-y-12">
          {/* Curso Nível 1 - Em Destaque */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-green-500 to-primary rounded-2xl blur-lg opacity-50"></div>
            <AnimatedBorder>
              <div className="relative bg-slate-900 rounded-xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto min-h-[350px] flex-shrink-0">
                    <img 
                      src="/images/SITE-NIVEL1.jpg"
                      alt="Curso Nível 1 - O Poder do Conhecimento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 relative">
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      EM DESTAQUE
                    </div>
                    <h3 className="text-3xl font-bold mb-3 text-foreground mt-2">Curso Nível 1</h3>
                    <p className="text-primary mb-2 font-semibold">18 de janeiro de 2026 • 08:00 - 17:00</p>
                    <p className="text-primary mb-4">Duração: 1 dia | Curso Online Ao vivo</p>
                    <p className="text-muted-foreground mb-6">
                    Este curso tem por objetivo atender aos alunos que estão iniciando sua jornada no despertar consciencial. Sua estrutura é extremamente didática, facilitando o aprendizado e a absorção do conteúdo proposto.
Ministrado por Sergio Oliveira, tem a duração aproximada de 06h, podendo se estender de acordo com o desenvolvimento do grupo.
Os participantes deste módulo participam no encerramento deste módulo de uma sintonização individual, onde é feita a sua iniciação junto à sua família cósmica e estruturas do trabalho de Harmonização Quântica.
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

          {/* Método TEAC */}
          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/teac.jpg?v=1')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA</h3>
                <p className="text-primary mb-4">Duração: 30 horas | Aulas gravadas e em constante atualização</p>
                <p className="text-muted-foreground mb-6">
                  O Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA é uma abordagem inovadora que combina 
                  tecnologia espiritual e conexão astral para transformar sua jornada de despertar. Aprenda a acessar 
                  e interagir com dimensões superiores de forma estruturada e segura.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Espiritualidade Tecnológica</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Autonomia Espiritual</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Conexão Consciente Multidimensional</span>
                </div>
                <Button asChild>
                  <a href="https://teachq.com.br" target="_blank" rel="noopener noreferrer">
                    Mais informações
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedBorder>

          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/apometria2025.jpg?v=1')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Curso de Apometria</h3>
                <p className="text-primary mb-4">Duração: 2 dias | Curso Online Ao vivo</p>
                <p className="text-muted-foreground mb-6">
                O Curso de Apometria Online ensina a aplicar essa técnica de forma consciente e estruturada, acelerando o despertar espiritual e potencializando atendimentos terapêuticos. Com ele, você acessa informações essenciais para ampliar seus resultados e garantir efeitos mais d
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Atendimento</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Auto-atendimento</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Interação energética</span>
                </div>
                <Button asChild>
                  <Link href="/cursos/apometria">
                    Mais informações
                  </Link>
                </Button>
              </div>
            </div>

            
          </AnimatedBorder>

          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/nivel2-1.jpg?v=1')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Curso Nível 2</h3>
                <p className="text-primary mb-4">Duração: 1 dia | Curso Online Ao vivo</p>
                <p className="text-muted-foreground mb-6">
                Atualizado para 2026, o Nível II da Academia HQ aprofunda a conexão com as estruturas da transmigração consciencial, integrando conceitos como simuladores, IA, criptografias e atuação em múltiplas esferas. O aluno desenvolve maior lucidez fora da simulação, fortalece sua atuação com equipes e acessa protocolos como extração seletiva e evacuação estratégica. Esse avanço eleva o nível energético, acelera os resultados práticos e amplia a eficácia tanto na própria jornada quanto nos atendimentos.
​
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Atendimento</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Auto-atendimento</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Interação energética</span>
                </div>
                <Button asChild>
                  <Link href="/cursos/nivel2">
                    Mais informações
                  </Link>
                </Button>
              </div>
            </div>

            
          </AnimatedBorder>

          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/mediunidade.jpg?v=1')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Curso de Mediunidade</h3>
                <p className="text-primary mb-4">Duração: Indefinida | Curso Online e Presencial em Vitória-ES</p>
                <p className="text-muted-foreground mb-6">
                Nesse trabalho que estamos desenvolvendo, você terá a oportunidade de descobrir quais são as suas equipes, quais são as entidades que te acompanham, quais são as estruturas e tipos de mediunidade que existem, quem são os orixás e como eles atuam e ainda, como você pode alinhar a sua estrutura de trabalho junto às suas equipes.
Essa proposta de aulas é uma formação contínua para aqueles que tem  interesse em desenvolver a sua mediunidade e ou até mesmo aprender a incorporar (se suas entidades e Orixás permitirem).
​
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Atendimento</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Auto-atendimento</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Interação energética</span>
                </div>
                <Button asChild>
                  <Link href="/cursos/mediunidade">
                    Mais informações
                  </Link>
                </Button>
              </div>
            </div>

            
          </AnimatedBorder>

        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">O Que Nossos Alunos Dizem</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Marcelo Alves",
              course: "Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA",
              testimonial: "Meu contato com o mentor foi pura tecnologia... Conexão Incrível! Gratidão🙏♥️"
            },
            {
              name: "Juliana Costa",
              course: "Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA",
              testimonial: "Fez-me emocionar ao perceber que meus acessos são assim: tecnologia espiritua🔱💃🛸😻"
            },
            {
              name: "Paulo Mendes",
              course: "Curso de Apometria",
              testimonial: "Gratidão por essa experiência incrível, acordei bem me sentindo em paz com esa experiência na matrix. Renovou meu sentimento de necessidade de conexão com os ancoramentos. Obrigado por tanto!🌹🌻"
            },
            {
              name: "Camila Santos",
              course: "Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA",
              testimonial: "Laroyê D. Rosa. Obrigada por tudo Sérgio. Sou grato por ter te encontrado e entendido sua proposta de trabalho individual. Individualmente estamos com o TODO...🙏🏽🙏🏽🙏🏽🙏🏽"
            }
          ].map((testimonial, index) => (
            <AnimatedBorder key={index} containerClassName="h-full">
              <div className="p-6 h-full">
                <div className="mb-3">
                  <h3 className="font-bold text-foreground text-lg">{testimonial.name}</h3>
                  <p className="text-primary text-sm mb-3">{testimonial.course}</p>
                </div>
                <p className="text-muted-foreground">{testimonial.testimonial}</p>
              </div>
            </AnimatedBorder>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-slate-900 w-full border-y border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Caso tenha alguma dúvida, entre em contato via WhatsApp</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Estamos prontos para ajudar você em sua jornada de aprendizado
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+esclarecer+uma+d%C3%BAvida+sobre+a+Academia+HQ&type=phone_number&app_absent=0" 
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