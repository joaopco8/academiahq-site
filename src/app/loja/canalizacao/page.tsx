import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canalização do Seu Mentor Pessoal | Academia HQ",
  description: "Conecte-se com seus mentores espirituais através da arte canalizada",
};

export default function CanalizacaoPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Canalização do Seu Mentor Pessoal</h1>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground">
            Uma conexão profunda com seus guias espirituais através da arte
          </p>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img 
              src="/images/canalizacao.jpg" 
              alt="Canalização do Mentor Pessoal" 
              className="w-full rounded-lg shadow-lg border border-border"
            />

            <div className="mt-8 p-6 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-foreground">Detalhes do Serviço</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Duas ilustrações canalizadas (digital)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Uma representação de frequência terrestre</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Uma representação de frequência estelar</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Descrição e interpretação das imagens</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Tempo de entrega: até 15 dias úteis</span>
                </li>
              </ul>

              <div className="mt-6">
                <p className="text-2xl font-bold text-foreground mb-4">R$ 800,00</p>
                <Button 
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white" 
                  asChild
                >
                  <a 
                    href="https://docs.google.com/forms/d/1Ia8jMruxZaYrRIVu5jBEbn_mFoN84-dBmJzu6h88QEM/viewform?edit_requested=true#responses" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
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
                    Solicitar Canalização
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">O que é a Canalização do Mentor Pessoal?</h2>
            <p className="text-muted-foreground mb-6">
              A Canalização do Mentor Pessoal é um serviço exclusivo da Academia HQ onde, através de técnicas avançadas de conexão, Sergio Oliveira acessa o campo de frequências que o envolve e canaliza, artisticamente, representações visuais dos seus mentores espirituais.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">Como funciona?</h3>
            <p className="text-muted-foreground mb-6">
              Através de uma conexão estabelecida com seu campo energético (apenas com seu nome e data de nascimento), Sergio realiza um trabalho de sintonia e canalização para captar e traduzir visualmente os seres que o acompanham e guiam em sua jornada espiritual.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">O que você recebe?</h3>
            <p className="text-muted-foreground mb-6">
              Você receberá duas ilustrações digitais: uma representando um ser de frequência terrestre e outra de frequência estelar que estão conectados à sua jornada. Além das imagens, você receberá uma descrição e interpretação de cada ser canalizado, com informações sobre suas características, propósitos e como se relacionam com você.
            </p>
            
            <h3 className="text-xl font-bold mb-4 text-foreground">Benefícios</h3>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Fortalecimento da conexão com seus guias espirituais</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Maior compreensão sobre sua jornada espiritual</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Orientação para seu desenvolvimento espiritual</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Peça de arte personalizada com profundo significado espiritual</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 