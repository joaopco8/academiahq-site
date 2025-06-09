import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";

export default function AgendaPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Agenda de Eventos</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Confira os próximos workshops, palestras e eventos da Academia HQ
          </p>
        </div>
      </section>

      {/* Eventos em Destaque */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Eventos em Destaque</h2>
        
        <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
          {/* Evento 2 */}
          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-2/5 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/nivel2.jpg?v=1')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-3/5 p-6">
                <div className="bg-green-950 text-green-200 px-3 py-1 rounded-full text-sm inline-block mb-3">
                  Curso Online
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Curso Nível 1</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>17 de agosto de 2025 • 08:00 - 17:00</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Online Via Zoom</span>
                </div>
                <p className="text-muted-foreground mb-6">
                O Curso Nível 1 da Academia HQ tem como objetivo atender aos alunos que estão iniciando sua jornada no despertar consciencial. Sua estrutura é extremamente didática, facilitando o aprendizado e a absorção do conteúdo proposto para quem está dando os primeiros passos na expansão da consciência e desenvolvimento espiritual.
                </p>
                <div className="flex justify-between items-center">
                  <Button asChild>
                    <Link href="/cursos/nivel1">
                      Conhecer Conteúdo do Curso
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedBorder>
        </div>
      </section>
    </main>
  );
} 