import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "D'JHON RHU'O — Ativação Consciencial | Academia HQ",
  description:
    "Uma ativação voltada para quebra de criptografias conscienciais, expansão de leitura da simulação e reorganização da percepção fora dos padrões de aprisionamento.",
};

const benefits = [
  {
    title: "Leitura da Simulação",
    description:
      "Compreensão de padrões, estruturas holográficas e algoritmos que moldam percepção e experiência.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" stroke="#d4af37" strokeWidth="1.2" strokeDasharray="4 2" />
        <circle cx="20" cy="20" r="10" stroke="#10b981" strokeWidth="1" />
        <circle cx="20" cy="20" r="3" fill="#d4af37" />
        <line x1="20" y1="2" x2="20" y2="10" stroke="#d4af37" strokeWidth="1" />
        <line x1="20" y1="30" x2="20" y2="38" stroke="#d4af37" strokeWidth="1" />
        <line x1="2" y1="20" x2="10" y2="20" stroke="#d4af37" strokeWidth="1" />
        <line x1="30" y1="20" x2="38" y2="20" stroke="#d4af37" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Quebra de Criptografia",
    description:
      "Identificação de bloqueios conscienciais e reorganização gradual da percepção.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <rect x="8" y="16" width="24" height="18" rx="3" stroke="#10b981" strokeWidth="1.2" />
        <path d="M14 16v-5a6 6 0 0112 0v5" stroke="#d4af37" strokeWidth="1.2" />
        <circle cx="20" cy="25" r="3" fill="#d4af37" />
        <line x1="20" y1="28" x2="20" y2="31" stroke="#d4af37" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Expansão de Lucidez",
    description:
      "Maior clareza sobre processos internos, projeção e experiências fora da simulação.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <polygon points="20,4 36,34 4,34" stroke="#d4af37" strokeWidth="1.2" fill="none" />
        <polygon points="20,12 30,28 10,28" stroke="#10b981" strokeWidth="0.8" fill="none" />
        <circle cx="20" cy="22" r="2.5" fill="#d4af37" />
      </svg>
    ),
  },
  {
    title: "Alinhamento de Frequência",
    description:
      "Conexão com estruturas compatíveis ao seu momento consciencial.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M4 20 Q10 8 16 20 Q22 32 28 20 Q34 8 40 20" stroke="#10b981" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="20" r="2.5" fill="#d4af37" />
      </svg>
    ),
  },
  {
    title: "Redução de Ruído Mental",
    description:
      "Diminuição de interferências emocionais e padrões repetitivos.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="14" stroke="#d4af37" strokeWidth="1.2" />
        <line x1="14" y1="14" x2="26" y2="26" stroke="#ef4444" strokeWidth="1.5" />
        <line x1="26" y1="14" x2="14" y2="26" stroke="#ef4444" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="6" stroke="#10b981" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Fortalecimento Consciencial",
    description:
      "Mais estabilidade, direção e autonomia dentro da própria jornada.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <polygon points="20,3 24,14 36,14 26,22 30,34 20,27 10,34 14,22 4,14 16,14" stroke="#d4af37" strokeWidth="1.2" fill="none" />
        <polygon points="20,10 22,17 29,17 23,21 25,28 20,24 15,28 17,21 11,17 18,17" fill="#10b98133" />
      </svg>
    ),
  },
];

const quotes = [
  "A liberdade exige consciência.",
  "Nem todo bloqueio é emocional. Alguns são estruturais.",
  "O que limita sua percepção nem sempre é visível.",
  "Quebrar criptografias exige maturidade consciencial.",
  "Você não precisa acreditar. Precisa perceber.",
];

const GeometricRing = ({ size, opacity, rotate = 0 }: { size: number; opacity: number; rotate?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    style={{ transform: `rotate(${rotate}deg)`, opacity }}
    className="absolute pointer-events-none"
  >
    <circle cx="100" cy="100" r="95" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="6 4" />
    <circle cx="100" cy="100" r="75" stroke="#10b981" strokeWidth="0.4" />
    <circle cx="100" cy="100" r="55" stroke="#d4af37" strokeWidth="0.5" strokeDasharray="3 6" />
    <polygon points="100,5 195,152 5,152" stroke="#10b981" strokeWidth="0.4" fill="none" />
    <polygon points="100,195 5,48 195,48" stroke="#d4af37" strokeWidth="0.3" fill="none" />
  </svg>
);

const HexGrid = () => (
  <svg viewBox="0 0 400 300" fill="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
    {[...Array(6)].map((_, i) =>
      [...Array(5)].map((_, j) => {
        const x = j * 80 + (i % 2 === 0 ? 0 : 40);
        const y = i * 52;
        const cx = x + 40;
        const cy = y + 26;
        const r = 24;
        const pts = Array.from({ length: 6 }, (_, k) => {
          const angle = (Math.PI / 3) * k - Math.PI / 6;
          return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
        }).join(" ");
        return (
          <polygon key={`${i}-${j}`} points={pts} stroke="#10b981" strokeWidth="0.6" fill="none" />
        );
      })
    )}
  </svg>
);

export default function DjhonRhuoPage() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Ativa%C3%A7%C3%A3o+D%27JHON+RHU%27O&type=phone_number&app_absent=0";

  return (
    <main className="flex flex-col items-center overflow-hidden" style={{ background: "#030712" }}>

      {/* ── HERO ── */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 text-center overflow-hidden">
        {/* Background rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <GeometricRing size={700} opacity={0.12} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <GeometricRing size={500} opacity={0.08} rotate={30} />
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 70%), radial-gradient(ellipse at 80% 20%, rgba(212,175,55,0.05) 0%, transparent 50%)",
        }} />
        <HexGrid />

        {/* Glow line top */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }} />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase" style={{ borderColor: "#d4af3740", color: "#d4af37", background: "#d4af3708" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#d4af37" }} />
            Ativação Consciencial
          </div>

          {/* Title */}
          <h1 className="font-bold tracking-widest uppercase mb-2" style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            lineHeight: 1,
            background: "linear-gradient(135deg, #d4af37 0%, #f5e17a 40%, #d4af37 60%, #a07d1c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            letterSpacing: "0.15em",
          }}>
            D&apos;JHON RHU&apos;O
          </h1>

          {/* Divider ornament */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, transparent, #10b981)" }} />
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" style={{ color: "#10b981" }}>
              <polygon points="12,2 22,20 2,20" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="12" cy="13" r="2" fill="currentColor" />
            </svg>
            <div className="h-px flex-1 max-w-24" style={{ background: "linear-gradient(90deg, #10b981, transparent)" }} />
          </div>

          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed" style={{ color: "#94a3b8" }}>
            Uma ativação voltada para{" "}
            <span style={{ color: "#10b981" }}>quebra de criptografias conscienciais</span>,{" "}
            expansão de leitura da simulação e{" "}
            <span style={{ color: "#d4af37" }}>reorganização da percepção</span>{" "}
            fora dos padrões de aprisionamento.
          </p>

          <p className="text-base max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "#64748b" }}>
            Existem estruturas que limitam percepção, memória, consciência e acesso.
            O D&apos;JHON RHU&apos;O foi desenvolvido para auxiliar no desbloqueio dessas camadas
            de forma consciente, segura e progressiva.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #d4af37, #a07d1c)",
              color: "#030712",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              boxShadow: "0 0 40px rgba(212,175,55,0.3), 0 0 80px rgba(212,175,55,0.1)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Quero Acessar a Ativação
          </a>
        </div>

        {/* Bottom glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #10b981, transparent)" }} />
      </section>

      {/* ── BLOCO CONCEITUAL ── */}
      <section className="relative w-full py-24 px-4 overflow-hidden" style={{ background: "linear-gradient(180deg, #030712 0%, #041a0f 50%, #030712 100%)" }}>
        <div className="absolute inset-0 flex items-center justify-end opacity-5 pointer-events-none">
          <GeometricRing size={600} opacity={1} rotate={15} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight" style={{ color: "#f8fafc" }}>
            Você não está apenas vivendo.{" "}
            <span style={{ color: "#10b981" }}>Você está operando dentro de uma estrutura.</span>
          </h2>
          <div className="flex items-center justify-center my-8">
            <div className="h-px w-16" style={{ background: "#d4af3760" }} />
            <div className="w-2 h-2 rotate-45 mx-3" style={{ background: "#d4af37" }} />
            <div className="h-px w-16" style={{ background: "#d4af3760" }} />
          </div>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>
            Grande parte das pessoas vive sem perceber os padrões, algoritmos e criptografias
            que moldam comportamento, percepção e consciência.
          </p>
          <p className="text-lg mb-6 leading-relaxed font-medium" style={{ color: "#d4af37" }}>
            O problema é que muitas dessas estruturas <em>parecem naturais.</em>
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
            O D&apos;JHON RHU&apos;O trabalha exatamente nesse ponto: ampliar leitura, percepção e
            capacidade de identificação das estruturas invisíveis que sustentam o aprisionamento consciencial.
          </p>
        </div>
      </section>

      {/* ── IMPACT QUOTE 1 ── */}
      <div className="w-full py-12 px-4 text-center" style={{ background: "#06150f", borderTop: "1px solid #10b98120", borderBottom: "1px solid #10b98120" }}>
        <blockquote className="text-2xl md:text-3xl font-light italic max-w-3xl mx-auto" style={{ color: "#10b981" }}>
          &ldquo;{quotes[1]}&rdquo;
        </blockquote>
      </div>

      {/* ── O QUE É ── */}
      <section className="relative w-full py-24 px-4 overflow-hidden" style={{ background: "#030712" }}>
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none" style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
        }} />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest uppercase mb-4 block" style={{ color: "#d4af37" }}>— Estrutura —</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#f8fafc" }}>
              O que é o D&apos;JHON RHU&apos;O
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual side */}
            <div className="flex items-center justify-center">
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <GeometricRing size={280} opacity={0.5} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <GeometricRing size={200} opacity={0.4} rotate={45} />
                </div>
                <div className="absolute inset-8 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(16,185,129,0.05) 60%, transparent 100%)",
                    border: "1px solid #d4af3740",
                  }}>
                    <span className="text-4xl font-bold" style={{
                      background: "linear-gradient(135deg, #d4af37, #10b981)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      D&apos;R
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="text-base mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>
                O D&apos;JHON RHU&apos;O é uma estrutura de alinhamento e ativação consciencial voltada para:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Quebra de criptografias",
                  "Reorganização de frequência",
                  "Expansão de percepção",
                  "Leitura da simulação",
                  "Desbloqueio consciencial",
                  "Alinhamento com estruturas compatíveis",
                  "Ampliação de lucidez",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm" style={{ color: "#cbd5e1" }}>
                    <span className="w-1.5 h-1.5 rotate-45 flex-shrink-0" style={{ background: "#d4af37" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-sm border-l-2" style={{ borderColor: "#10b981", background: "#10b98108" }}>
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  Não se trata de religião. Não se trata de crença.{" "}
                  <span style={{ color: "#f8fafc" }}>
                    É um processo de percepção, alinhamento e reorganização interna.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT QUOTE 2 ── */}
      <div className="w-full py-12 px-4 text-center" style={{ background: "#06150f", borderTop: "1px solid #d4af3715", borderBottom: "1px solid #d4af3715" }}>
        <blockquote className="text-2xl md:text-3xl font-light italic max-w-3xl mx-auto" style={{ color: "#d4af37" }}>
          &ldquo;{quotes[2]}&rdquo;
        </blockquote>
      </div>

      {/* ── CARDS: O QUE VOCÊ PODE ACESSAR ── */}
      <section className="w-full py-24 px-4" style={{ background: "#030712" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono tracking-widest uppercase mb-4 block" style={{ color: "#d4af37" }}>— Acesso —</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#f8fafc" }}>
              O que você pode acessar
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "#64748b" }}>
              Cada camada da ativação foi projetada para operar em um nível específico da estrutura consciencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="relative p-6 rounded-sm group transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #0a1a12 0%, #060f09 100%)",
                  border: "1px solid #10b98120",
                  boxShadow: "inset 0 1px 0 #10b98115",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px rounded-t-sm" style={{
                  background: "linear-gradient(90deg, transparent, #d4af3740, transparent)",
                }} />
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "#d4af37" }}>
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOCO FORTE ── */}
      <section className="relative w-full py-24 px-4 overflow-hidden" style={{
        background: "linear-gradient(135deg, #041a0f 0%, #030712 50%, #0a0f04 100%)",
        borderTop: "1px solid #10b98120",
        borderBottom: "1px solid #10b98120",
      }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)",
        }} />
        <div className="absolute right-0 top-0 bottom-0 flex items-center opacity-5 pointer-events-none">
          <GeometricRing size={500} opacity={1} rotate={20} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: "#f8fafc" }}>
            Nem toda informação foi feita{" "}
            <span style={{
              background: "linear-gradient(135deg, #d4af37, #f5e17a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              para libertar.
            </span>
          </h2>
          <p className="text-lg mb-6 leading-relaxed" style={{ color: "#94a3b8" }}>
            Muitas estruturas foram criadas para manter percepção limitada, dependência e repetição.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
            O D&apos;JHON RHU&apos;O nasce como uma ferramenta de reorganização consciencial para quem percebe
            que existe{" "}
            <span style={{ color: "#10b981", fontStyle: "italic" }}>
              algo além da narrativa comum.
            </span>
          </p>
        </div>
      </section>

      {/* ── PARA QUEM É / NÃO É ── */}
      <section className="w-full py-24 px-4" style={{ background: "#030712" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#f8fafc" }}>
              Esta ativação é para você?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Para quem é */}
            <div className="p-8 rounded-sm" style={{
              background: "#041a0f",
              border: "1px solid #10b98130",
            }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#10b98120", border: "1px solid #10b98140" }}>
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M3 8l4 4 6-6" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold" style={{ color: "#10b981" }}>Para quem é</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Pessoas que sentem bloqueios internos sem conseguir identificar a origem",
                  "Pessoas que buscam mais lucidez e clareza consciencial",
                  "Quem deseja aprofundar a leitura da realidade",
                  "Quem sente que existe algo além da experiência comum",
                  "Terapeutas e facilitadores",
                  "Pessoas que desejam romper padrões repetitivos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#94a3b8" }}>
                    <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#10b981" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Para quem não é */}
            <div className="p-8 rounded-sm" style={{
              background: "#160808",
              border: "1px solid #ef444430",
            }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#ef444415", border: "1px solid #ef444430" }}>
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold" style={{ color: "#ef4444" }}>Para quem não é</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Pessoas buscando fantasia espiritual",
                  "Pessoas buscando dependência ou idolatria",
                  "Pessoas procurando promessas milagrosas",
                  "Pessoas sem responsabilidade sobre o próprio processo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#94a3b8" }}>
                    <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#ef4444" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT QUOTE 3 ── */}
      <div className="w-full py-12 px-4 text-center" style={{ background: "#06150f", borderTop: "1px solid #10b98120", borderBottom: "1px solid #10b98120" }}>
        <blockquote className="text-2xl md:text-3xl font-light italic max-w-3xl mx-auto" style={{ color: "#10b981" }}>
          &ldquo;{quotes[3]}&rdquo;
        </blockquote>
      </div>

      {/* ── EXPERIÊNCIA ── */}
      <section className="w-full py-24 px-4" style={{ background: "#030712" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono tracking-widest uppercase mb-4 block" style={{ color: "#d4af37" }}>— Processo —</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: "#f8fafc" }}>
            A Experiência da Ativação
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
            A ativação acontece através de alinhamentos específicos de frequência, direcionamento
            consciencial e reorganização estrutural.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
            Cada experiência acontece de forma individual, respeitando o momento e a capacidade de
            integração de cada pessoa.
          </p>

          {/* Quote row */}
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[quotes[0], quotes[4]].map((q, i) => (
              <div
                key={i}
                className="p-6 rounded-sm text-left relative"
                style={{
                  background: "#040d08",
                  border: "1px solid #10b98118",
                  borderLeft: "3px solid #d4af37",
                }}
              >
                <p className="text-base italic" style={{ color: "#cbd5e1" }}>&ldquo;{q}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="relative w-full py-28 px-4 overflow-hidden text-center" style={{
        background: "linear-gradient(180deg, #030712 0%, #041a0f 50%, #030712 100%)",
        borderTop: "1px solid #10b98120",
      }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <GeometricRing size={800} opacity={1} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 50% 80%, rgba(212,175,55,0.06) 0%, transparent 60%)",
        }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #d4af37)" }} />
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <polygon points="12,2 22,20 2,20" stroke="#d4af37" strokeWidth="1.2" fill="none" />
              <circle cx="12" cy="14" r="2" fill="#d4af37" />
            </svg>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #d4af37, transparent)" }} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#f8fafc" }}>
            Se você percebe que existe algo além,{" "}
            <span style={{ color: "#d4af37" }}>este pode ser o próximo passo.</span>
          </h2>

          <p className="text-lg mb-12 leading-relaxed" style={{ color: "#64748b" }}>
            A ativação é individual, consciente e progressiva.
            Não exige crença — apenas a disposição de perceber.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-bold uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #d4af37, #a07d1c)",
                color: "#030712",
                fontSize: "0.85rem",
                letterSpacing: "0.2em",
                boxShadow: "0 0 40px rgba(212,175,55,0.25), 0 0 80px rgba(212,175,55,0.08)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Acessar D&apos;JHON RHU&apos;O
            </a>

            <Link
              href="/ativacoes"
              className="inline-flex items-center gap-2 px-6 py-4 text-sm transition-colors duration-200"
              style={{ color: "#64748b" }}
            >
              Ver todas as ativações
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
