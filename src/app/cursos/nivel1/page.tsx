import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Nivel1Page() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section 
        className="w-full bg-slate-950 border-b border-slate-800 py-8 md:py-12 px-4 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Imagem principal */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex-shrink-0">
              <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/SITE-NIVEL1.jpg"
                  alt="Curso Nível 1 - O Poder do Conhecimento"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Conteúdo destacado */}
            <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
              <div className="inline-block bg-green-950 text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Próxima Turma
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Curso Nível 1
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-300 font-semibold">
                O Poder do Conhecimento
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                Fundamentos para Despertar Consciencial • Online Via Zoom
              </p>
              
              {/* Destaque da data */}
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center text-white">
                    <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xl font-bold">18 de janeiro de 2026</span>
                  </div>
                  <div className="flex items-center text-white">
                    <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xl font-bold">08:00 - 17:00</span>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6" asChild>
                <a 
                  href="https://wa.me/5514998525760?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20N%C3%ADvel%201" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Inscreva-se Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Visão Geral do Curso</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-6">
            O Curso Nível 1 da Academia HQ tem como objetivo atender aos alunos que estão iniciando sua jornada no despertar consciencial. Sua estrutura é extremamente didática, facilitando o aprendizado e a absorção do conteúdo proposto para quem está dando os primeiros passos na expansão da consciência e desenvolvimento espiritual.
          </p>
          
          <p className="text-muted-foreground text-lg mb-6">
            Ministrado por Sergio Oliveira, fundador da Academia HQ, o curso tem a duração aproximada de 6 horas, podendo se estender de acordo com o desenvolvimento do grupo. Os participantes deste módulo participam no encerramento de uma sintonização individual, onde é feita a sua iniciação junto à sua família cósmica e estruturas do trabalho de Harmonização Quântica.
          </p>

          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Informações Importantes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Data:</strong> 18 de janeiro de 2026</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Horário:</strong> 08:00 - 17:00</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Formato:</strong> Online Via Zoom</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Certificado:</strong> Sim, após conclusão</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
              <h4 className="font-bold text-white mb-3">Investimento:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>PREÇO:</strong> R$1.200,00</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Aluno do TEAC - TECNOLOGIA EXTRAÇÃO ATIVAÇÃO CRIPTOGRAFADA:</strong> R$900,00</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span><strong>Fazer novamente:</strong> R$800,00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Programático */}
      <section className="py-16 px-4 bg-slate-950 w-full border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Conteúdo Programático</h2>
          
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">O que você vai aprender</h3>
                <div className="space-y-6">
                  {/* PNL */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Programação Neurolinguística – PNL</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Mapas e Paradigmas</li>
                      <li>Filtros</li>
                      <li>Valores</li>
                      <li>Critérios</li>
                      <li>Crenças</li>
                      <li>Comunicação</li>
                      <li>Ressignificação</li>
                      <li>DQI</li>
                    </ul>
                  </div>

                  {/* Simulação */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Simulação e seus operadores</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Extração</li>
                      <li>Plano Astral</li>
                      <li>Raças e Projetos</li>
                      <li>Templos Etéricos e Raios</li>
                      <li>Federação e Aliança – Galáctica e Planetária</li>
                      <li>Geometria Sagrada</li>
                      <li>Apometria</li>
                      <li>Merkabas</li>
                      <li>Merkaba para utilização inicial</li>
                      <li>Ativações</li>
                      <li>Merkabas de Luz da Harmonização Quântica</li>
                      <li>Conexões</li>
                    </ul>
                  </div>

                  {/* Auto Atendimento */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Auto – Atendimento</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Elementais (frequências)</li>
                      <li>Pensamento</li>
                      <li>Chakras</li>
                      <li>Corpos sutis</li>
                      <li>Verticalização</li>
                    </ul>
                  </div>

                  {/* Meditação */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">Meditação / Ativação</h4>
                    <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                      <li>Conexão</li>
                      <li>Sugestão para o início da prática de Meditação / Ativação</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">O Que Você Receberá</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Base Sólida de Conhecimento",
              description: "Aprenda os fundamentos essenciais para iniciar sua jornada espiritual de forma segura e eficaz."
            },
            {
              title: "Iniciação Coletiva",
              description: "Você participará da iniciação coletiva para conectar-se com sua família cósmica."
            },
            {
              title: "Material de Apoio",
              description: "Acesso a apostilas e materiais complementares para estudo contínuo."
            },
            {
              title: "Técnicas Práticas",
              description: "Aprenda técnicas que podem ser aplicadas imediatamente no seu dia a dia."
            },
            {
              title: "Certificado de Conclusão",
              description: "Receba um certificado oficial da Academia HQ, reconhecido para cursos subsequentes."
            },
            {
              title: "Suporte Pós-Curso",
              description: "Acesso a canal de dúvidas e suporte para auxiliar em sua prática após o curso."
            },
          ].map((item, index) => (
            <Card key={index} className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Inscrição
       <section className="py-16 px-4 bg-slate-900 w-full border-y border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Dê o Primeiro Passo na Sua Evolução Espiritual</h2>
          <p className="text-lg mb-8 text-gray-300">
            Reserve seu lugar agora!
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://wa.me/5514998525760?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20N%C3%ADvel%201" 
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
              Inscreva-se pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>
      */} 

      {/* Pronto para Transformar */}
      <section className="py-16 px-4 bg-slate-900 w-full border-y border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Pronto para Transformar sua Conexão Espiritual?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Reserve seu lugar agora!
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://wa.me/5514998525760?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20N%C3%ADvel%201" 
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
              Inscreva-se pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
} 