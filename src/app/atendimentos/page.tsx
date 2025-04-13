import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { AnimatedBorder } from "@/components/animated-border";

export const metadata: Metadata = {
  title: "Atendimentos | Academia HQ",
  description: "Conheça nosso serviço de atendimento online",
};

export default function AtendimentosPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Atendimentos</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Agende seu atendimento personalizado com Sergio Oliveira
          </p>
        </div>
      </section>
      
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          <AnimatedBorder>
            <div>
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/images/atendimento-desktop.jpg" 
                  alt="Consulta Individual" 
                  className="w-full absolute top-0 left-0 max-h-none"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Consulta Individual</h3>
                <div className="mb-6">
                  <p className="text-lg text-muted-foreground mb-4">
                    Atendimento personalizado com Sergio Oliveira, fundador da Academia HQ. 
                    Nesta consulta você receberá orientações específicas para o seu desenvolvimento espiritual e energético.
                  </p>
                  <ul className="space-y-2 text-muted-foreground mb-6">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Duração: 1 hora</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Atendimento personalizado</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Online via Zoom ou Presencial em Vitória-ES</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="font-bold text-2xl text-foreground order-2 sm:order-1">
                    R$ 400,00
                  </span>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto order-1 sm:order-2 bg-green-600 hover:bg-green-700 text-white" 
                    asChild
                  >
                    <a 
                      href="https://wa.me/5527997648551?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento.%20Qual%20o%20pr%C3%B3ximo%20passo%3F"
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
                      Agendar pelo WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedBorder>
        </div>
      </div>
    </main>
  );
}
