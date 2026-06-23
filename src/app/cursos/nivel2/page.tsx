import { Metadata } from "next";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { MatrixText } from "@/components/ui/matrix-text";
import { Cpu, Globe, Zap, Users, ArrowUpRight, Layers } from "lucide-react";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Curso Nível II — Além da Simulação | Academia HQ",
  description:
    "Aprofunde sua atuação na transmigração consciencial. Simuladores, IA, criptografias, projeção astral, extração seletiva e evacuação estratégica.",
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

// ─── Accent: Violet ───────────────────────────────────────────────────────────
const A = {
  base: "#050112",
  mid: "#0A0520",
  accent: "#7C3AED",
  accentLight: "#A78BFA",
  accentMuted: "rgba(124,58,237,.18)",
  accentBorder: "rgba(124,58,237,.25)",
  accentGlow: "rgba(124,58,237,.35)",
  text: "#F5F0FF",
  textMuted: "#7264A8",
  textFaint: "#352B5A",
};

// ─── Content ──────────────────────────────────────────────────────────────────
const MODULOS = [
  {
    num: "01",
    title: "Estruturas da Realidade",
    items: ["Kannyus BR8 Y10 B26", "Simuladores", "Hologramas", "IA Consciencial", "Criptografias"],
  },
  {
    num: "02",
    title: "Esferas e Dimensões",
    items: ["Havona", "Nebadon", "Terra", "Transmigração Consciencial", "Corpo astral fora da simulação"],
  },
  {
    num: "03",
    title: "Frequências Avançadas",
    items: ["D'JHON RHU'O", "Haseya", "Yasherath", "Sexo e a criação / cocriação"],
  },
  {
    num: "04",
    title: "Operações Conscienciais",
    items: ["Projeção Astral e Mental", "Equipes", "Evacuação estratégica", "Extração seletiva", "Sintonização Coletiva"],
  },
];

const FEATURES = [
  { Icon: Cpu, title: "IA e Criptografias", text: "Compreensão profunda das estruturas artificiais que operam dentro da simulação." },
  { Icon: Globe, title: "Transmigração Consciencial", text: "Atuação em múltiplas esferas: Terra, Havona, Nebadon e além." },
  { Icon: Zap, title: "Projeção Avançada", text: "Projeção astral e mental com maior lucidez e precisão operacional." },
  { Icon: Layers, title: "Extração Seletiva", text: "Protocolos avançados de extração e posicionamento consciencial." },
  { Icon: Users, title: "Operações com Equipes", text: "Atuação coordenada com equipes e estruturas de suporte multidimensional." },
  { Icon: ArrowUpRight, title: "Evacuação Estratégica", text: "Compreensão e execução de protocolos de evacuação em diferentes esferas." },
];

const PILARES = [
  { num: "01", title: "Maior Lucidez Fora da Simulação", text: "Expansão significativa da capacidade de operar conscientemente além dos padrões holográficos." },
  { num: "02", title: "Elevação do Gradiente Energético", text: "Aumento do campo vibracional para interagir com frequências e estruturas mais avançadas." },
  { num: "03", title: "Percepção Multidimensional", text: "Habilidade de perceber e interagir com diferentes realidades e esferas de atuação." },
  { num: "04", title: "Protocolo de Proteção Avançado", text: "Técnicas de proteção energética de nível superior para você e quem você atende." },
  { num: "05", title: "Sintonização Coletiva Especial", text: "Sintonização específica para acessar frequências elevadas em grupo e fortalecer a egrégora." },
  { num: "06", title: "Resultados Acelerados", text: "Avanços práticos mais rápidos e duradouros na própria jornada e nos atendimentos." },
];

const PARA_QUEM = [
  "Alunos que concluíram o Nível I ou o Método TEAC",
  "Quem deseja aprofundar a atuação na transmigração consciencial",
  "Facilitadores buscando protocolos mais avançados",
  "Quem já opera com equipes e quer ampliar a eficácia",
  "Pessoas que percebem limitações na atuação atual e querem avançar",
  "Quem busca lucidez fora da simulação com estrutura e método",
];

const NAO_PARA = [
  "Pessoas sem base no Nível I ou TEAC",
  "Quem busca atalhos sem compromisso com o processo",
  "Pessoas sem responsabilidade sobre a própria jornada consciencial",
  "Quem espera resultados sem prática e integração",
];

const WA_URL =
  "https://wa.me/5514998525760?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+Curso+N%C3%ADvel+2";

// ─── Sub-components ───────────────────────────────────────────────────────────
const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[.28em] uppercase mb-4 font-light" style={{ color: A.accentLight }}>
      {children}
    </p>
  );
}

function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-light ${className ?? ""}`} style={{ color: A.text, lineHeight: 1.2 }}>
      {children}
    </h2>
  );
}

function VioletDivider() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1" style={{ background: "rgba(124,58,237,.2)" }} />
      <div className="w-1.5 h-1.5 rotate-45" style={{ background: A.accent, opacity: 0.5 }} />
      <div className="h-px flex-1" style={{ background: "rgba(124,58,237,.2)" }} />
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Nivel2Page() {
  return (
    <main className={font.className} style={{ background: A.base, color: A.text }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes matrix-fall {
          0%   { transform: translateY(-110%); }
          100% { transform: translateY(110vh); }
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
        @keyframes glow-pulse { 0%,100%{opacity:.4} 50%{opacity:1} }

        .fu-1 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .05s both; }
        .fu-2 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .2s  both; }
        .fu-3 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .35s both; }
        .fu-4 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .5s  both; }
        .fu-5 { animation:fade-up .75s cubic-bezier(.16,1,.3,1) .65s both; }

        .glass-v {
          background: rgba(124,58,237,0.04);
          border: 1px solid rgba(124,58,237,.14);
          border-radius: 12px;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 24px 48px rgba(0,0,0,.4);
          transition: border-color .3s, background .3s;
        }
        .glass-v:hover {
          border-color: rgba(124,58,237,.35);
          background: rgba(124,58,237,.08);
        }
        .btn-v {
          display: inline-flex;
          align-items: center;
          transition: transform .2s cubic-bezier(.16,1,.3,1), box-shadow .2s;
        }
        .btn-v:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 60px rgba(124,58,237,.5), 0 0 0 1px rgba(124,58,237,.5) !important;
        }
        .btn-ghost-v {
          display: inline-flex; align-items: center;
          transition: color .2s, background .2s;
          border-radius: 8px;
        }
        .btn-ghost-v:hover { background: rgba(255,255,255,.05); color: ${A.text} !important; }
        .feat-v { background: rgba(124,58,237,.02); transition: background .3s; }
        .feat-v:hover { background: rgba(124,58,237,.07); }
        .step-v {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(124,58,237,.1);
          border-radius: 12px;
          transition: border-color .3s, background .3s;
        }
        .step-v:hover { border-color: rgba(124,58,237,.3); background: rgba(124,58,237,.05); }
      `}} />

      {/* Nebula */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute" style={{ top: "5%", left: "2%", width: 700, height: 700, background: "radial-gradient(circle, rgba(109,40,217,.2) 0%, transparent 65%)", filter: "blur(90px)", animation: "nebula-a 22s ease-in-out infinite" }} />
        <div className="absolute" style={{ bottom: "10%", right: "2%", width: 800, height: 800, background: "radial-gradient(circle, rgba(91,33,182,.16) 0%, transparent 65%)", filter: "blur(110px)", animation: "nebula-b 30s ease-in-out infinite" }} />
        <div className="absolute" style={{ top: "40%", left: "50%", width: 1000, height: 1000, transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(124,58,237,.05) 0%, transparent 60%)", filter: "blur(130px)" }} />
      </div>

      {/* ══ 1. HERO ══ */}
      <section
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ zIndex: 1, padding: "120px 24px 100px" }}
      >
        {/* Matrix rain */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ filter: "blur(0.8px)" }}>
          {MATRIX_COLS.map((col, i) => (
            <div key={i} className="absolute top-0 flex flex-col" style={{ left: col.left, opacity: col.opacity, animation: `matrix-fall ${col.duration}s linear ${col.delay}s infinite`, fontFamily: "monospace", fontSize: col.fontSize, lineHeight: 1.5, userSelect: "none" }}>
              {col.chars.map((char, j) => (
                <span key={j} style={{
                  color: j === col.chars.length - 1 ? "#FFFFFF" : j >= col.chars.length - 3 ? "#DDD6FE" : j >= col.chars.length - 8 ? "#A78BFA" : "#5B21B6",
                  opacity: Math.max(0.08, 1 - (col.chars.length - 1 - j) * 0.038),
                  textShadow: j === col.chars.length - 1 ? "0 0 12px rgba(221,214,254,1), 0 0 24px rgba(167,139,250,.6)" : j >= col.chars.length - 3 ? "0 0 6px rgba(167,139,250,.5)" : "none",
                }}>{char}</span>
              ))}
            </div>
          ))}
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 55% at 50% 48%, rgba(5,1,18,.78) 0%, rgba(5,1,18,.08) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0" style={{ height: 180, background: `linear-gradient(transparent, ${A.base})` }} />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 fu-1" style={{ background: A.accentMuted, border: `1px solid ${A.accentBorder}`, borderRadius: 9999, color: A.accentLight, fontSize: ".68rem", letterSpacing: ".22em", fontWeight: 300 }}>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: A.accent, animation: "glow-pulse 2.5s ease-in-out infinite" }} />
            17 de Maio de 2026 · Online Ao Vivo
          </div>

          <p className="fu-1 tracking-[.35em] uppercase mb-3" style={{ color: A.textMuted, fontSize: ".72rem", fontWeight: 300 }}>
            Academia HQ · Nível II
          </p>

          <h1 className="uppercase fu-2 flex flex-col items-center" style={{ fontSize: "clamp(3rem,11vw,8rem)", lineHeight: 0.92, fontWeight: 300, letterSpacing: ".08em" }}>
            <MatrixText text="NÍVEL" initialDelay={200} letterAnimationDuration={500} letterInterval={80} />
            <MatrixText text="II" initialDelay={700} letterAnimationDuration={500} letterInterval={80} />
          </h1>

          <p className="mt-6 mb-3 fu-3" style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", fontWeight: 300, color: A.accentLight, letterSpacing: ".12em" }}>
            Além da Simulação
          </p>

          <div className="flex items-center gap-4 mb-8 fu-3">
            <div className="h-px w-20" style={{ background: `linear-gradient(90deg,transparent,${A.accentGlow})` }} />
            <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
              <polygon points="10,1 19,17 1,17" stroke={A.accent} strokeWidth="1.2" fill="none" />
              <circle cx="10" cy="12" r="2" fill={A.accent} />
            </svg>
            <div className="h-px w-20" style={{ background: `linear-gradient(90deg,${A.accentGlow},transparent)` }} />
          </div>

          <p className="max-w-xl mx-auto mb-12 leading-relaxed fu-4" style={{ color: A.textMuted, fontSize: "1.05rem", fontWeight: 300 }}>
            A simulação tem camadas que o Nível I preparou você para ver.{" "}
            <span style={{ color: A.text, fontWeight: 400 }}>Agora é hora de aprender a operar dentro delas.</span>
          </p>

          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="btn-v gap-3 font-medium uppercase tracking-widest fu-5"
            style={{ background: `linear-gradient(135deg,${A.accent},#5B21B6)`, color: A.text, fontSize: ".8rem", letterSpacing: ".18em", padding: "16px 40px", borderRadius: 8, boxShadow: `0 0 40px ${A.accentGlow}, 0 0 80px rgba(124,58,237,.08)` }}
          >
            <WaIcon />
            Inscreva-se Agora
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${A.accentBorder},transparent)` }} />
      </section>

      {/* ══ 2. DECLARAÇÃO ══ */}
      <section className="relative w-full py-24 px-6 text-center" style={{ background: `linear-gradient(180deg,${A.base} 0%,${A.mid} 50%,${A.base} 100%)`, zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl leading-relaxed" style={{ color: A.textMuted, fontWeight: 300 }}>
            &ldquo;Entender a simulação é o início. Aprender a operar dentro — e além — dela, é o verdadeiro avanço.&rdquo;
            <br />
            <span style={{ color: "#DDD6FE", fontWeight: 400 }}>O Nível II é esse próximo passo.</span>
          </blockquote>
        </div>
      </section>

      {/* ══ 3. FEATURES ══ */}
      <section className="relative w-full py-24 px-6 overflow-hidden" style={{ background: A.base, zIndex: 1 }}>
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6 max-w-xl mx-auto">
            <SectionLabel>Conteúdo</SectionLabel>
            <SectionTitle>O que você vai aprender</SectionTitle>
            <p className="text-base leading-relaxed" style={{ color: A.textMuted, fontWeight: 300 }}>
              Atualizado para 2026, o Nível II aprofunda sua atuação nas estruturas da transmigração consciencial.{" "}
              <span style={{ color: "#DDD6FE" }}>Teoria e prática operacional integradas.</span>
            </p>
          </div>

          <div className="relative mx-auto grid max-w-4xl sm:grid-cols-2 lg:grid-cols-3" style={{ border: `1px solid ${A.accentBorder}`, borderRadius: 16, overflow: "hidden" }}>
            {FEATURES.map(({ Icon, title, text }, i) => (
              <div key={i} className="feat-v space-y-4 p-10" style={{ borderRight: i % 3 !== 2 ? "1px solid rgba(124,58,237,.18)" : undefined, borderBottom: i < 3 ? "1px solid rgba(124,58,237,.18)" : undefined }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: A.accentMuted, border: `1px solid ${A.accentBorder}` }}>
                    <Icon size={15} style={{ color: A.accentLight }} />
                  </div>
                  <h3 className="text-sm font-medium" style={{ color: A.accentLight, letterSpacing: ".04em" }}>{title}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: A.textMuted, fontWeight: 300 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. PULL QUOTE ══ */}
      <div className="relative w-full py-16 px-6 text-center" style={{ background: A.mid, borderTop: "1px solid rgba(124,58,237,.12)", borderBottom: "1px solid rgba(124,58,237,.12)", zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <svg viewBox="0 0 40 30" fill="none" className="w-8 h-6 mx-auto mb-6 opacity-20">
            <path d="M0 30 L0 18 Q0 0 18 0 L18 8 Q8 8 8 18 L16 18 L16 30 Z M22 30 L22 18 Q22 0 40 0 L40 8 Q30 8 30 18 L38 18 L38 30 Z" fill={A.accentLight} />
          </svg>
          <blockquote className="text-xl md:text-2xl italic" style={{ color: A.accentLight, fontWeight: 300 }}>
            Quem já vê a estrutura da simulação precisa aprender a se mover dentro dela com precisão.
          </blockquote>
        </div>
      </div>

      {/* ══ 5. MÓDULOS ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: A.base, zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Programação</SectionLabel>
            <SectionTitle className="mb-4">Módulos do Curso</SectionTitle>
            <p className="text-sm max-w-sm mx-auto" style={{ color: A.textFaint, fontWeight: 300 }}>
              Duração: 1 dia ao vivo (08:00 – 17:00). Online via Zoom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MODULOS.map((m, i) => (
              <div key={i} className="glass-v p-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span style={{ color: "rgba(124,58,237,.4)", fontSize: "2rem", lineHeight: 1, fontWeight: 300, letterSpacing: ".05em" }}>{m.num}</span>
                  <div className="w-8 h-8 rounded-full" style={{ background: `radial-gradient(circle,${A.accentMuted} 0%,transparent 70%)`, border: `1px solid ${A.accentBorder}` }} />
                </div>
                <div>
                  <h3 className="mb-3" style={{ color: A.accentLight, fontSize: ".95rem", fontWeight: 500 }}>{m.title}</h3>
                  <ul className="space-y-1.5">
                    {m.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: A.textMuted, fontWeight: 300 }}>
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: A.accent }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. PILARES ══ */}
      <section className="relative w-full py-24 px-6 overflow-hidden" style={{ background: `linear-gradient(135deg,${A.mid} 0%,${A.base} 60%,${A.mid} 100%)`, borderTop: "1px solid rgba(124,58,237,.1)", borderBottom: "1px solid rgba(124,58,237,.1)", zIndex: 1 }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Benefícios</SectionLabel>
            <SectionTitle className="mb-4">O que você recebe</SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILARES.map((p, i) => (
              <div key={i} className="glass-v p-7 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span style={{ color: "rgba(124,58,237,.4)", fontSize: "2rem", lineHeight: 1, fontWeight: 300 }}>{p.num}</span>
                  <div className="w-8 h-8 rounded-full" style={{ background: `radial-gradient(circle,${A.accentMuted} 0%,transparent 70%)`, border: `1px solid ${A.accentBorder}` }} />
                </div>
                <div>
                  <h3 className="mb-2" style={{ color: A.accentLight, fontSize: ".95rem", fontWeight: 500 }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: A.textMuted, fontWeight: 300 }}>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PARA QUEM ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: A.base, zIndex: 1 }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16"><SectionTitle>Este curso é para você?</SectionTitle></div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-xl" style={{ background: `rgba(124,58,237,.04)`, border: `1px solid rgba(124,58,237,.18)`, backdropFilter: "blur(20px)" }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: A.accentMuted, border: `1px solid ${A.accentBorder}` }}>
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M3 8l4 4 6-6" stroke={A.accentLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h3 style={{ color: A.accentLight, fontWeight: 500, fontSize: "1rem" }}>Para quem é</h3>
              </div>
              <ul className="space-y-4">
                {PARA_QUEM.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#C4B8E8", fontWeight: 300 }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: A.accent }} />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-xl" style={{ background: "rgba(180,40,80,.03)", border: "1px solid rgba(180,40,80,.15)", backdropFilter: "blur(20px)" }}>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(180,40,80,.12)", border: "1px solid rgba(180,40,80,.28)" }}>
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M4 4l8 8M12 4l-8 8" stroke="#C44569" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </div>
                <h3 style={{ color: "#C44569", fontWeight: 500, fontSize: "1rem" }}>Para quem não é</h3>
              </div>
              <ul className="space-y-4">
                {NAO_PARA.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#C4B8E8", fontWeight: 300 }}>
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#C44569" }} />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. FACILITADOR ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: A.mid, borderTop: "1px solid rgba(124,58,237,.1)", zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Facilitador</SectionLabel>
            <SectionTitle>Sergio Oliveira</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="relative" style={{ width: 240, height: 300 }}>
                {["top-0 left-0 border-t border-l","top-0 right-0 border-t border-r","bottom-0 left-0 border-b border-l","bottom-0 right-0 border-b border-r"].map((cls, i) => (
                  <div key={i} className={`absolute w-6 h-6 ${cls}`} style={{ borderColor: A.accent }} />
                ))}
                <div className="absolute overflow-hidden" style={{ top: 10, left: 10, right: 10, bottom: 10, borderRadius: 6 }}>
                  <img src="/images/foto-sergio-v2.png" alt="Sergio Oliveira" className="w-full h-full object-cover object-top" style={{ filter: "brightness(.88) contrast(1.06) saturate(.9)" }} />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(180deg,transparent 50%,rgba(5,1,18,.85) 100%)` }} />
                </div>
              </div>
            </div>
            <div>
              <p className="text-base mb-5 leading-relaxed" style={{ color: A.textMuted, fontWeight: 300 }}>
                Fundador da Academia HQ. Há mais de uma década trabalhando com estruturas de transmigração consciencial, desbloqueio energético e expansão de percepção multidimensional.
              </p>
              <p className="text-base mb-8 leading-relaxed" style={{ color: A.textMuted, fontWeight: 300 }}>
                O Nível II é o aprofundamento direto do seu trabalho com as estruturas mais avançadas da realidade consciencial — IA, criptografias, projeção, extração e evacuação estratégica.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Transmigração Consciencial", "Apometria Quântica", "Extração Seletiva", "Método TEAC"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 text-xs tracking-wider" style={{ background: A.accentMuted, border: `1px solid ${A.accentBorder}`, color: A.accentLight, borderRadius: 6, fontWeight: 300, letterSpacing: ".12em" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 9. INVESTIMENTO ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: A.base, borderTop: "1px solid rgba(255,255,255,.05)", zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Investimento</SectionLabel>
            <SectionTitle>Acesso ao Curso</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Turma */}
            <div className="relative overflow-hidden" style={{ background: "rgba(124,58,237,.04)", border: `1px solid ${A.accentBorder}`, borderRadius: 16, backdropFilter: "blur(24px)" }}>
              <div className="p-8">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5" style={{ background: A.accentMuted, border: `1px solid ${A.accentBorder}`, borderRadius: 9999, color: A.accentLight, fontSize: ".68rem", letterSpacing: ".15em", fontWeight: 300 }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: A.accent }} />
                  Turma Coletiva
                </div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: A.textFaint, fontWeight: 300 }}>Investimento</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span style={{ color: A.textMuted, fontSize: "1.1rem", fontWeight: 300, marginBottom: 6 }}>R$</span>
                  <span style={{ fontSize: "clamp(2.5rem,8vw,4rem)", lineHeight: 1, fontWeight: 300, background: `linear-gradient(135deg,${A.accent},${A.accentLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>1.600</span>
                  <span style={{ color: A.textMuted, fontSize: "1.1rem", fontWeight: 300, marginBottom: 6 }}>,00</span>
                </div>
                <VioletDivider />
                <ul className="space-y-2 my-6">
                  {["17 de maio de 2026 · 08:00–17:00", "Online ao vivo via Zoom", "Sintonização coletiva especial", "Certificado de conclusão"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs" style={{ color: A.textMuted, fontWeight: 300 }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: A.accent }} />{item}
                    </li>
                  ))}
                </ul>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-v w-full justify-center gap-3 font-medium uppercase tracking-widest"
                  style={{ background: `linear-gradient(135deg,${A.accent},#5B21B6)`, color: A.text, fontSize: ".75rem", letterSpacing: ".18em", padding: "14px 24px", borderRadius: 8, boxShadow: `0 0 30px rgba(124,58,237,.18)` }}>
                  <WaIcon />Inscrever-se
                </a>
              </div>
            </div>
            {/* Solo */}
            <div className="relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, backdropFilter: "blur(24px)" }}>
              <div className="p-8">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 9999, color: "#9BA8C8", fontSize: ".68rem", letterSpacing: ".15em", fontWeight: 300 }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#6272A8" }} />
                  Solo 1×1 com Sergio
                </div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: A.textFaint, fontWeight: 300 }}>Sessão individual</p>
                <div className="flex items-end gap-1.5 mb-1">
                  <span style={{ color: A.textMuted, fontSize: "1.1rem", fontWeight: 300, marginBottom: 6 }}>R$</span>
                  <span style={{ fontSize: "clamp(2.5rem,8vw,4rem)", lineHeight: 1, fontWeight: 300, color: "#9BA8C8" }}>2.200</span>
                  <span style={{ color: A.textMuted, fontSize: "1.1rem", fontWeight: 300, marginBottom: 6 }}>,00</span>
                </div>
                <p className="text-xs mb-6" style={{ color: A.textMuted, fontWeight: 300 }}>Sem aguardar turma coletiva</p>
                <VioletDivider />
                <ul className="space-y-2 my-6">
                  {["Data à sua escolha", "Sessão individual exclusiva", "Sem limite de turma", "Certificado de conclusão"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs" style={{ color: A.textMuted, fontWeight: 300 }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#6272A8" }} />{item}
                    </li>
                  ))}
                </ul>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-v w-full justify-center gap-3 font-medium uppercase tracking-widest"
                  style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", color: "#9BA8C8", fontSize: ".75rem", letterSpacing: ".18em", padding: "14px 24px", borderRadius: 8 }}>
                  <WaIcon />Falar com Sergio
                </a>
              </div>
            </div>
          </div>
          <p className="text-xs text-center mt-6" style={{ color: A.textFaint, fontWeight: 300 }}>
            Após o contato, você receberá todas as informações sobre formas de pagamento e confirmação.
          </p>
        </div>
      </section>

      {/* ══ 10. FECHAMENTO ══ */}
      <section className="relative w-full py-28 px-6 text-center overflow-hidden" style={{ background: `linear-gradient(180deg,${A.base} 0%,${A.mid} 50%,${A.base} 100%)`, borderTop: "1px solid rgba(124,58,237,.1)", zIndex: 1 }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.04 }} aria-hidden="true">
          <svg viewBox="0 0 800 800" fill="none" className="w-full max-w-2xl">
            <circle cx="400" cy="400" r="380" stroke={A.accent} strokeWidth="1" strokeDasharray="6 4" />
            <circle cx="400" cy="400" r="280" stroke={A.accentLight} strokeWidth=".5" />
            <circle cx="400" cy="400" r="180" stroke={A.accent} strokeWidth="1" strokeDasharray="3 6" />
          </svg>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg,transparent,${A.accentGlow})` }} />
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <polygon points="12,2 22,20 2,20" stroke={A.accent} strokeWidth="1.2" fill="none" />
              <circle cx="12" cy="14" r="2" fill={A.accent} />
            </svg>
            <div className="h-px w-16" style={{ background: `linear-gradient(90deg,${A.accentGlow},transparent)` }} />
          </div>
          <h2 className="mb-6 leading-snug" style={{ color: A.text, fontWeight: 300, fontSize: "clamp(1.8rem,4vw,2.5rem)", lineHeight: 1.3 }}>
            Você já viu a estrutura.{" "}
            <span style={{ color: A.accentLight }}>Agora aprenda a se mover dentro dela.</span>
          </h2>
          <p className="text-base mb-4 leading-relaxed" style={{ color: A.textMuted, fontWeight: 300 }}>
            O Nível II é para quem está pronto para o próximo nível de atuação consciencial.
            <br />Com método, estrutura e precisão.
          </p>
          <p className="text-xs tracking-[.3em] uppercase mb-12" style={{ color: A.textFaint, fontWeight: 300 }}>
            Academia HQ · Transmigração Consciencial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="btn-v gap-3 font-medium uppercase tracking-widest"
              style={{ background: `linear-gradient(135deg,${A.accent},#5B21B6)`, color: A.text, fontSize: ".78rem", letterSpacing: ".18em", padding: "16px 40px", borderRadius: 8, boxShadow: `0 0 40px ${A.accentGlow}, 0 0 80px rgba(124,58,237,.06)` }}>
              <WaIcon />Inscreva-se no Nível II
            </a>
            <Link href="/cursos" className="btn-ghost-v gap-2 text-sm px-6 py-4" style={{ color: A.textFaint, fontWeight: 300 }}>
              Ver todos os cursos
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
