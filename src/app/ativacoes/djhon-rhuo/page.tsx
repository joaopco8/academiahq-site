import { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { MatrixText } from "@/components/ui/matrix-text";
import { Key, Waves, Eye, Layers, Target, Sparkles } from "lucide-react";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "D'JHON RHU'O — Ativação Consciencial | Academia HQ",
  description:
    "Uma ativação voltada para quebra de criptografias conscienciais, expansão de leitura da simulação e reorganização da percepção fora dos padrões de aprisionamento.",
};

// ─── Matrix rain ──────────────────────────────────────────────────────────────
const MATRIX_CHARS =
  "ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01001101";

const MATRIX_COLS = Array.from({ length: 42 }, (_, i) => ({
  left: `${((i * 2.45 + 0.3) % 100).toFixed(1)}%`,
  chars: Array.from({ length: 24 }, (_, j) =>
    MATRIX_CHARS[(i * 13 + j * 7 + 3) % MATRIX_CHARS.length]
  ),
  duration: ((i * 7) % 10) + 6,
  delay: -(((i * 11) % 15) + 1),
  opacity: ((i * 19) % 6) * 0.035 + 0.14,
  fontSize: ((i * 11) % 4) + 12,
}));

// ─── Content ──────────────────────────────────────────────────────────────────
const PILARES = [
  {
    num: "01",
    title: "Leitura da Simulação",
    text: "Compreensão dos padrões, estruturas holográficas e algoritmos que moldam percepção e experiência.",
  },
  {
    num: "02",
    title: "Quebra de Criptografia",
    text: "Identificação de bloqueios conscienciais e reorganização gradual da percepção interna.",
  },
  {
    num: "03",
    title: "Expansão de Lucidez",
    text: "Maior clareza sobre processos internos, projeção e experiências fora da simulação.",
  },
  {
    num: "04",
    title: "Alinhamento de Frequência",
    text: "Conexão com estruturas compatíveis ao seu momento consciencial específico.",
  },
  {
    num: "05",
    title: "Redução de Ruído Mental",
    text: "Diminuição de interferências emocionais e padrões repetitivos que limitam percepção.",
  },
  {
    num: "06",
    title: "Fortalecimento Consciencial",
    text: "Mais estabilidade, direção e autonomia dentro da própria jornada consciencial.",
  },
];

const STEPS = [
  {
    num: "I",
    title: "Sessão ao vivo e individual",
    text: "Realizada online com Sergio Oliveira, direcionada para o seu momento consciencial específico.",
  },
  {
    num: "II",
    title: "Alinhamento de frequência específico",
    text: "Processo de reorganização estrutural através de alinhamentos precisos de frequência e direcionamento consciencial.",
  },
  {
    num: "III",
    title: "Integração progressiva de até 16 dias",
    text: "Após a sessão, a ativação se integra naturalmente, respeitando o tempo de cada estrutura consciencial.",
  },
];

const PARA_QUEM = [
  "Pessoas que sentem bloqueios internos sem conseguir identificar a origem",
  "Pessoas que buscam mais lucidez e clareza consciencial",
  "Quem deseja aprofundar a leitura da realidade",
  "Quem sente que existe algo além da experiência comum",
  "Terapeutas e facilitadores conscienciais",
  "Pessoas que desejam romper padrões repetitivos",
];

const NAO_PARA = [
  "Pessoas buscando fantasia espiritual ou entretenimento",
  "Pessoas buscando dependência ou idolatria",
  "Pessoas procurando promessas milagrosas",
  "Pessoas sem responsabilidade sobre o próprio processo",
];

const WA_URL =
  "https://api.whatsapp.com/send/?phone=5514998525760&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+Ativa%C3%A7%C3%A3o+D%27JHON+RHU%27O&type=phone_number&app_absent=0";

// ─── Sub-components ───────────────────────────────────────────────────────────
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs tracking-[.28em] uppercase mb-4 font-light"
      style={{ color: "#C9A84C" }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-light ${className ?? ""}`}
      style={{ color: "#F4F0FF", lineHeight: 1.2 }}
    >
      {children}
    </h2>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1" style={{ background: "rgba(201,168,76,.15)" }} />
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#C9A84C", opacity: 0.4 }} />
      <div className="h-px flex-1" style={{ background: "rgba(201,168,76,.15)" }} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function DjhonRhuoPage() {
  return (
    <main
      className={font.className}
      style={{ background: "#030110", color: "#F4F0FF" }}
    >
      {/* ─── CSS ─── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes matrix-fall {
          0%   { transform: translateY(-110%); }
          100% { transform: translateY(110vh); }
        }
        @keyframes mc-cw  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes mc-ccw { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes shimmer {
          0%   { background-position:-300% center; }
          100% { background-position:300% center; }
        }
        @keyframes fade-up {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes nebula-a {
          0%,100% { transform:translate(0,0) scale(1); }
          33%     { transform:translate(30px,-20px) scale(1.05); }
          66%     { transform:translate(-20px,25px) scale(.97); }
        }
        @keyframes nebula-b {
          0%,100% { transform:translate(0,0) scale(1); }
          33%     { transform:translate(-40px,30px) scale(1.03); }
          66%     { transform:translate(25px,-15px) scale(1.07); }
        }
        @keyframes glow-pulse {
          0%,100% { opacity:.4; }
          50%     { opacity:1; }
        }

        .fu-1 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .05s both; }
        .fu-2 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .2s  both; }
        .fu-3 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .35s both; }
        .fu-4 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .5s  both; }
        .fu-5 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .65s both; }

        .glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,.35);
          transition: border-color .3s, background .3s, box-shadow .3s;
        }
        .glass:hover {
          border-color: rgba(123,63,228,.3);
          background: rgba(123,63,228,.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 64px rgba(123,63,228,.12);
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          transition: transform .2s cubic-bezier(.16,1,.3,1), box-shadow .2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 60px rgba(201,168,76,.5), 0 0 0 1px rgba(201,168,76,.4) !important;
        }
        .btn-ghost {
          display: inline-flex;
          align-items: center;
          transition: color .2s, background .2s;
          border-radius: 8px;
        }
        .btn-ghost:hover {
          background: rgba(255,255,255,.05);
          color: #F4F0FF !important;
        }
        .step-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          backdrop-filter: blur(16px);
          transition: border-color .3s, background .3s;
        }
        .step-card:hover {
          border-color: rgba(123,63,228,.3);
          background: rgba(123,63,228,.05);
        }
        .feat-cell {
          background: rgba(255,255,255,0.02);
          transition: background .3s;
        }
        .feat-cell:hover {
          background: rgba(123,63,228,.06);
        }
      `}} />

      {/* ─── Fixed bg image ───────────────────────────────────────────────── */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          backgroundImage: "url('/images/bg-djhon-rhuo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5,
        }}
      />

      {/* ─── Fixed nebula background ──────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute"
          style={{
            top: "5%", left: "2%",
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(92,47,160,.2) 0%, transparent 65%)",
            filter: "blur(70px)",
            animation: "nebula-a 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "10%", right: "2%",
            width: 700, height: 700,
            background: "radial-gradient(circle, rgba(59,31,107,.22) 0%, transparent 65%)",
            filter: "blur(90px)",
            animation: "nebula-b 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "40%", left: "50%",
            width: 900, height: 900,
            transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(123,63,228,.07) 0%, transparent 60%)",
            filter: "blur(110px)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ zIndex: 1, padding: "120px 24px 100px" }}
      >
        {/* Matrix rain */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
          style={{ filter: "blur(0.8px)" }}
        >
          {MATRIX_COLS.map((col, i) => (
            <div
              key={i}
              className="absolute top-0 flex flex-col"
              style={{
                left: col.left,
                opacity: col.opacity,
                animation: `matrix-fall ${col.duration}s linear ${col.delay}s infinite`,
                fontFamily: "monospace",
                fontSize: col.fontSize,
                lineHeight: 1.5,
                userSelect: "none",
                letterSpacing: "0",
              }}
            >
              {col.chars.map((char, j) => (
                <span
                  key={j}
                  style={{
                    color:
                      j === col.chars.length - 1
                        ? "#FFFFFF"
                        : j >= col.chars.length - 3
                        ? "#DCC8FF"
                        : j >= col.chars.length - 8
                        ? "#B087E8"
                        : "#7B4FC4",
                    opacity: Math.max(0.08, 1 - (col.chars.length - 1 - j) * 0.038),
                    textShadow:
                      j === col.chars.length - 1
                        ? "0 0 12px rgba(220,200,255,1), 0 0 24px rgba(180,135,232,.6)"
                        : j >= col.chars.length - 3
                        ? "0 0 6px rgba(176,135,232,.5)"
                        : "none",
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          ))}

          {/* Center vignette — keeps title readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 55% at 50% 48%, rgba(3,1,16,.72) 0%, rgba(3,1,16,.08) 100%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{ height: 180, background: "linear-gradient(transparent, #030110)" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 fu-1"
            style={{
              background: "rgba(201,168,76,.07)",
              border: "1px solid rgba(201,168,76,.22)",
              borderRadius: 9999,
              color: "#C9A84C",
              fontSize: ".68rem",
              letterSpacing: ".22em",
              fontWeight: 300,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#C9A84C", animation: "glow-pulse 2.5s ease-in-out infinite" }}
            />
            Ativação Consciencial
          </div>

          {/* Title */}
          <h1
            className="uppercase fu-2 flex flex-col items-center"
            style={{
              fontSize: "clamp(3.5rem,13vw,9rem)",
              lineHeight: 0.92,
              fontWeight: 300,
              letterSpacing: ".1em",
            }}
          >
            <MatrixText
              text="D'JHON"
              initialDelay={200}
              letterAnimationDuration={500}
              letterInterval={80}
            />
            <MatrixText
              text="RHU'O"
              initialDelay={700}
              letterAnimationDuration={500}
              letterInterval={80}
            />
          </h1>

          {/* Byline */}
          <p
            className="mt-5 mb-8 tracking-[.35em] uppercase fu-3"
            style={{
              color: "#7B3FE4",
              fontSize: ".72rem",
              fontWeight: 300,
            }}
          >
            por Sergio Oliveira
          </p>

          {/* Ornament */}
          <div className="flex items-center gap-4 mb-8 fu-3">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg,transparent,rgba(123,63,228,.6))" }} />
            <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
              <polygon points="10,1 19,17 1,17" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
              <circle cx="10" cy="12" r="2" fill="#C9A84C" />
            </svg>
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg,rgba(123,63,228,.6),transparent)" }} />
          </div>

          {/* Lead */}
          <p
            className="max-w-xl mx-auto mb-12 leading-relaxed fu-4"
            style={{ color: "#9B8FBA", fontSize: "1.05rem", fontWeight: 300 }}
          >
            Você não está apenas vivendo. Você está operando dentro de uma estrutura.{" "}
            <span style={{ color: "#F4F0FF", fontWeight: 400 }}>
              E existe uma saída para além dela.
            </span>
          </p>

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary gap-3 font-medium uppercase tracking-widest fu-5"
            style={{
              background: "linear-gradient(135deg,#C9A84C,#A07D1C)",
              color: "#030110",
              fontSize: ".8rem",
              letterSpacing: ".18em",
              padding: "16px 40px",
              borderRadius: 8,
              boxShadow: "0 0 40px rgba(201,168,76,.28), 0 0 80px rgba(201,168,76,.08)",
            }}
          >
            <WaIcon />
            Acessar Ativação
          </a>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,rgba(92,47,160,.3),transparent)" }}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. DECLARAÇÃO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full py-24 px-6 text-center"
        style={{
          background: "linear-gradient(180deg,#030110 0%,#0b0520 50%,#030110 100%)",
          zIndex: 1,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <blockquote
            className="text-xl md:text-2xl leading-relaxed"
            style={{ color: "#6B5F80", fontWeight: 300 }}
          >
            &ldquo;Grande parte das pessoas vive sem perceber os padrões, algoritmos e criptografias
            que moldam comportamento, percepção e consciência.&rdquo;
            <br />
            <span style={{ color: "#C9B8E8", fontWeight: 400 }}>
              E muitas dessas estruturas foram projetadas para parecer naturais.
            </span>
          </blockquote>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. O QUE É
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6 overflow-hidden" style={{ background: "#030110", zIndex: 1 }}>
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 max-w-xl mx-auto">
            <SectionLabel>Estrutura</SectionLabel>
            <SectionTitle>O que é o D&apos;JHON RHU&apos;O</SectionTitle>
            <p className="text-base leading-relaxed" style={{ color: "#6B5F80", fontWeight: 300 }}>
              Uma estrutura de alinhamento e ativação consciencial. Não se trata de religião.{" "}
              <span style={{ color: "#C4B5D4" }}>
                É um processo de percepção, alinhamento e reorganização interna.
              </span>
            </p>
          </div>

          {/* Features grid */}
          <div
            className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3"
            style={{
              border: "1px solid rgba(92,47,160,.25)",
              borderRadius: 16,
              overflow: "hidden",
            }}
          >
            {[
              {
                Icon: Key,
                title: "Quebra de Criptografia",
                text: "Identificação e dissolução de bloqueios conscienciais que limitam percepção e movimento.",
              },
              {
                Icon: Waves,
                title: "Reorganização de Frequência",
                text: "Reconfiguração da estrutura vibracional interna para padrões mais compatíveis.",
              },
              {
                Icon: Eye,
                title: "Expansão de Percepção",
                text: "Leitura ampliada da simulação e acesso a camadas além da experiência comum.",
              },
              {
                Icon: Layers,
                title: "Desbloqueio Estrutural",
                text: "Remoção de padrões profundos que operam abaixo do nível consciente.",
              },
              {
                Icon: Target,
                title: "Alinhamento de Estruturas",
                text: "Conexão com estruturas e frequências compatíveis ao seu momento consciencial.",
              },
              {
                Icon: Sparkles,
                title: "Ampliação de Lucidez",
                text: "Maior clareza, autonomia e direção dentro da própria jornada consciencial.",
              },
            ].map(({ Icon, title, text }, i) => (
              <div
                key={i}
                className="feat-cell space-y-4 p-10"
                style={{
                  borderRight: i % 3 !== 2 ? "1px solid rgba(92,47,160,.2)" : undefined,
                  borderBottom: i < 3 ? "1px solid rgba(92,47,160,.2)" : undefined,
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(92,47,160,.15)",
                      border: "1px solid rgba(92,47,160,.3)",
                    }}
                  >
                    <Icon size={15} style={{ color: "#B87DE8" }} />
                  </div>
                  <h3 className="text-sm font-medium" style={{ color: "#C9A84C", letterSpacing: ".04em" }}>
                    {title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6B5F80", fontWeight: 300 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. PULL QUOTE
      ══════════════════════════════════════════════════════════════════════ */}
      <div
        className="relative w-full py-16 px-6 text-center"
        style={{
          background: "#08031A",
          borderTop: "1px solid rgba(92,47,160,.12)",
          borderBottom: "1px solid rgba(92,47,160,.12)",
          zIndex: 1,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <svg viewBox="0 0 40 30" fill="none" className="w-8 h-6 mx-auto mb-6 opacity-20">
            <path
              d="M0 30 L0 18 Q0 0 18 0 L18 8 Q8 8 8 18 L16 18 L16 30 Z M22 30 L22 18 Q22 0 40 0 L40 8 Q30 8 30 18 L38 18 L38 30 Z"
              fill="#B87DE8"
            />
          </svg>
          <blockquote
            className="text-xl md:text-2xl italic"
            style={{ color: "#B87DE8", fontWeight: 300 }}
          >
            Nem todo bloqueio é emocional. Alguns são estruturais e só podem ser dissolvidos de dentro para fora.
          </blockquote>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          5. 6 PILARES
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6" style={{ background: "#030110", zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Acesso</SectionLabel>
            <SectionTitle className="mb-4">Os 6 Pilares da Ativação</SectionTitle>
            <p className="text-sm max-w-sm mx-auto" style={{ color: "#4D4466", fontWeight: 300 }}>
              Cada camada opera em um nível específico da estrutura consciencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILARES.map((p, i) => (
              <div key={i} className="glass p-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      color: "rgba(92,47,160,.45)",
                      fontSize: "2rem",
                      lineHeight: 1,
                      fontWeight: 300,
                      letterSpacing: ".05em",
                    }}
                  >
                    {p.num}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{
                      background: "radial-gradient(circle,rgba(201,168,76,.18) 0%,transparent 70%)",
                      border: "1px solid rgba(201,168,76,.2)",
                    }}
                  />
                </div>
                <div>
                  <h3
                    className="mb-2"
                    style={{ color: "#C9A84C", fontSize: ".95rem", fontWeight: 500 }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B5F80", fontWeight: 300 }}>
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. PROCESSO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full py-24 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#080318 0%,#030110 60%,#0b0520 100%)",
          borderTop: "1px solid rgba(92,47,160,.1)",
          borderBottom: "1px solid rgba(92,47,160,.1)",
          zIndex: 1,
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Processo</SectionLabel>
            <SectionTitle>A Experiência da Ativação</SectionTitle>
          </div>

          <div className="relative">
            <div
              className="absolute top-8 bottom-8 w-px"
              style={{
                left: 31,
                background: "linear-gradient(180deg,rgba(92,47,160,.8),rgba(92,47,160,.2),transparent)",
              }}
            />
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.num} className="step-card relative flex gap-6 p-6 pl-20">
                  <div
                    className="absolute flex items-center justify-center"
                    style={{
                      left: 8,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#08031A",
                      border: "1px solid rgba(92,47,160,.65)",
                      boxShadow: "0 0 20px rgba(92,47,160,.35)",
                    }}
                  >
                    <span style={{ color: "#B87DE8", fontWeight: 300, fontSize: ".85rem" }}>
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2" style={{ color: "#C9A84C", fontSize: ".95rem", fontWeight: 500 }}>
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B5F80", fontWeight: 300 }}>
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. PARA QUEM É / NÃO É
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 px-6" style={{ background: "#030110", zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Esta ativação é para você?</SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-8 rounded-xl"
              style={{
                background: "rgba(123,63,228,.04)",
                border: "1px solid rgba(123,63,228,.18)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(123,63,228,.15)", border: "1px solid rgba(123,63,228,.32)" }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M3 8l4 4 6-6" stroke="#9B55D4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ color: "#9B55D4", fontWeight: 500, fontSize: "1rem" }}>Para quem é</h3>
              </div>
              <ul className="space-y-4">
                {PARA_QUEM.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#9B8FBA", fontWeight: 300 }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#7B3FE4" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 rounded-xl"
              style={{
                background: "rgba(180,40,80,.03)",
                border: "1px solid rgba(180,40,80,.15)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(180,40,80,.12)", border: "1px solid rgba(180,40,80,.28)" }}
                >
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="#C44569" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 style={{ color: "#C44569", fontWeight: 500, fontSize: "1rem" }}>Para quem não é</h3>
              </div>
              <ul className="space-y-4">
                {NAO_PARA.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#9B8FBA", fontWeight: 300 }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C44569" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. FACILITADOR
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full py-24 px-6"
        style={{ background: "#08031A", borderTop: "1px solid rgba(92,47,160,.1)", zIndex: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Facilitador</SectionLabel>
            <SectionTitle>Sergio Oliveira</SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex items-center justify-center">
              <div className="relative" style={{ width: 240, height: 300 }}>
                {[
                  "top-0 left-0 border-t border-l",
                  "top-0 right-0 border-t border-r",
                  "bottom-0 left-0 border-b border-l",
                  "bottom-0 right-0 border-b border-r",
                ].map((cls, i) => (
                  <div key={i} className={`absolute w-6 h-6 ${cls}`} style={{ borderColor: "#C9A84C" }} />
                ))}
                <div
                  className="absolute overflow-hidden"
                  style={{ top: 10, left: 10, right: 10, bottom: 10, borderRadius: 6 }}
                >
                  <img
                    src="/images/foto-sergio-v2.png"
                    alt="Sergio Oliveira"
                    className="w-full h-full object-cover object-top"
                    style={{ filter: "brightness(.88) contrast(1.06) saturate(.9)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg,transparent 50%,rgba(3,1,16,.85) 100%)" }}
                  />
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-base mb-5 leading-relaxed" style={{ color: "#6B5F80", fontWeight: 300 }}>
                Facilitador de ativações conscienciais e apometria quântica. Há mais de uma
                década trabalhando com estruturas de alinhamento, desbloqueio e expansão de percepção.
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: "#6B5F80", fontWeight: 300 }}>
                O D&apos;JHON RHU&apos;O é uma das ativações desenvolvidas por Sergio a partir
                de anos de pesquisa prática em conscienciologia aplicada.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Apometria Quântica",
                  "Ativações Conscienciais",
                  "Expansão de Percepção",
                  "Leitura da Simulação",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs tracking-wider"
                    style={{
                      background: "rgba(92,47,160,.1)",
                      border: "1px solid rgba(92,47,160,.22)",
                      color: "#9B55D4",
                      borderRadius: 6,
                      fontWeight: 300,
                      letterSpacing: ".12em",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. INVESTIMENTO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full py-24 px-6"
        style={{ background: "#030110", borderTop: "1px solid rgba(255,255,255,.06)", zIndex: 1 }}
      >
        <div className="max-w-lg mx-auto text-center">
          <SectionLabel>Investimento</SectionLabel>
          <SectionTitle className="mb-12">Acesso à Ativação</SectionTitle>

          <div
            className="relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 16,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 32px 64px rgba(0,0,0,.5)",
            }}
          >
            <div className="p-10">
              <div
                className="inline-flex items-center gap-2 mb-8 px-4 py-1.5"
                style={{
                  background: "rgba(92,47,160,.12)",
                  border: "1px solid rgba(92,47,160,.22)",
                  borderRadius: 9999,
                  color: "#B87DE8",
                  fontSize: ".68rem",
                  letterSpacing: ".15em",
                  fontWeight: 300,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#9B55D4" }} />
                Sessão Online Individual com Sergio
              </div>

              <p
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "#4D4466", letterSpacing: ".2em", fontWeight: 300 }}
              >
                Investimento
              </p>

              <div className="flex items-end justify-center gap-1.5 mb-2">
                <span style={{ color: "#6B5F80", fontSize: "1.25rem", fontWeight: 300, marginBottom: 8 }}>
                  R$
                </span>
                <span
                  style={{
                    fontSize: "clamp(3.5rem,11vw,5.5rem)",
                    lineHeight: 1,
                    fontWeight: 300,
                    background: "linear-gradient(135deg,#C9A84C,#E8C66A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  2.200
                </span>
                <span style={{ color: "#6B5F80", fontSize: "1.25rem", fontWeight: 300, marginBottom: 8 }}>
                  ,00
                </span>
              </div>
              <p className="text-sm mb-10" style={{ color: "#6B5F80", fontWeight: 300 }}>
                ou em até{" "}
                <span style={{ color: "#C9A84C", fontWeight: 500 }}>12×</span> no cartão
              </p>

              <GoldDivider />

              <div className="grid grid-cols-3 gap-3 my-8">
                {[
                  { label: "Formato", value: "Online ao vivo" },
                  { label: "Integração", value: "Até 16 dias" },
                  { label: "Condução", value: "Sergio Oliveira" },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col gap-1 p-3"
                    style={{
                      background: "rgba(92,47,160,.07)",
                      border: "1px solid rgba(92,47,160,.14)",
                      borderRadius: 8,
                    }}
                  >
                    <p
                      className="text-xs"
                      style={{ color: "#4D4466", letterSpacing: ".1em", fontWeight: 300 }}
                    >
                      {d.label}
                    </p>
                    <p className="text-xs text-left" style={{ color: "#F4F0FF", fontWeight: 400 }}>
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center gap-3 font-medium uppercase tracking-widest"
                style={{
                  background: "linear-gradient(135deg,#C9A84C,#A07D1C)",
                  color: "#030110",
                  fontSize: ".78rem",
                  letterSpacing: ".18em",
                  padding: "16px 32px",
                  borderRadius: 8,
                  boxShadow: "0 0 40px rgba(201,168,76,.18)",
                }}
              >
                <WaIcon />
                Quero Acessar
              </a>

              <p className="text-xs mt-5" style={{ color: "#3A2F4E", fontWeight: 300 }}>
                Após o contato, você receberá todas as informações sobre agendamento e formas de pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          10. FECHAMENTO
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full py-28 px-6 text-center overflow-hidden"
        style={{
          background: "linear-gradient(180deg,#030110 0%,#0b0520 50%,#030110 100%)",
          borderTop: "1px solid rgba(92,47,160,.1)",
          zIndex: 1,
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: 0.04 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 800 800" fill="none" className="w-full max-w-2xl">
            <circle cx="400" cy="400" r="380" stroke="#9B55D4" strokeWidth="1" strokeDasharray="6 4" />
            <circle cx="400" cy="400" r="280" stroke="#C9A84C" strokeWidth=".5" />
            <circle cx="400" cy="400" r="180" stroke="#9B55D4" strokeWidth="1" strokeDasharray="3 6" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg,transparent,rgba(201,168,76,.5))" }} />
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <polygon points="12,2 22,20 2,20" stroke="#C9A84C" strokeWidth="1.2" fill="none" />
              <circle cx="12" cy="14" r="2" fill="#C9A84C" />
            </svg>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg,rgba(201,168,76,.5),transparent)" }} />
          </div>

          <h2
            className="mb-6 leading-snug"
            style={{ color: "#F4F0FF", fontWeight: 300, fontSize: "clamp(1.8rem,4vw,2.5rem)", lineHeight: 1.3 }}
          >
            Se você percebe que existe algo além,{" "}
            <span style={{ color: "#C9A84C" }}>este pode ser o próximo passo.</span>
          </h2>

          <p className="text-base mb-4 leading-relaxed" style={{ color: "#6B5F80", fontWeight: 300 }}>
            A ativação é individual, consciente e progressiva.
            <br />
            Não exige crença. Apenas a disposição de perceber.
          </p>

          <p
            className="text-xs tracking-[.3em] uppercase mb-12"
            style={{ color: "#4D4466", fontWeight: 300 }}
          >
            Academia HQ · Apometria Quântica
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-3 font-medium uppercase tracking-widest"
              style={{
                background: "linear-gradient(135deg,#C9A84C,#A07D1C)",
                color: "#030110",
                fontSize: ".78rem",
                letterSpacing: ".18em",
                padding: "16px 40px",
                borderRadius: 8,
                boxShadow: "0 0 40px rgba(201,168,76,.22), 0 0 80px rgba(201,168,76,.06)",
              }}
            >
              <WaIcon />
              Acessar D&apos;JHON RHU&apos;O
            </a>

            <Link
              href="/ativacoes"
              className="btn-ghost gap-2 text-sm px-6 py-4"
              style={{ color: "#4D4466", fontWeight: 300 }}
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
