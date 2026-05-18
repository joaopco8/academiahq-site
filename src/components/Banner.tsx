import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Banner() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] w-full items-end justify-center">
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-btn {
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .hero-btn:hover {
          transform: translateY(-2px) scale(1.02);
          background: rgba(255,255,255,0.14) !important;
          border-color: rgba(176,135,232,0.45) !important;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.18), 0 12px 40px rgba(123,63,228,0.35), 0 2px 8px rgba(0,0,0,0.3) !important;
        }
        .hero-btn:active {
          transform: translateY(0) scale(0.99);
        }
      `}} />
      <div
        className="absolute inset-0 h-full bg-cover"
        style={{
          backgroundImage:
            "url(/images/img-hero.png)",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 pb-16 text-white md:px-8">
        <div className="flex flex-col gap-8 text-left md:flex-row md:items-end md:justify-between md:gap-0">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-normal text-4xl text-white tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Expansão Consciencial Além da Simulação
            </h1>

            <p className="max-w-2xl font-light text-base text-white/90 sm:text-lg md:text-xl">
              Uma estrutura de desenvolvimento voltada para lucidez, leitura da realidade, quebra de padrões de aprisionamento e preparação consciente para processos de extração e autonomia fora da simulação.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar
                    className="size-10 border-2 border-[#bfdbfe] dark:border-[#bfdbfe]"
                    key={i}
                  >
                    <AvatarImage
                      src={`https://images.cnippet.dev/image/upload/v1770400411/a${i + 1}.jpg`}
                    />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex flex-col font-normal text-sm">
                <span className="text-base">+2.000</span>
                <span className="text-white/70">pessoas atendidas</span>
              </div>
            </div>

            <Link
              href="/atendimentos"
              className="hero-btn inline-flex items-center gap-0 rounded-full text-white text-sm font-normal overflow-hidden w-fit"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 8px 32px rgba(123,63,228,0.2)",
              }}
            >
              <span className="px-6 py-3">Agendar Atendimento</span>
              <span
                className="flex items-center justify-center p-3 border-l"
                style={{ borderColor: "rgba(255,255,255,0.18)" }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
