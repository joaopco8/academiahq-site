'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

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
  <svg viewBox="0 0 16 16" fill="none" width="14" height="14" style={{ color: "rgba(239,68,68,0.65)", flexShrink: 0, marginTop: 3 }}>
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const Divider = ({ color }: { color: string }) => (
  <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${color}, transparent)`, margin: "24px 0" }} />
);

const MODULOS = [
  { num: "01", title: "PNL Aplicada à Clínica", desc: "Mapas mentais, paradigmas, filtros, valores, crenças e critérios. Como o cliente constrói a realidade — e como acessar essa estrutura na anamnese.", tags: ["Mapas Mentais", "Crenças", "Anamnese"] },
  { num: "02", title: "Inteligência Emocional e Mindset", desc: "Como reconhecer e trabalhar os padrões emocionais que travam o processo terapêutico — tanto do cliente quanto do próprio terapeuta.", tags: ["Mindset", "Regulação Emocional", "Padrões"] },
  { num: "03", title: "Alinhamento dos Níveis Neurológicos", desc: "O modelo de Dilts aplicado à investigação e à intervenção. Como identificar em qual nível está o bloqueio e ser mais assertivo na condução.", tags: ["Modelo Dilts", "Investigação", "Intervenção"] },
  { num: "04", title: "Golden Circle para Terapeutas", desc: "Como clarear o propósito do seu trabalho, comunicar com autenticidade e atrair clientes alinhados com o que você faz.", tags: ["Propósito", "Comunicação", "Posicionamento"] },
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
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0) scale(1)";
            (entry.target as HTMLElement).style.filter = "blur(0px)";
          }
        });
      },
      { threshold: 0.08 }
    );

    const els = mainRef.current?.querySelectorAll(".reveal");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={mainRef} style={{ background: P.bg, color: P.text, minHeight: "100vh" }}>
      <style>{`
        /* ── scroll reveal ── */
        .reveal {
          opacity: 0;
          transform: translateY(32px) scale(0.99);
          filter: blur(8px);
          transition: opacity .75s cubic-bezier(.22,1,.36,1),
                      transform .75s cubic-bezier(.22,1,.36,1),
                      filter .6s ease;
        }
        .reveal-delay-1 { transition-delay: .1s; }
        .reveal-delay-2 { transition-delay: .2s; }
        .reveal-delay-3 { transition-delay: .32s; }
        .reveal-delay-4 { transition-delay: .44s; }

        /* ── hero entrance ── */
        @keyframes fade-up { from { opacity:0; transform:translateY(28px); filter:blur(8px); } to { opacity:1; transform:none; filter:blur(0); } }
        .fu-1 { animation: fade-up .7s cubic-bezier(.22,1,.36,1) both .05s; }
        .fu-2 { animation: fade-up .75s cubic-bezier(.22,1,.36,1) both .18s; }
        .fu-3 { animation: fade-up .75s cubic-bezier(.22,1,.36,1) both .32s; }
        .fu-4 { animation: fade-up .75s cubic-bezier(.22,1,.36,1) both .46s; }

        /* ── orbs ── */
        @keyframes orb-a { 0%,100% { transform:translate(-50%,-50%) scale(1); } 50% { transform:translate(-50%,-50%) scale(1.12) rotate(6deg); } }
        @keyframes orb-b { 0%,100% { transform:translate(0,0) scale(1); } 50% { transform:translate(-30px, 20px) scale(1.08); } }
        @keyframes orb-c { 0%,100% { transform:translate(0,0) scale(1); } 60% { transform:translate(20px,-30px) scale(1.1); } }
        @keyframes float-particle { 0%,100% { transform:translateY(0); opacity:.35; } 50% { transform:translateY(-18px); opacity:.7; } }

        /* ── gold shimmer ── */
        @keyframes gold-shimmer-anim { 0% { background-position:-220% 0; } 100% { background-position:220% 0; } }
        .gold-text {
          background: linear-gradient(90deg, ${P.gold} 0%, ${P.goldLight} 38%, #FFF2C0 52%, ${P.goldLight} 62%, ${P.gold} 100%);
          background-size: 250% auto;
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gold-shimmer-anim 6s linear infinite;
        }

        /* ── grid bg ── */
        @keyframes grid-drift { 0% { background-position:0 0; } 100% { background-position:40px 40px; } }
        .grid-bg {
          background-image:
            linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
          animation: grid-drift 20s linear infinite;
        }

        /* ── glow pulse ── */
        @keyframes glow-pulse-gold { 0%,100% { opacity:.55; } 50% { opacity:1; } }
        @keyframes glow-pulse-blue { 0%,100% { box-shadow:0 0 24px ${P.blueGlow}; } 50% { box-shadow:0 0 60px ${P.blueGlow}, 0 0 100px rgba(37,99,235,0.15); } }

        /* ── cards ── */
        .card-hover { transition: border-color .3s, box-shadow .3s, transform .3s; }
        .card-hover:hover { transform: translateY(-4px); }
        .card-hover-blue:hover { border-color: ${P.blue} !important; box-shadow: 0 10px 60px ${P.blueGlow}; }
        .card-hover-gold:hover { border-color: ${P.gold} !important; box-shadow: 0 10px 60px ${P.goldGlow}; }

        /* ── buttons ── */
        .btn-base { display:inline-flex; align-items:center; justify-content:center; gap:10px; font-size:.82rem; font-weight:500; letter-spacing:.09em; border-radius:8px; padding:14px 32px; text-decoration:none; transition:transform .2s, box-shadow .2s, background .2s; cursor:pointer; border:none; }
        .btn-base:hover { transform:translateY(-2px); }
        .btn-blue-solid { background:linear-gradient(135deg,${P.blue},${P.blueDark}); color:#fff; box-shadow:0 0 36px ${P.blueGlow}; }
        .btn-blue-solid:hover { box-shadow:0 0 64px ${P.blueGlow}; }
        .btn-gold-solid { background:linear-gradient(135deg,${P.gold},#96762E); color:#fff; box-shadow:0 0 36px ${P.goldGlow}; }
        .btn-gold-solid:hover { box-shadow:0 0 64px ${P.goldGlow}; }
        .btn-ghost-gold { background:transparent; color:${P.goldLight}; border:1px solid ${P.goldBorder}; }
        .btn-ghost-gold:hover { background:${P.goldMuted}; border-color:${P.gold}; box-shadow:0 0 28px ${P.goldGlow}; }

        /* ── misc ── */
        .pill { display:inline-flex; align-items:center; gap:8px; border-radius:9999px; font-size:.67rem; letter-spacing:.2em; font-weight:300; padding:6px 18px; }
        .tag { font-size:.72rem; font-weight:300; letter-spacing:.09em; border-radius:6px; padding:4px 10px; }

        /* ── responsive ── */
        @media (max-width: 767px) {
          .btn-base { width:100%; justify-content:center; }
          .pill { font-size:.6rem; letter-spacing:.14em; padding:5px 14px; }
        }

        /* ── sergio photo ring ── */
        @keyframes ring-spin { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
        .photo-ring {
          position:absolute; inset:-3px; border-radius:50%;
          background: conic-gradient(${P.gold}, ${P.goldLight}, ${P.blue}, ${P.gold});
          animation: ring-spin 8s linear infinite;
        }
      `}</style>

      {/* ══ 1. HERO ══ */}
      <section className="relative w-full overflow-hidden" style={{ background: P.bg }}>

        {/* ── DESKTOP: imagem absoluta direita (oculta no mobile) ── */}
        <div className="hidden md:block absolute inset-y-0 right-0 pointer-events-none" style={{ width:"58%", left:"42%" }} aria-hidden="true">
          <Image src="/bg-pnl.png" alt="" fill priority style={{ objectFit:"cover", objectPosition:"left center" }} sizes="58vw" />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,#04081A 0%,rgba(4,8,26,0.55) 28%,rgba(4,8,26,0.1) 60%,transparent 100%)" }} />
        </div>
        <div className="hidden md:block absolute inset-y-0 left-0 pointer-events-none" style={{ width:"42%", background: P.bg }} aria-hidden="true" />
        <div className="hidden md:block absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background:`linear-gradient(180deg,rgba(4,8,26,0.55) 0%,transparent 14%,transparent 80%,${P.bg} 100%)` }} />

        {/* grid + orbs (desktop only) */}
        <div className="hidden md:block absolute inset-0 grid-bg pointer-events-none opacity-25" aria-hidden="true"
          style={{ maskImage:"linear-gradient(90deg,black 0%,black 25%,transparent 50%)", WebkitMaskImage:"linear-gradient(90deg,black 0%,black 25%,transparent 50%)" }} />
        <div className="hidden md:block absolute pointer-events-none" style={{ top:"20%", left:"2%", width:500, height:500, background:"radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 65%)", filter:"blur(80px)", animation:"orb-a 18s ease-in-out infinite" }} aria-hidden="true" />
        <div className="hidden md:block absolute pointer-events-none" style={{ bottom:"10%", left:"5%", width:350, height:350, background:"radial-gradient(circle,rgba(201,168,76,0.07) 0%,transparent 65%)", filter:"blur(60px)", animation:"orb-b 22s ease-in-out infinite" }} aria-hidden="true" />
        {[
          { top:"28%", left:"4%", size:3, delay:"0s", dur:"5s" },
          { top:"58%", left:"18%", size:4, delay:"1.5s", dur:"6s" },
          { top:"42%", left:"30%", size:3, delay:"0.8s", dur:"7s" },
        ].map((p, i) => (
          <div key={i} className="hidden md:block absolute pointer-events-none rounded-full" aria-hidden="true"
            style={{ top:p.top, left:p.left, width:p.size, height:p.size, background: i % 2 === 0 ? P.gold : P.blueLight, animation:`float-particle ${p.dur} ease-in-out ${p.delay} infinite` }} />
        ))}

        {/* ── TEXTO (mobile: full width + centered | desktop: left 50%) ── */}
        <div className="relative z-10 md:min-h-screen md:flex md:items-center">
          <div className="w-full md:max-w-[50%] pt-24 pb-8 md:pb-20 px-6 md:px-20 text-center md:text-left">
            <div className="pill fu-1 mb-8 mx-auto md:mx-0" style={{ background:P.goldMuted, border:`1px solid ${P.goldBorder}`, color:P.goldLight }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:P.gold, display:"inline-block", animation:"glow-pulse-gold 2.5s ease-in-out infinite", flexShrink:0 }} />
              FORMAÇÃO PROFISSIONAL · ONLINE AO VIVO
            </div>

            <h1 className="fu-2 mb-6" style={{ fontWeight:300, fontSize:"clamp(2.5rem,6vw,5rem)", lineHeight:1.08, color:P.white }}>
              PNL para{" "}
              <span className="gold-text" style={{ fontStyle:"italic", fontFamily:"Georgia,'Times New Roman',serif" }}>Terapeutas</span>
            </h1>

            <p className="fu-3 mb-10 mx-auto md:mx-0" style={{ maxWidth:460, fontSize:"clamp(.95rem,1.6vw,1.1rem)", lineHeight:1.8, color:P.textMuted, fontWeight:300 }}>
              Um curso prático de PNL para terapeutas que querem ir além da intuição — investigar com profundidade, entregar com precisão e comunicar o valor do seu trabalho.
            </p>

            <div className="fu-4 flex flex-col sm:flex-row gap-3 items-center md:items-start justify-center md:justify-start">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-base btn-blue-solid w-full sm:w-auto">
                <WaIcon />Quero me inscrever
              </a>
              <a href={WA_AULA} target="_blank" rel="noopener noreferrer" className="btn-base btn-ghost-gold w-full sm:w-auto">
                Assistir aula gratuita
              </a>
            </div>
          </div>
        </div>

        {/* ── MOBILE: imagem abaixo do texto (oculta no desktop) ── */}
        <div className="relative md:hidden w-full" style={{ height:"75vw", maxHeight:500 }} aria-hidden="true">
          <Image src="/bg-pnl.png" alt="" fill priority style={{ objectFit:"cover", objectPosition:"center top" }} sizes="100vw" />
          {/* gradiente topo forte */}
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(180deg, ${P.bg} 0%, rgba(4,8,26,0.7) 18%, transparent 42%, transparent 62%, rgba(4,8,26,0.75) 82%, ${P.bg} 100%)` }} />
        </div>

        <div className="hidden md:block absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height:120, background:`linear-gradient(transparent,${P.bg})` }} />
      </section>

      {/* ══ 2. PROBLEMA ══ */}
      <section className="relative w-full py-24 px-6 overflow-hidden" style={{ background:P.mid }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 80% 50% at 50% 100%,rgba(37,99,235,0.05) 0%,transparent 70%)" }} aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase mb-4" style={{ color:P.gold, fontWeight:300, letterSpacing:".22em" }}>O Problema</p>
            <h2 style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.8rem,4vw,2.8rem)", color:P.white, lineHeight:1.25 }}>
              O que ninguém te ensinou<br />na formação de terapeuta
            </h2>
            <Divider color={P.goldBorder} />
            <p className="mx-auto" style={{ maxWidth:600, color:P.textMuted, lineHeight:1.85, fontWeight:300, fontSize:"1.02rem" }}>
              A maioria dos terapeutas aprendeu técnicas. Poucos aprenderam a fazer as perguntas certas. A anamnese mal conduzida gera atendimentos genéricos, resultados abaixo do potencial e clientes que não voltam.{" "}
              <span style={{ color:P.white }}>Esse curso existe para mudar isso.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {DORES.map((d, i) => (
              <div key={i} className={`card-hover card-hover-blue p-8 rounded-xl reveal reveal-delay-${i + 1}`}
                style={{ background:P.surface, border:`1px solid rgba(255,255,255,0.06)`, backdropFilter:"blur(20px)" }}>
                <span style={{ color:`${P.blue}44`, fontSize:"2.2rem", lineHeight:1, fontWeight:300, fontFamily:"Georgia,serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5" style={{ color:P.textMuted, fontWeight:300, lineHeight:1.75, fontSize:".93rem", fontStyle:"italic" }}>
                  "{d}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. MÓDULOS ══ */}
      <section className="relative w-full py-24 px-6 overflow-hidden" style={{ background:P.bg }}>
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 60% 50% at 50% 50%,rgba(37,99,235,0.06) 0%,transparent 70%)" }} aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase mb-4" style={{ color:P.blueLight, fontWeight:300, letterSpacing:".22em" }}>Conteúdo do Curso</p>
            <h2 style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.8rem,4vw,2.8rem)", color:P.white, lineHeight:1.25 }}>
              O que você vai aprender
            </h2>
            <Divider color={P.blueBorder} />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {MODULOS.map((m, i) => (
              <div key={m.num} className={`card-hover card-hover-blue p-8 rounded-xl reveal reveal-delay-${(i % 2) + 1}`}
                style={{ background:P.blueMuted, border:`1px solid ${P.blueBorder}`, backdropFilter:"blur(20px)" }}>
                <div className="flex items-start gap-5">
                  <span style={{ color:`${P.blue}44`, fontSize:"2rem", fontWeight:300, lineHeight:1, fontFamily:"Georgia,serif", flexShrink:0, minWidth:36 }}>
                    {m.num}
                  </span>
                  <div>
                    <h3 className="mb-3" style={{ color:P.white, fontWeight:400, fontSize:"1.05rem", lineHeight:1.4 }}>{m.title}</h3>
                    <p style={{ color:P.textMuted, fontWeight:300, lineHeight:1.75, fontSize:".9rem" }}>{m.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-5">
                      {m.tags.map((t) => (
                        <span key={t} className="tag" style={{ background:"rgba(37,99,235,0.14)", border:`1px solid ${P.blueBorder}`, color:P.blueLight }}>{t}</span>
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
        style={{ background:P.mid, borderTop:`1px solid ${P.goldBorder}`, borderBottom:`1px solid ${P.goldBorder}` }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:1000, height:600, background:"radial-gradient(ellipse,rgba(201,168,76,0.08) 0%,transparent 65%)", filter:"blur(80px)", animation:"orb-a 20s ease-in-out infinite" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="reveal">
            <div className="pill mx-auto mb-8" style={{ background:P.goldMuted, border:`1px solid ${P.goldBorder}`, color:P.goldLight }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:P.gold, display:"inline-block", flexShrink:0 }} />
              AULA GRATUITA
            </div>
            <h2 className="mb-6" style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.8rem,4vw,2.6rem)", color:P.white, lineHeight:1.3 }}>
              Antes de decidir,{" "}<span className="gold-text">assista gratuitamente</span>
            </h2>
            <p className="mb-10 mx-auto" style={{ maxWidth:560, color:P.textMuted, lineHeight:1.85, fontWeight:300, fontSize:"1rem" }}>
              O Sergio vai conduzir uma aula online completa sobre o alinhamento dos Níveis Neurológicos — uma das ferramentas mais poderosas da PNL para o trabalho terapêutico.{" "}
              <span style={{ color:P.white }}>Sem custo, sem compromisso.</span>
            </p>
            <a href={WA_AULA} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold-solid">
              <WaIcon />Quero assistir a aula gratuita
            </a>
          </div>
        </div>
      </section>

      {/* ══ 5. PARA QUEM ══ */}
      <section className="relative w-full py-24 px-6" style={{ background:P.bg }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.8rem,4vw,2.8rem)", color:P.white }}>
              Este curso é para você?
            </h2>
            <div className="mx-auto" style={{ maxWidth:160 }}>
              <Divider color={P.goldBorder} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-hover card-hover-blue p-8 rounded-xl reveal reveal-delay-1"
              style={{ background:"rgba(37,99,235,0.04)", border:`1px solid ${P.blueBorder}` }}>
              <div className="flex items-center gap-3 mb-7">
                <span style={{ width:8, height:8, borderRadius:"50%", background:P.blue, display:"inline-block", flexShrink:0 }} />
                <span className="text-xs uppercase" style={{ color:P.blueLight, letterSpacing:".18em", fontWeight:300 }}>Para quem é</span>
              </div>
              <ul className="space-y-4">
                {PARA_QUEM.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon color={P.blue} />
                    <span style={{ color:P.textMuted, fontWeight:300, lineHeight:1.65, fontSize:".93rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-hover p-8 rounded-xl reveal reveal-delay-2"
              style={{ background:"rgba(239,68,68,0.04)", border:"1px solid rgba(239,68,68,0.18)" }}>
              <div className="flex items-center gap-3 mb-7">
                <span style={{ width:8, height:8, borderRadius:"50%", background:"rgba(239,68,68,0.6)", display:"inline-block", flexShrink:0 }} />
                <span className="text-xs uppercase" style={{ color:"rgba(239,68,68,0.7)", letterSpacing:".18em", fontWeight:300 }}>Para quem não é</span>
              </div>
              <ul className="space-y-4">
                {NAO_PARA.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XIcon />
                    <span style={{ color:"rgba(248,180,180,0.85)", fontWeight:300, lineHeight:1.65, fontSize:".93rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 6. FACILITADOR ══ */}
      <section className="relative w-full py-24 px-6 overflow-hidden" style={{ background:P.mid, borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position:"absolute", top:"50%", left:"30%", transform:"translate(-50%,-50%)", width:700, height:700, background:"radial-gradient(circle,rgba(201,168,76,0.06) 0%,transparent 65%)", filter:"blur(80px)", animation:"orb-b 24s ease-in-out infinite" }} />
          <div style={{ position:"absolute", top:"50%", right:"10%", transform:"translateY(-50%)", width:400, height:400, background:"radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 65%)", filter:"blur(60px)", animation:"orb-c 18s ease-in-out infinite" }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase mb-4" style={{ color:P.gold, fontWeight:300, letterSpacing:".22em" }}>Facilitador</p>
            <h2 style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.6rem,4vw,2.4rem)", color:P.white }}>
              Quem vai te guiar nessa jornada
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12 reveal">
            {/* foto */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <div style={{ position:"relative", width:220, height:220 }}>
                <div className="photo-ring" />
                <div style={{ position:"absolute", inset:3, borderRadius:"50%", overflow:"hidden", background:P.mid }}>
                  <Image
                    src="/images/foto-sergio-v2.png"
                    alt="Sergio Oliveira"
                    fill
                    style={{ objectFit:"cover", objectPosition:"center top" }}
                    sizes="220px"
                  />
                </div>
              </div>
            </div>

            {/* texto */}
            <div className="flex-1 text-center md:text-left">
              <h3 style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.4rem,3vw,2rem)", color:P.white, marginBottom:8 }}>
                Sergio Oliveira
              </h3>
              <p className="mb-4" style={{ color:P.gold, fontWeight:300, fontSize:".82rem", letterSpacing:".18em", textTransform:"uppercase" }}>
                Fundador da Academia HQ
              </p>
              <Divider color={P.goldBorder} />
              <p style={{ color:P.textMuted, lineHeight:1.95, fontWeight:300, fontSize:"1.02rem" }}>
                Mais de{" "}
                <span style={{ color:P.white, fontWeight:400 }}>15 anos</span>{" "}
                trabalhando com estruturas cognitivas, espiritualidade e desenvolvimento humano. A PNL é parte do método que sustenta todos os cursos da Academia HQ desde o início.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
                {["PNL", "Espiritualidade", "Desenvolvimento Humano", "Apometria"].map((tag) => (
                  <span key={tag} className="tag" style={{ background:P.goldMuted, border:`1px solid ${P.goldBorder}`, color:P.goldLight }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 7. INVESTIMENTO ══ */}
      <section className="relative w-full py-24 px-6 overflow-hidden" style={{ background:P.bg }}>
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-25" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-xs uppercase mb-4" style={{ color:P.gold, fontWeight:300, letterSpacing:".22em" }}>Investimento</p>
            <h2 style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.8rem,4vw,2.8rem)", color:P.white }}>
              Acesso ao curso
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-hover card-hover-gold p-8 rounded-xl reveal reveal-delay-1"
              style={{ background:P.goldMuted, border:`1px solid ${P.goldBorder}`, backdropFilter:"blur(24px)" }}>
              <div className="pill mb-6" style={{ background:"rgba(201,168,76,0.10)", border:`1px solid ${P.goldBorder}`, color:P.goldLight }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:P.gold, display:"inline-block", flexShrink:0 }} />
                Turma Coletiva
              </div>
              <p className="text-xs uppercase mb-3" style={{ color:P.textFaint, fontWeight:300, letterSpacing:".18em" }}>Investimento</p>
              <div className="flex items-end gap-1.5 mb-6">
                <span style={{ color:P.textMuted, fontSize:"1.1rem", fontWeight:300, marginBottom:8 }}>R$</span>
                <span className="gold-text" style={{ fontSize:"clamp(2.5rem,8vw,4rem)", lineHeight:1, fontWeight:300, fontFamily:"Georgia,serif" }}>4.400</span>
                <span style={{ color:P.textMuted, fontSize:"1.1rem", fontWeight:300, marginBottom:8 }}>,00</span>
              </div>
              <Divider color={P.goldBorder} />
              <ul className="space-y-3 my-6">
                {INCLUSOS.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckIcon color={P.gold} />
                    <span style={{ color:P.textMuted, fontWeight:300, fontSize:".9rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold-solid w-full">
                <WaIcon />Falar com o Sergio no WhatsApp
              </a>
            </div>

            {/* ── Aula Individual: Níveis Neurológicos ── */}
            <div className="card-hover p-8 rounded-xl reveal reveal-delay-2"
              style={{ background:P.blueMuted, border:`1px solid ${P.blueBorder}`, backdropFilter:"blur(24px)" }}>
              <div className="pill mb-6" style={{ background:"rgba(37,99,235,0.10)", border:`1px solid ${P.blueBorder}`, color:P.blueLight }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:P.blue, display:"inline-block", flexShrink:0 }} />
                Aula Individual
              </div>
              <p className="text-xs uppercase mb-2" style={{ color:P.textFaint, fontWeight:300, letterSpacing:".18em" }}>Investimento</p>
              <div className="flex items-end gap-1.5 mb-2">
                <span style={{ color:P.textMuted, fontSize:"1.1rem", fontWeight:300, marginBottom:8 }}>R$</span>
                <span style={{ fontSize:"clamp(2.5rem,8vw,4rem)", lineHeight:1, fontWeight:300, fontFamily:"Georgia,serif", color:P.blueLight }}>840</span>
                <span style={{ color:P.textMuted, fontSize:"1.1rem", fontWeight:300, marginBottom:8 }}>,00</span>
              </div>
              <p className="mb-6" style={{ color:P.textFaint, fontWeight:300, fontSize:".78rem", lineHeight:1.5 }}>
                Apenas sobre o tema<br />
                <span style={{ color:P.blueLight, fontWeight:400 }}>Níveis Neurológicos</span>
              </p>
              <Divider color={P.blueBorder} />
              <ul className="space-y-3 my-6">
                <li className="flex items-center gap-3">
                  <CheckIcon color={P.blueLight} />
                  <span style={{ color:P.textMuted, fontWeight:300, fontSize:".9rem" }}>Sessão individual via videochamada</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon color={P.blueLight} />
                  <span style={{ color:P.textMuted, fontWeight:300, fontSize:".9rem" }}>Foco exclusivo em Níveis Neurológicos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon color={P.blueLight} />
                  <span style={{ color:P.textMuted, fontWeight:300, fontSize:".9rem" }}>Aplicação direta à sua prática clínica</span>
                </li>
              </ul>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-base w-full"
                style={{ background:P.blue, color:P.white, border:"none", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
                <WaIcon />Tenho interesse
              </a>
            </div>

            <div className="p-8 rounded-xl flex flex-col justify-between reveal reveal-delay-3"
              style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)" }}>
              <div>
                <svg viewBox="0 0 32 32" fill="none" className="mb-6" width="32" height="32">
                  <circle cx="16" cy="16" r="15" stroke={P.goldBorder} strokeWidth="1" />
                  <path d="M16 10v7" stroke={P.gold} strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="16" cy="21.5" r="1.5" fill={P.gold} />
                </svg>
                <p style={{ color:P.textMuted, lineHeight:1.9, fontWeight:300, fontSize:".95rem" }}>
                  Após o contato, você recebe todas as informações sobre{" "}
                  <span style={{ color:P.white }}>datas e formas de pagamento</span>.
                </p>
              </div>
              <div className="mt-10">
                <a href={WA_AULA} target="_blank" rel="noopener noreferrer" className="btn-base btn-ghost-gold w-full">
                  Assistir aula gratuita antes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. CTA FINAL ══ */}
      <section className="relative w-full py-28 px-6 text-center overflow-hidden"
        style={{ background:`linear-gradient(180deg,${P.bg} 0%,#040818 100%)`, borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div style={{ position:"absolute", top:"40%", left:"50%", transform:"translate(-50%,-50%)", width:1000, height:700, background:"radial-gradient(ellipse,rgba(37,99,235,0.08) 0%,transparent 65%)", filter:"blur(100px)", animation:"orb-a 22s ease-in-out infinite" }} />
          <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", width:700, height:400, background:"radial-gradient(ellipse,rgba(201,168,76,0.07) 0%,transparent 65%)", filter:"blur(80px)", animation:"orb-b 18s ease-in-out infinite" }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto reveal">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div style={{ height:1, width:64, background:`linear-gradient(90deg,transparent,${P.goldBorder})` }} />
            <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
              <polygon points="10,1 19,18 1,18" stroke={P.gold} strokeWidth="1.2" fill="none" />
              <circle cx="10" cy="13" r="1.8" fill={P.gold} />
            </svg>
            <div style={{ height:1, width:64, background:`linear-gradient(90deg,${P.goldBorder},transparent)` }} />
          </div>

          <h2 className="mb-6" style={{ fontFamily:"Georgia,'Times New Roman',serif", fontWeight:400, fontSize:"clamp(1.8rem,4vw,2.8rem)", color:P.white, lineHeight:1.32 }}>
            Se você atende pessoas,<br />
            <span className="gold-text">você merece atender melhor.</span>
          </h2>
          <p className="mb-12 mx-auto" style={{ maxWidth:520, color:P.textMuted, lineHeight:1.85, fontWeight:300, fontSize:"1rem" }}>
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
            <Link href="/cursos" style={{ color:P.textFaint, fontSize:".83rem", fontWeight:300, letterSpacing:".04em" }}>
              ← Ver todos os cursos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
