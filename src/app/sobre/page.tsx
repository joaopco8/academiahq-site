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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedBorder>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/images/foto-sergio-v2.png"
                alt="Sergio Oliveira"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedBorder>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Minha História</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Durante boa parte da minha vida, eu procurei respostas, sobre quem eu era, de onde vinha e o que realmente estávamos fazendo aqui.
              </p>
              <p>
                Por muito tempo, me disseram que despertar era seguir mestres, dogmas, ordens espirituais…
              </p>
              <p>
                Mas quanto mais eu estudava, mais percebia que havia algo errado: o sistema que prometia libertação era o mesmo que nos mantinha presos.
              </p>
              <p>
                Foi só quando comecei a entender a estrutura do simulador, essa arquitetura que manipula nossas percepções, emoções e crenças, que tudo começou a fazer sentido.
              </p>
              <p>
                Eu compreendi que não estamos apenas &quot;vivendo experiências espirituais&quot;, mas participando de uma programação cuidadosamente desenhada para limitar a consciência.
              </p>
              <p>
                Meu trabalho aqui não é por acaso.
              </p>
              <p>
                Sou um entrante, parte de um projeto maior de reconexão e desprogramação das consciências.
              </p>
              <p>
                Meu propósito é claro: mostrar caminhos de extração, para que cada pessoa possa se desligar das camadas que a mantêm dentro do simulador, e reconectar-se com a sua origem soberana.
              </p>
              <p>
                Desse propósito nasceu o Método TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA.
              </p>
              <p>
                Um sistema que une técnica, ciência e espiritualidade sob um novo paradigma: o da autonomia.
              </p>
              <p>
                Não é sobre acreditar, é sobre compreender.
              </p>
              <p>
                Não é sobre pedir ajuda, é sobre lembrar como operar sua própria tecnologia interna.
              </p>
              <p>
                Com o tempo, esse trabalho se expandiu, e o que começou como uma ativação se transformou em uma das chaves mais potentes desse processo: o Haseya.
              </p>
              <p>
                Agora com uma nova estrutura vibracional, sustentada por frequências japonesas, o Haseya atua como um ponto de extração e realinhamento, permitindo que você se reconecte de forma segura, lúcida e livre.
              </p>
              <p>
                Hoje, a minha entrega é essa:
              </p>
              <p>
                Ensinar você a operar sua própria consciência, sem intermediários, sem hierarquias e sem dependências.
              </p>
              <p>
                Porque a verdadeira ascensão não é sobre sair da Terra, é sobre sair da simulação.
              </p>
              <p>
                Se você chegou até aqui, não é por acaso.
              </p>
              <p>
                Talvez seja o momento de lembrar quem você é, e o que veio fazer aqui.
              </p>
            </div>
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