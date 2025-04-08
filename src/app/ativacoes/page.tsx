import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ativações | Academia HQ",
  description: "Conheça as ativações espirituais disponíveis para potencializar seu caminho de evolução espiritual",
};

export default function AtivacoesPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Ativações</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Potencialize sua jornada espiritual através de ativações energéticas específicas
          </p>
        </div>
      </section>

      {/* Lista de Ativações */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Todas as ativações</h2>
        
        <div className="space-y-12">
          {/* Os 21 dias de prosperidade */}
          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/21dias.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-2">
                  <h3 className="text-2xl font-bold text-foreground mr-2">Os 21 dias de prosperidade</h3>
                  <span className="bg-green-600 text-white text-xs font-bold py-1 px-2 rounded">GRÁTIS</span>
                </div>
                <p className="text-primary mb-4">Duração: 21 dias | Conteúdo Online</p>
                <p className="text-muted-foreground mb-6">
                  O programa "21 dias de prosperidade" é um poderoso processo de transformação energética 
                  que visa reprogramar suas crenças limitantes sobre dinheiro e abundância. 
                  Durante 21 dias, você receberá ativações, meditações guiadas e práticas diárias 
                  que irão ajudá-lo a se alinhar com o fluxo natural da prosperidade.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Abundância</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Reprogramação Mental</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Prática Diária</span>
                </div>
                <Button asChild>
                  <Link href="https://www.youtube.com/watch?v=gDdO06xj6eQ&list=PLX7WSGdI0C0UmFXeO6sD53lEH-uN37iMq&index=21">
                    Começar Agora
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedBorder>

          {/* Ativação Haseya */}
          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/haseya.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Ativação Haseya</h3>
                <p className="text-primary mb-4">Ativação Gravada</p>
                <p className="text-muted-foreground mb-6">
                  A Ativação Haseya é uma poderosa técnica de harmonização energética que visa reconectar você com sua 
                  essência ancestral e sabedoria interior. Inspirada em tradições xamânicas, esta ativação trabalha com 
                  a cura de padrões transgeracionais, liberação de memórias celulares limitantes e fortalecimento da sua 
                  conexão com a Mãe Terra e os elementos da natureza.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Ativação Tecnológica</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Cura Energética</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Conexões Sutis</span>
                </div>
                <Button asChild>
                  <Link href="/ativacoes/haseya">
                    Mais informações
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedBorder>

          {/* Ativação Prosperidade e Propósito */}
          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/prosperidade.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Ativação Prosperidade e Propósito</h3>
                <p className="text-primary mb-4">Ativação Gravada</p>
                <p className="text-muted-foreground mb-6">
                  Esta ativação realinha suas energias com o fluxo natural da abundância e clarifica seu propósito de vida. 
                  Através de técnicas avançadas de reprogramação de crenças limitantes e alinhamento frequencial, você 
                  será conectado ao seu verdadeiro potencial de manifestação e realização. O processo inclui a remoção de 
                  bloqueios energéticos relacionados a prosperidade e a ativação do seu DNA de abundância.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Abundância</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Exu do Ouro</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Manifestação</span>
                </div>
                <Button asChild>
                  <a href="https://pay.hub.la/hnqMTl3dg8UYKupfjphc" target="_blank" rel="noopener noreferrer">
                    Adquirir Ativação
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedBorder>

          {/* Ativação Sexo: Conexão Consciente */}
          <AnimatedBorder>
            <div className="md:flex">
              <div 
                className="md:w-1/3 h-64 md:h-auto"
                style={{
                  backgroundImage: "url('/images/sexo.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">Ativação: Sexo - Conexão Consciente</h3>
                <p className="text-primary mb-4">Ativação Gravada</p>
                <p className="text-muted-foreground mb-6">
                  Esta ativação trabalha com a energia sexual sagrada como uma força criativa e transformadora. Através de técnicas 
                  de ativação do chakra sacral e alinhamento dos canais de energia, você aprenderá a direcionar e elevar 
                  sua energia sexual para potencializar sua criatividade, vitalidade e conexão espiritual. O processo 
                  inclui a limpeza de traumas e crenças limitantes relacionados à sexualidade e a reconexão com o 
                  aspecto divino desta força vital.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Energia Sexual</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Transmutação Energética</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-sm text-muted-foreground">Cura Emocional</span>
                </div>
                <Button asChild>
                  <a href="https://pay.hub.la/Sm9eJcqrVUryVg0TgA1Y" target="_blank" rel="noopener noreferrer">
                    Adquirir Ativação
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedBorder>
        </div>
      </section>

      {/* Informação Adicional */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <AnimatedBorder>
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground text-center">Sobre as Ativações</h2>
            <p className="text-muted-foreground mb-6">
              As ativações energéticas são processos facilitados por Sergio Oliveira, fundador da Academia HQ, 
              que utiliza sua conexão com mentores espirituais e tecnologia energética avançada para potencializar 
              aspectos específicos da sua estrutura energética.
            </p>
            <p className="text-muted-foreground">
              Todas as ativações são gravadas, e incluem orientações. Os efeitos podem 
              ser percebidos imediatamente ou se desenvolverem ao longo das semanas seguintes, dependendo 
              da receptividade energética de cada indivíduo.
            </p>
          </div>
        </AnimatedBorder>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-slate-900 w-full border-y border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Caso tenha alguma dúvida, entre em contato via WhatsApp</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Estamos prontos para ajudar você em sua jornada de despertar
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+esclarecer+uma+d%C3%BAvida+sobre+as+Ativa%C3%A7%C3%B5es&type=phone_number&app_absent=0" 
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