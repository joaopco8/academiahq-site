'use client';

import Link from 'next/link';

const P = {
  bg: "#04081A",
  mid: "#060C20",
  surface: "rgba(30,58,138,0.05)",
  blue: "#2563EB",
  blueDark: "#1E40AF",
  blueLight: "#60A5FA",
  blueMuted: "rgba(37,99,235,0.10)",
  blueBorder: "rgba(37,99,235,0.22)",
  blueGlow: "rgba(37,99,235,0.35)",
  gold: "#C9A84C",
  goldLight: "#E5C76B",
  goldMuted: "rgba(201,168,76,0.10)",
  goldBorder: "rgba(201,168,76,0.28)",
  goldGlow: "rgba(201,168,76,0.30)",
  text: "#F1F5F9",
  textMuted: "#94A3B8",
  textFaint: "#475569",
  white: "#FFFFFF",
};

const WA_URL = "https://wa.me/5514998525760?text=Ol%C3%A1%2C+tenho+interesse+no+curso+PNL+para+Terapeutas";
const WA_AULA = "https://wa.me/5514998525760?text=Ol%C3%A1%2C+quero+assistir+a+aula+gratuita+sobre+N%C3%ADveis+Neurol%C3%B3gicos";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const CheckIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ color, flexShrink: 0, marginTop: 3 }}>
    <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ color: P.textFaint, flexShrink: 0, marginTop: 3 }}>
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const Divider = ({ color }: { color: string }) => (
  <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${color}, transparent)` }} />
);

const MODULOS = [
  {
    num: "01",
    title: "PNL Aplicada à Clínica",
    desc: "Mapas mentais, paradigmas, filtros, valores, crenças e critérios. Como o cliente constrói a realidade — e como acessar essa estrutura na anamnese.",
    tags: ["Mapas Mentais", "Crenças", "Anamnese"],
  },
  {
    num: "02",
    title: "Inteligência Emocional e Mindset",
    desc: "Como reconhecer e trabalhar os padrões emocionais que travam o processo terapêutico — tanto do cliente quanto do próprio terapeuta.",
    tags: ["Mindset", "Regulação Emocional", "Padrões"],
  },
  {
    num: "03",
    title: "Alinhamento dos Níveis Neurológicos",
    desc: "O modelo de Dilts aplicado à investigação e à intervenção. Como identificar em qual nível está o bloqueio e ser mais assertivo na condução.",
    tags: ["Modelo Dilts", "Investigação", "Intervenção"],
  },
  {
    num: "04",
    title: "Golden Circle para Terapeutas",
    desc: "Como clarear o propósito do seu trabalho, comunicar com autenticidade e atrair clientes alinhados com o que você faz.",
    tags: ["Propósito", "Comunicação", "Posicionamento"],
  },
];

const DORES = [
  "Faço a sessão, mas sinto que não fui fundo o suficiente.",
  "Não consigo personalizar o atendimento porque não entendo como o cliente processa a realidade.",
  "Tenho dificuldade de comunicar o valor do meu trabalho e construir carteira de clientes.",
];

const PARA_QUEM = [
  "Terapeutas em atuação que querem aprofundar a investigação com clientes",
  "Profissionais que sentem que os atendimentos poderiam ser mais precisos e personalizados",
  "Quem quer clareza para comunicar e vender o próprio trabalho",
  "Facilitadores da Academia HQ que querem integrar PNL à sua atuação",
];

const NAO_PARA = [
  "Pessoas sem experiência em atendimento terapêutico",
  "Quem busca conteúdo apenas teórico sem aplicação prática",
  "Quem não está disposto a questionar a própria forma de conduzir sessões",
];

const INCLUSOS = [
  "Acesso completo ao curso ao vivo com o Sergio",
  "Material de apoio exclusivo",
  "Certificado de conclusão",
  "Suporte pós-curso",
];

export default function PNLParaTerapeutasPage() {
  return (
    <main style={{ background: P.bg, color: P.text, minHeight: "100vh" }}>
      <style>{`
        @keyframes fade-up { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
        @keyframes gold-shimmer-anim { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes glow-pulse-gold { 0%,100% { opacity: .6; } 50% { opacity: 1; } }
        .fu-1 { animation: fade-up .55s ease both .05s; }
        .fu-2 { animation: fade-up .6s ease both .15s; }
        .fu-3 { animation: fade-up .6s ease both .28s; }
        .fu-4 { animation: fade-up .6s ease both .40s; }
        .fu-5 { animation: fade-up .6s ease both .52s; }
        .gold-text {
          background: linear-gradient(90deg, ${P.gold} 0%, ${P.goldLight} 40%, ${P.gold} 65%, #F5DEB3 100%);
          background-size: 220% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gold-shimmer-anim 5s linear infinite;
        }
        .card-hover { transition: border-color .25s, box-shadow .25s, transform .25s; }
        .card-hover:hover { transform: translateY(-3px); }
        .card-hover-blue:hover { border-color: ${P.blue} !important; box-shadow: 0 8px 48px ${P.blueGlow}; }
        .card-hover-gold:hover { border-color: ${P.gold} !important; box-shadow: 0 8px 48px ${P.goldGlow}; }
        .btn-base { display: inline-flex; align-items: center; justify-content: center; gap: 10px; font-size: .82rem; font-weight: 500; letter-spacing: .09em; border-radius: 8px; padding: 14px 32px; text-decoration: none; transition: transform .2s, box-shadow .2s; cursor: pointer; border: none; }
        .btn-base:hover { transform: translateY(-2px); }
        .btn-blue-solid { background: linear-gradient(135deg, ${P.blue}, ${P.blueDark}); color: #fff; box-shadow: 0 0 36px ${P.blueGlow}; }
        .btn-blue-solid:hover { box-shadow: 0 0 60px ${P.blueGlow}; }
        .btn-gold-solid { background: linear-gradient(135deg, ${P.gold}, #96762E); color: #fff; box-shadow: 0 0 36px ${P.goldGlow}; }
        .btn-gold-solid:hover { box-shadow: 0 0 60px ${P.goldGlow}; }
        .btn-ghost-gold { background: transparent; color: ${P.goldLight}; border: 1px solid ${P.goldBorder}; }
        .btn-ghost-gold:hover { background: ${P.goldMuted}; border-color: ${P.gold}; box-shadow: 0 0 28px ${P.goldGlow}; }
        .pill { display: inline-flex; align-items: center; gap: 8px; border-radius: 9999px; font-size: .67rem; letter-spacing: .2em; font-weight: 300; padding: 6px 18px; }
        .tag { font-size: .72rem; font-weight: 300; letter-spacing: .09em; border-radius: 6px; padding: 4px 10px; }
      `}</style>

      {/* ══ 1. HERO ══ */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "linear-gradient(160deg, #050B22 0%, #04081A 60%, #050A18 100%)" }}>
          <div style={{ position: "absolute", top: "12%", left: "50%", transform: "translateX(-50%)", width: 900, height: 700, background: "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 65%)", filter: "blur(90px)" }} />
          <div style={{ position: "absolute", bottom: "8%", right: "8%", width: 500, height: 500, background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)", filter: "blur(70px)" }} />
          <div style={{ position: "absolute", top: "60%", left: "5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="pill fu-1 mx-auto mb-8"
            style={{ background: P.goldMuted, border: `1px solid ${P.goldBorder}`, color: P.goldLight }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: P.gold, display: "inline-block", animation: "glow-pulse-gold 2.5s ease-in-out infinite", flexShrink: 0 }} />
            FORMAÇÃO PROFISSIONAL · ONLINE AO VIVO
          </div>

          <h1 className="fu-2 mb-6" style={{ fontWeight: 300, fontSize: "clamp(3rem,9vw,6rem)", lineHeight: 1.06, color: P.white }}>
            PNL para{" "}
            <span className="gold-text" style={{ fontStyle: "italic", fontFamily: "Georgia, 'Times New Roman', serif" }}>
              Terapeutas
            </span>
          </h1>

          <p className="fu-3 mb-4 mx-auto" style={{ maxWidth: 640, fontSize: "clamp(1.05rem,2.5vw,1.22rem)", lineHeight: 1.75, color: P.textMuted, fontWeight: 300 }}>
            Aprenda a investigar com profundidade, entregar com precisão e comunicar o valor do seu trabalho com clareza.
          </p>
          <p className="fu-3 mb-12 mx-auto" style={{ maxWidth: 540, fontSize: ".93rem", lineHeight: 1.75, color: P.textFaint, fontWeight: 300 }}>
            Um curso prático de Programação Neurolinguística desenvolvido para terapeutas que querem ir além da intuição e operar com método.
          </p>

          <div className="fu-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-base btn-blue-solid">
              <WaIcon />
              Quero me inscrever
            </a>
            <a href={WA_AULA} target="_blank" rel="noopener noreferrer" className="btn-base btn-ghost-gold">
              Assistir aula gratuita
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 140, background: `linear-gradient(transparent, ${P.bg})` }} />
      </section>

      {/* ══ 2. PROBLEMA ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: P.mid }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase mb-4" style={{ color: P.gold, fontWeight: 300, letterSpacing: ".22em" }}>O Problema</p>
            <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: P.white, lineHeight: 1.25 }}>
              O que ninguém te ensinou<br />na formação de terapeuta
            </h2>
            <Divider color={P.goldBorder} />
            <p className="mt-8 mx-auto" style={{ maxWidth: 600, color: P.textMuted, lineHeight: 1.85, fontWeight: 300, fontSize: "1.02rem" }}>
              A maioria dos terapeutas aprendeu técnicas. Poucos aprenderam a fazer as perguntas certas. A anamnese mal conduzida gera atendimentos genéricos, resultados abaixo do potencial e clientes que não voltam.{" "}
              <span style={{ color: P.white }}>Esse curso existe para mudar isso.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {DORES.map((d, i) => (
              <div key={i} className="card-hover card-hover-blue p-8 rounded-xl"
                style={{ background: P.surface, border: `1px solid rgba(255,255,255,0.06)`, backdropFilter: "blur(20px)" }}>
                <span style={{ color: `${P.blue}44`, fontSize: "2.2rem", lineHeight: 1, fontWeight: 300, fontFamily: "Georgia, serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5" style={{ color: P.textMuted, fontWeight: 300, lineHeight: 1.75, fontSize: ".93rem", fontStyle: "italic" }}>
                  "{d}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. MÓDULOS ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: P.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase mb-4" style={{ color: P.blueLight, fontWeight: 300, letterSpacing: ".22em" }}>Conteúdo do Curso</p>
            <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: P.white, lineHeight: 1.25 }}>
              O que você vai aprender
            </h2>
            <Divider color={P.blueBorder} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {MODULOS.map((m) => (
              <div key={m.num} className="card-hover card-hover-blue p-8 rounded-xl"
                style={{ background: P.blueMuted, border: `1px solid ${P.blueBorder}`, backdropFilter: "blur(20px)" }}>
                <div className="flex items-start gap-5">
                  <span style={{ color: `${P.blue}44`, fontSize: "2rem", fontWeight: 300, lineHeight: 1, fontFamily: "Georgia, serif", flexShrink: 0, minWidth: 36 }}>
                    {m.num}
                  </span>
                  <div>
                    <h3 className="mb-3" style={{ color: P.white, fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.4 }}>
                      {m.title}
                    </h3>
                    <p style={{ color: P.textMuted, fontWeight: 300, lineHeight: 1.75, fontSize: ".9rem" }}>
                      {m.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {m.tags.map((t) => (
                        <span key={t} className="tag"
                          style={{ background: "rgba(37,99,235,0.14)", border: `1px solid ${P.blueBorder}`, color: P.blueLight }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. AULA GRATUITA ══ */}
      <section className="relative w-full py-24 px-6 overflow-hidden text-center"
        style={{ background: P.mid, borderTop: `1px solid ${P.goldBorder}`, borderBottom: `1px solid ${P.goldBorder}` }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 500, background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)", filter: "blur(80px)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="pill mx-auto mb-8"
            style={{ background: P.goldMuted, border: `1px solid ${P.goldBorder}`, color: P.goldLight }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: P.gold, display: "inline-block", flexShrink: 0 }} />
            AULA GRATUITA
          </div>

          <h2 className="mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(1.8rem,4vw,2.6rem)", color: P.white, lineHeight: 1.3 }}>
            Antes de decidir,{" "}
            <span className="gold-text">assista gratuitamente</span>
          </h2>
          <p className="mb-10 mx-auto"
            style={{ maxWidth: 560, color: P.textMuted, lineHeight: 1.85, fontWeight: 300, fontSize: "1rem" }}>
            O Sergio vai conduzir uma aula online completa sobre o alinhamento dos Níveis Neurológicos — uma das ferramentas mais poderosas da PNL para o trabalho terapêutico.{" "}
            <span style={{ color: P.white }}>Sem custo, sem compromisso.</span>
          </p>
          <a href={WA_AULA} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold-solid">
            <WaIcon />
            Quero assistir a aula gratuita
          </a>
        </div>
      </section>

      {/* ══ 5. PARA QUEM ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: P.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: P.white }}>
              Este curso é para você?
            </h2>
            <div className="mx-auto mt-6" style={{ maxWidth: 160 }}>
              <Divider color={P.goldBorder} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-hover card-hover-blue p-8 rounded-xl"
              style={{ background: "rgba(37,99,235,0.04)", border: `1px solid ${P.blueBorder}` }}>
              <div className="flex items-center gap-3 mb-7">
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: P.blue, display: "inline-block", flexShrink: 0 }} />
                <span className="text-xs uppercase" style={{ color: P.blueLight, letterSpacing: ".18em", fontWeight: 300 }}>Para quem é</span>
              </div>
              <ul className="space-y-4">
                {PARA_QUEM.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon color={P.blue} />
                    <span style={{ color: P.textMuted, fontWeight: 300, lineHeight: 1.65, fontSize: ".93rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-hover p-8 rounded-xl"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3 mb-7">
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: P.textFaint, display: "inline-block", flexShrink: 0 }} />
                <span className="text-xs uppercase" style={{ color: P.textFaint, letterSpacing: ".18em", fontWeight: 300 }}>Para quem não é</span>
              </div>
              <ul className="space-y-4">
                {NAO_PARA.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XIcon />
                    <span style={{ color: P.textFaint, fontWeight: 300, lineHeight: 1.65, fontSize: ".93rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. FACILITADOR ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: P.mid, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase mb-4" style={{ color: P.gold, fontWeight: 300, letterSpacing: ".22em" }}>Facilitador</p>
          <h2 className="mb-8" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(1.6rem,4vw,2.4rem)", color: P.white }}>
            Sergio Oliveira
          </h2>
          <Divider color={P.goldBorder} />
          <div className="mt-10 p-10 rounded-2xl"
            style={{ background: P.blueMuted, border: `1px solid ${P.blueBorder}` }}>
            <p style={{ color: P.textMuted, lineHeight: 1.95, fontWeight: 300, fontSize: "1.05rem" }}>
              Fundador da Academia HQ. Mais de{" "}
              <span style={{ color: P.white, fontWeight: 400 }}>15 anos</span>{" "}
              trabalhando com estruturas cognitivas, espiritualidade e desenvolvimento humano. A PNL é parte do método que sustenta todos os cursos da Academia HQ desde o início.
            </p>
          </div>
        </div>
      </section>

      {/* ══ 7. INVESTIMENTO ══ */}
      <section className="relative w-full py-24 px-6" style={{ background: P.bg }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase mb-4" style={{ color: P.gold, fontWeight: 300, letterSpacing: ".22em" }}>Investimento</p>
            <h2 style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: P.white }}>
              Acesso ao curso
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-hover card-hover-gold p-8 rounded-xl"
              style={{ background: P.goldMuted, border: `1px solid ${P.goldBorder}`, backdropFilter: "blur(24px)" }}>
              <div className="pill mb-6"
                style={{ background: "rgba(201,168,76,0.10)", border: `1px solid ${P.goldBorder}`, color: P.goldLight }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: P.gold, display: "inline-block", flexShrink: 0 }} />
                Turma Coletiva
              </div>
              <p className="text-xs uppercase mb-3" style={{ color: P.textFaint, fontWeight: 300, letterSpacing: ".18em" }}>Investimento</p>
              <div className="flex items-end gap-1.5 mb-6">
                <span style={{ color: P.textMuted, fontSize: "1.1rem", fontWeight: 300, marginBottom: 8 }}>R$</span>
                <span className="gold-text" style={{ fontSize: "clamp(2.5rem,8vw,4rem)", lineHeight: 1, fontWeight: 300, fontFamily: "Georgia, serif" }}>
                  4.400
                </span>
                <span style={{ color: P.textMuted, fontSize: "1.1rem", fontWeight: 300, marginBottom: 8 }}>,00</span>
              </div>
              <Divider color={P.goldBorder} />
              <ul className="space-y-3 my-6">
                {INCLUSOS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckIcon color={P.gold} />
                    <span style={{ color: P.textMuted, fontWeight: 300, fontSize: ".9rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="btn-base btn-gold-solid w-full">
                <WaIcon />Falar com o Sergio no WhatsApp
              </a>
            </div>

            <div className="p-8 rounded-xl flex flex-col justify-between"
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <svg viewBox="0 0 32 32" fill="none" className="mb-6" width="32" height="32">
                  <circle cx="16" cy="16" r="15" stroke={P.goldBorder} strokeWidth="1" />
                  <path d="M16 10v7" stroke={P.gold} strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="16" cy="21.5" r="1.5" fill={P.gold} />
                </svg>
                <p style={{ color: P.textMuted, lineHeight: 1.9, fontWeight: 300, fontSize: ".95rem" }}>
                  Após o contato, você recebe todas as informações sobre{" "}
                  <span style={{ color: P.white }}>datas e formas de pagamento</span>.
                </p>
              </div>
              <div className="mt-10">
                <a href={WA_AULA} target="_blank" rel="noopener noreferrer"
                  className="btn-base btn-ghost-gold w-full">
                  Assistir aula gratuita antes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. CTA FINAL ══ */}
      <section className="relative w-full py-28 px-6 text-center overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${P.bg} 0%, #040818 100%)`, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 900, height: 600, background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 65%)", filter: "blur(100px)" }} />
          <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 700, height: 350, background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)", filter: "blur(80px)" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div style={{ height: 1, width: 64, background: `linear-gradient(90deg, transparent, ${P.goldBorder})` }} />
            <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
              <polygon points="10,1 19,18 1,18" stroke={P.gold} strokeWidth="1.2" fill="none" />
              <circle cx="10" cy="13" r="1.8" fill={P.gold} />
            </svg>
            <div style={{ height: 1, width: 64, background: `linear-gradient(90deg, ${P.goldBorder}, transparent)` }} />
          </div>

          <h2 className="mb-6"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: P.white, lineHeight: 1.32 }}>
            Se você atende pessoas,<br />
            <span className="gold-text">você merece atender melhor.</span>
          </h2>
          <p className="mb-12 mx-auto"
            style={{ maxWidth: 520, color: P.textMuted, lineHeight: 1.85, fontWeight: 300, fontSize: "1rem" }}>
            A PNL não é uma técnica a mais no seu repertório. É a estrutura que faz todas as outras técnicas funcionarem melhor. Esse curso é o próximo passo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-base btn-blue-solid">
              <WaIcon />Quero me inscrever
            </a>
            <a href={WA_AULA} target="_blank" rel="noopener noreferrer" className="btn-base btn-ghost-gold">
              Assistir aula gratuita
            </a>
          </div>
          <div className="mt-12">
            <Link href="/cursos" style={{ color: P.textFaint, fontSize: ".83rem", fontWeight: 300, letterSpacing: ".04em" }}>
              ← Ver todos os cursos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
