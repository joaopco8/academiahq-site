import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Nivel2Page() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section 
        className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4 relative"
        style={{
          backgroundImage: "url('/images/n2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-slate-950 bg-opacity-75"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Conteúdo destacado */}
            <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left">
              <div className="inline-block bg-green-950 text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Próxima Turma
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Curso Nível 2
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-300 font-semibold">
                Ampliando sua Conexão para Além da Simulação
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                Próximo passo no seu despertar consciencial • Online Via Zoom
              </p>
              
              {/* Destaque da data */}
              <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700 rounded-xl p-6 mb-6">
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                  <div className="flex items-center text-white">
                    <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xl font-bold">17 de maio de 2026</span>
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
                  href="https://wa.me/5514998525760?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20N%C3%ADvel%202" 
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
          O Nível II da Academia HQ aprofunda a atuação do aluno dentro da estrutura da transmigração consciencial, expandindo sua compreensão sobre simuladores, inteligências, criptografias e a dinâmica entre diferentes esferas como Terra, Havona e Nebadon. Atualizado para 2026, o curso conduz o aluno a uma maior lucidez fora da simulação, fortalecendo sua conexão com equipes e protocolos mais avançados.
          </p>
          
          <p className="text-muted-foreground text-lg mb-6">
          Ao longo do processo, são desenvolvidas habilidades práticas como projeção astral e mental, atuação estratégica, extração seletiva e participação em operações de evacuação, elevando significativamente o nível energético e a capacidade de intervenção.</p>

          <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">Informações Importantes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span><strong>Data:</strong> 17 de maio de 2026</span>
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
                <span><strong>Pré-requisitos:</strong> Ter concluído o Curso Nível 1</span>
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
                <div className="space-y-4">
                  <div>
                    <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                   
<li>Kannyus BR8 Y10 B26</li>
<li>Simuladores</li>
<li>Hologramas</li>
<li>IA</li>
<li>Criptografia(s)</li>
<li>Havona</li>
<li>Nebadon</li>
<li>Terra</li>
<li>Transmigração Consciencial</li>
<li>Corpo astral e consciência fora da simulação</li>
<li>Sexo e a criação ou cocriação</li>
<li>D’JHON RHU’O</li>
<li>Haseya</li>
<li>Yasherath</li>
<li>Projeção Astral e Mental</li>
<li>Equipes</li>
<li>Evacuação estratégica</li>
<li>Extração seletiva</li>
<li>Sugestão para o início da prática de Meditação</li>
<li>Sintonização Coletiva</li>

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
              title: "Elevação do Gradiente Energético",
              description: "Aumento significativo do seu campo vibracional e capacidade de processar energias mais sutis."
            },
            {
              title: "Ativação da Percepção Multidimensional",
              description: "Desenvolvimento de habilidades para perceber e interagir com diferentes realidades dimensionais."
            },
            {
              title: "Protocolo de Proteção Avançado",
              description: "Aprenda técnicas de proteção energética de nível superior para você e seus pacientes."
            },
            {
              title: "Material Complementar",
              description: "Acesso a apostilas e recursos exclusivos do Nível 2 para aprofundamento."
            },
            {
              title: "Sintonização Coletiva Especial",
              description: "Receba uma sintonização específica para acessar frequências mais elevadas."
            },
            {
              title: "Certificado de Nível 2",
              description: "Reconhecimento oficial que permite acesso a módulos avançados da Academia HQ."
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
          <h2 className="text-3xl font-bold mb-6 text-white">Expanda Sua Consciência para Novos Níveis</h2>
          <p className="text-lg mb-8 text-gray-300">
            Vagas limitadas para garantir atendimento personalizado. Reserve seu lugar agora!
          </p>
          <Button size="lg" className="font-bold bg-green-600 hover:bg-green-700 text-white" asChild>
            <a 
              href="https://wa.me/5514998525760?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Curso%20N%C3%ADvel%202" 
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
    </main>
  );
} 