import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ativação Haseya | Academia HQ",
  description: "Reconecte-se com sua essência ancestral e sabedoria interior através da Ativação Haseya",
};

export default function HaseyaPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Ativação Haseya</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Reconecte-se com sua essência
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 px-4 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">O que é a Ativação Haseya?</h2>
            <p className="text-muted-foreground mb-6">
              A "Ativação Haseya" é canalizado para elevar sua conexão com seus mentores espirituais e 
              proporcionar experiências espirituais inéditas. Esta ativação utiliza um conjunto exclusivo 
              de ativações e técnicas conhecidas como Haseya, desenvolvidas especificamente para facilitar 
              uma conexão espiritual autônoma e independente.
            </p>
            <p className="text-muted-foreground mb-6">
              Ao longo da ativação, você será guiado por uma série de práticas e ensinamentos que irão 
              ajudá-lo a mergulhar profundamente em sua própria essência espiritual. O objetivo é 
              capacitá-lo a entrar em contato profundo consigo mesmo, promovendo uma reconexão com sua 
              verdadeira natureza e com o universo espiritual que o rodeia.
            </p>
            <p className="text-muted-foreground mb-6">
              Através das ativações Haseya, você aprenderá a abrir e fortalecer canais de comunicação 
              com seus mentores espirituais, permitindo uma troca contínua e enriquecedora de sabedoria 
              e orientação. Essas práticas visam desenvolver sua capacidade de receber insights intuitivos, 
              mensagens e suporte diretamente de suas guias espirituais, sem a necessidade de intermediários.
            </p>
            <p className="text-muted-foreground mb-6">
              Além disso, a ativação enfatiza a importância da autossuficiência emocional e espiritual. 
              Ao aprofundar sua conexão espiritual, você aprenderá a encontrar dentro de si mesmo o amor, 
              a paz e a satisfação que frequentemente são buscados externamente. O Haseya promove a ideia 
              de que, ao fortalecer sua conexão interna e espiritual, você se torna mais independente e 
              resiliente, capaz de enfrentar os desafios da vida com uma perspectiva mais equilibrada e harmoniosa.
            </p>
          </div>
          <div 
            className="h-80 md:h-auto rounded-lg"
            style={{
              backgroundImage: "url('/images/haseya.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
          </div>
        </div>

        {/* Vídeo */}
        <AnimatedBorder className="mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Assista a explicação do Haseya</h2>
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/xtpycyb7Als" 
                title="Ativação Haseya - Amostra" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </AnimatedBorder>

       
      </section>

      

      {/* Call to Action */}
      <section className="py-16 px-4 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Pronto para elevar sua frequência?</h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Inicie sua jornada de reconexão com a sabedoria ancestral e transforme sua vida com a Ativação Haseya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-bold" asChild>
              <a href="https://pay.hub.la/0802Az8wOuiIpXznXQ0a" target="_blank" rel="noopener noreferrer">
                Adquirir Ativação
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+esclarecer+uma+d%C3%BAvida+sobre+a+Ativa%C3%A7%C3%A3o+Haseya&type=phone_number&app_absent=0" 
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
                Quero tirar minhas dúvidas
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 