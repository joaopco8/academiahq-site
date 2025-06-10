import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { AnimatedBorder } from "@/components/animated-border";

export default function LojaPage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-slate-950 border-b border-slate-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Loja Academia HQ</h1>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-16 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Produtos em Destaque</h2>
        
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[
              {
                name: "Canalização do Seu Mentor Pessoal",
                price: "R$ 800,00",
                image: "/images/canalizacao.jpg",
                description: "Receba uma imagem de uma consciência que lhe acompanha.",
                link: "/loja/canalizacao"
              },
              {
                name: "Merkaba Frequêncial Personalizado",
                price: "R$ 500,00",
                image: "/images/merkaba.jpg",
                description: "Receba seu próprio Merkaba Frequêncial, criado exclusivamente para você e suas necessidades específicas.",
                link: "/loja/merkaba"
              },
              
            ].map((product, index) => (
              <AnimatedBorder key={index} containerClassName="h-full">
                <div className="h-full flex flex-col">
                  <div 
                    className="h-48 bg-slate-800"
                    style={{
                      backgroundImage: `url('${product.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{product.description}</p>
                    {product.link ? (
                      <Button className="w-full" asChild>
                        <Link href={product.link}>Saiba Mais</Link>
                      </Button>
                    ) : (
                      <Button className="w-full">
                        Adicionar ao Carrinho
                      </Button>
                    )}
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