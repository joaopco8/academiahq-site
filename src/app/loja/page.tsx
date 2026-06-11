import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";

export default function LojaPage() {
  return (
    <main className="flex flex-col items-center relative">
      {/* Hero Section */}
      <section className="w-full border-b border-purple-900/30 py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-normal tracking-tighter mb-4 text-foreground">Loja Academia HQ</h1>
          <p className="text-xl max-w-3xl mx-auto font-light text-muted-foreground">
            Produtos energéticos exclusivos para sua jornada
          </p>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full relative z-10">
        <h2 className="text-3xl font-normal tracking-tighter mb-10 text-center text-foreground">Produtos em Destaque</h2>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                name: "Canalização do Seu Mentor Pessoal",
                price: "R$ 800,00",
                image: "/images/canalizacao.jpg",
                description: "Receba uma imagem de uma consciência que lhe acompanha.",
                link: "/loja/canalizacao",
              },
              {
                name: "Merkaba Frequêncial Personalizado",
                price: "R$ 1.060,00",
                image: "/images/merkaba.jpg",
                description: "Receba seu próprio Merkaba Frequêncial, criado exclusivamente para você e suas necessidades específicas.",
                link: "/loja/merkaba",
              },
            ].map((product, index) => (
              <AnimatedBorder key={index} containerClassName="h-full">
                <div className="h-full flex flex-col">
                  <div
                    className="h-48"
                    style={{ backgroundImage: `url('${product.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                  ></div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-normal tracking-tight mb-2 text-foreground">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <span className="text-xl font-normal text-indigo-300">{product.price}</span>
                    </div>
                    <p className="text-sm font-light text-muted-foreground mb-4 flex-grow">{product.description}</p>
                    <Link
                      href={product.link}
                      className="glass-btn glass-btn-indigo inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-normal text-white w-full"
                    >
                      Saiba Mais
                    </Link>
                  </div>
                </div>
              </AnimatedBorder>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
