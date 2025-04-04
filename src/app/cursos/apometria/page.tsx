import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ApometriaPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section 
        className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4 relative"
        style={{
          backgroundImage: "url('/images/apometria2025.jpg?v=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-slate-950 bg-opacity-75"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Curso de Apometria</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            17 e 18 de Maio de 2025 • Online
          </p>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-16 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Visão Geral do Curso</h2>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-muted-foreground text-lg mb-6">
          A apometria é uma técnica fundamental utilizada dentro dos processos de atendimento da Harmonização Quântica e também em nossos cursos. Muitos de vocês utilizam esta técnica porém ainda não tem as informações de forma sistematizada para poder acessar de forma consciente. Com este curso isso será possível. O processo de despertar consciencial/mediúnico será acelerado de forma significativa. Os atendimentos terapêuticos serão potencializados de forma que os clientes avancem mais rapidamente e mantenham os resultados obtidos durante os trabalho por mais tempo.
          </p>
          
          <p className="text-muted-foreground text-lg mb-6">
          O curso acontecerá nos dias 17 e 18 de maio de 2025, das 09:00 até as 18:00 em ambos os dias. ​ Haverá um bônus para os participantes: um sorteio de uma canalização do seu mentor pessoal, incluindo imagem e descrição desta frequência.
          </p>

          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Informações Importantes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Data:</strong> 17 e 18 de Maio de 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Horário:</strong> 09:00 às 18:00 (com intervalos)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Formato:</strong> Online via Zoom</span>
              </li>
              
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Certificado:</strong> Sim, após conclusão</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Investimento:</strong> R$ 1.500,00 (parcelamento disponível). </span>
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
                <h3 className="text-xl font-bold mb-4 text-foreground">Conteúdo completo</h3>
                <div className="space-y-4">
                  <div>
                    <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Apometria - definições</li>
                      <li>Desenvolvimento Cognitivo - corpo físico e astral - (abordagens de reprogramação neurolinguística - PNL)</li>
                      <li>Desdobramentos multidimensionais</li>
                      <li>Os corpos sutis</li>
                      <li>Eteriatria</li>
                      <li>Chakras</li>
                      <li>Obsessão</li>
                      <li>Umbral e suas infra dimensões</li>
                      <li>Encaminhamento de entidades obsessoras</li>
                      <li>Merkabas da Harmonização Quântica</li>
                      <li>Atendimento e/ou auto atendimento passo a passo </li>
                      <li>Contratos</li>
                      <li>Ressonância</li>
                      <li>Associação e Dissociação</li>
                      <li>Mediunidade</li>
                      <li>Os elementais</li>
                      <li>Cromoterapia - Luz Líquida</li>
                      <li>Os pulso magnéticos</li>
                      <li>Despolarização e Polarização</li>
                      <li>Cirurgias espirituais</li>
                      <li>Equipes médicas espirituais</li>
                      <li>Centros de conexão e rastreamento cósmico</li>
                      <li>Barreira de frequência planetária</li>
                      <li>Mundos intraterrenos</li>
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
              title: "Autonomia Energética",
              description: "Aprenda a realizar atendimentos e auto-atendimentos eficazes sem depender de terceiros."
            },
            {
              title: "Proteção Apométrica",
              description: "Domine técnicas avançadas de proteção para você e seus pacientes, caso atenda."
            },
            {
              title: "Certificado de Conclusão",
              description: "Receba um certificado de conclusão do curso."
            },
            {
              title: "Apostila PDF",
              description: "Receba a apostila em formato PDF para consulta e estudo."
            },
            {
              title: "Iniciação Coletiva",
              description: "Receba a iniciação coletiva para você acessar, oficialmente, novos níveis de conexão com as estruturas da Academia HQ de Apometria."
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
          <h2 className="text-3xl font-bold mb-6 text-white">Pronto para Transformar sua Conexão Espiritual?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Vagas limitadas para garantir atendimento personalizado. Reserve seu lugar agora!
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://wa.me/5514998525760?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20de%20Apometria" 
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