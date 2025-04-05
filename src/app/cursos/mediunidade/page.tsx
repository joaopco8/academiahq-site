import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MediunidadePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section 
        className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4 relative"
        style={{
          backgroundImage: "url('/images/mediunidade.jpg?v=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-slate-950 bg-opacity-75"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Curso de Mediunidade</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Desenvolvimento Mediúnico Integrado • Online e Presencial
          </p>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Visão Geral do Curso</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-6">
            Nesse trabalho que estamos desenvolvendo, você terá a oportunidade de descobrir quais são as suas equipes, quais são as entidades que te acompanham, quais são as estruturas e tipos de mediunidade que existem, quem são os orixás e como eles atuam e ainda, como você pode alinhar a sua estrutura de trabalho junto às suas equipes.
          </p>
          
          <p className="text-muted-foreground text-lg mb-6">
            Essa proposta de aulas é uma formação contínua para aqueles que têm interesse em desenvolver a sua mediunidade e/ou até mesmo aprender a incorporar (se suas entidades e Orixás permitirem). O curso combina teoria e prática, com abordagens que respeitam o tempo e as características individuais de cada participante.
          </p>

          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Informações Importantes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Duração:</strong> Formação contínua (encontros semanais ou quinzenais)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Formato:</strong> Híbrido - encontros online e presenciais em Vila Velha-ES</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Pré-requisitos:</strong> Recomendável ter realizado o Nível 1, mas não obrigatório</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Material:</strong> Apostilas e materiais compartilhados ao longo do curso</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Investimento:</strong> Consulte valores atualizados (diferentes opções disponíveis)</span>
              </li>
            </ul>
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
                <div className="space-y-4">
                  <div>
                    <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                      <li>Tipos de mediunidade e como identificar seu dom</li>
                      <li>Estrutura da espiritualidade e hierarquias espirituais</li>
                      <li>Identificação e conexão com guias e mentores</li>
                      <li>Os Orixás: fundamentos, características e formas de trabalho</li>
                      <li>Manifestações mediúnicas: incorporação, psicofonia, psicografia</li>
                      <li>Desenvolvimento da vidência, audiência e demais sentidos sutis</li>
                      <li>Orientação e proteção no desenvolvimento mediúnico</li>
                      <li>Prática segura da incorporação (para aqueles com essa predisposição)</li>
                      <li>Trabalho com energias e ervas sagradas</li>
                      <li>Rituais e cerimônias para desenvolvimento espiritual</li>
                      <li>Como estabelecer uma rotina de desenvolvimento mediúnico</li>
                      <li>Diagnóstico e tratamento energético através da mediunidade</li>
                      <li>Integração das diversas tradições espirituais na prática mediúnica</li>
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
              title: "Desenvolvimento Personalizado",
              description: "Acompanhamento individual respeitando seu ritmo e características mediúnicas."
            },
            {
              title: "Conexão com Suas Equipes",
              description: "Identificação e fortalecimento do vínculo com seus guias e entidades de trabalho."
            },
            {
              title: "Ambiente Seguro de Prática",
              description: "Espaço protegido energeticamente para o desenvolvimento das habilidades mediúnicas."
            },
            {
              title: "Conhecimento Ancestral",
              description: "Acesso a informações sobre tradições espirituais e suas práticas."
            },
            {
              title: "Crescimento Contínuo",
              description: "Estrutura de curso que permite evoluir constantemente em seu caminho mediúnico."
            },
            {
              title: "Comunidade de Apoio",
              description: "Contato com outros médiuns em desenvolvimento e troca de experiências."
            },
          ].map((item, index) => (
            <Card key={index} className="bg-card border-border p-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Inscrição */}
      <section className="py-16 px-4 bg-slate-900 w-full border-y border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Desenvolva sua mediunidade</h2>
          <p className="text-lg mb-8 text-gray-300">
            Vagas limitadas para turmas online e presenciais. Entre em contato para mais informações!
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://wa.me/5527997648551?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20de%20Mediunidade" 
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