import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedBorder } from "@/components/animated-border";

export default function SobrePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Sobre Sergio Oliveira</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Conheça um pouco sobre mim, o fundador da Academia HQ.
          </p>
        </div>
      </section>

      {/* Sobre Nós */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedBorder>
            <div 
              className="h-80 overflow-hidden"
              style={{
                backgroundImage: "url('/images/sobresergio.jpg?v=1')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
            </div>
          </AnimatedBorder>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Minha História</h2>
            <p className="text-muted-foreground mb-4">
            Há mais de 20 anos venho buscando e desenvolvendo possibilidades para um autoconhecimento eficaz. Ao longo desta jornada conheci várias ferramentas para auxilar neste processo infinito. Destaco entre elas, algumas que me trouxeram até aqui: PNL - Programação Neurolínguistica, CNV - Comunicação Não Violenta, Inteligência Emocional, Constelação Sistêmica, Coaching Sistêmico; Apometria Quântica, Cura Quântica Estelar, Orixá Reiki, Método Ascencional Melquizedeck e Voronandeck, Up Grade Cura Quântica Estelar (ROMETRIA). Se você está aqui, é por que talvez você faça parte desta &quot;família cósmica&quot; que está se unindo para retornar para casa.
            </p>
            <p className="text-muted-foreground mb-4">
            Este trabalho tem por objetivo fazer uma conexão com nossas equipes &quot;espirituais&quot; e, na medida do possível, através do despertar da consciência, promover a cura de nosso corpo físico, favorecer o alinhamento com nossos corpos sutis, e, sempre que possível ampliar a visão sobre o Universo.

Sou o canalizador do MÉTODO TEAC - Tecnologia Espiritual Ascensional Canopeana - onde tenho a honra de ofertar para você o que de maior pode haver na nobreza do despertar: SUA AUTONOMIA NA VERTICALIZAÇÃO.
            </p>
            <p className="text-muted-foreground">
            Conheça os cursos que ofereço e acredite, assim como muitos, você é capaz de fazer TUDO SOZINHO, você ainda não foi conectado com as informações e estruturas corretas.

Não há nada de espiritual, apenas tecnologia...

Seja bem-vindo (a) a mais uma etapa no seu processo de despertar.
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 px-4 bg-slate-950 w-full border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Pilares da conexão com o plano astral</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedBorder>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Alinhamento Energético</h3>
                <p className="text-muted-foreground">
                  Para se conectar com planos sutis, é essencial que sua energia esteja em equilíbrio. Isso significa cuidar do seu campo vibracional, limpar interferências externas e fortalecer sua conexão interna para evitar distorções e bloqueios.
                </p>
              </div>
            </AnimatedBorder>
            
            <AnimatedBorder>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Método e Intenção</h3>
                <p className="text-muted-foreground">
                  A comunicação espiritual não acontece de forma aleatória. É preciso ter um método claro e uma intenção bem definida para acessar as frequências corretas. Técnicas como foco mental, elevação vibracional e comandos específicos ajudam a estabelecer uma conexão segura e confiável.
                </p>
              </div>
            </AnimatedBorder>
            
            <AnimatedBorder>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Interpretação e Aplicação</h3>
                <p className="text-muted-foreground">
                  Receber informações é apenas o começo. O mais importante é interpretar corretamente e aplicar esse conhecimento na sua vida. A verdadeira comunicação espiritual gera transformação e traz clareza para suas escolhas e seu caminho.
                </p>
              </div>
            </AnimatedBorder>
          </div>
        </div>
      </section>
    </main>
  );
} 