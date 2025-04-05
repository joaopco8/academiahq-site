'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState, useEffect } from "react";

interface BannerProps {
  banners: {
    id: number;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
    imageUrl?: string;
    bgColor?: string;
  }[];
}

export default function Banner({ banners }: BannerProps) {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  // Detectar se o dispositivo é móvel
  useEffect(() => {
    const checkIsMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsMobile(width < 768);
      console.log(`Largura da janela: ${width}px, Modo móvel: ${width < 768 ? 'SIM' : 'NÃO'}`);
    };

    // Verificar inicialmente
    checkIsMobile();

    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Verificar se a imagem existe
  useEffect(() => {
    banners.forEach((banner) => {
      if (banner.imageUrl) {
        const mobileUrl = `${banner.imageUrl}-mobile.jpg`;
        const desktopUrl = `${banner.imageUrl}-desktop.jpg`;
        
        // Verificar imagem mobile
        const imgMobile = new Image();
        imgMobile.onload = () => console.log(`✅ Imagem mobile carregada com sucesso: ${mobileUrl}`);
        imgMobile.onerror = () => {
          console.error(`❌ Erro ao carregar imagem mobile: ${mobileUrl}`);
          setImageErrors(prev => ({ ...prev, [mobileUrl]: true }));
        };
        imgMobile.src = mobileUrl;
        
        // Verificar imagem desktop
        const imgDesktop = new Image();
        imgDesktop.onload = () => console.log(`✅ Imagem desktop carregada com sucesso: ${desktopUrl}`);
        imgDesktop.onerror = () => {
          console.error(`❌ Erro ao carregar imagem desktop: ${desktopUrl}`);
          setImageErrors(prev => ({ ...prev, [desktopUrl]: true }));
        };
        imgDesktop.src = desktopUrl;
      }
    });
  }, [banners]);

  // Função para obter a URL da imagem correta (desktop ou mobile)
  const getImageUrl = (baseUrl?: string) => {
    if (!baseUrl) return '';
    
    // Construir e retornar a URL completa
    const suffix = isMobile ? '-mobile' : '-desktop';
    const fullUrl = `${baseUrl}${suffix}.jpg`;
    console.log(`Gerando URL para banner (${isMobile ? 'Mobile' : 'Desktop'}): ${fullUrl}`);
    
    // Verificar se tivemos erro com esta imagem
    if (imageErrors[fullUrl]) {
      // Tentar a outra versão como fallback
      const fallbackSuffix = isMobile ? '-desktop' : '-mobile';
      const fallbackUrl = `${baseUrl}${fallbackSuffix}.jpg`;
      console.log(`⚠️ Usando fallback para imagem: ${fallbackUrl}`);
      return fallbackUrl;
    }
    
    return fullUrl;
  };

  console.log("Banners recebidos:", banners, "Modo móvel:", isMobile, "Largura:", windowWidth);

  return (
    <div className="w-full">
      <Carousel 
        className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner) => {
            const finalImageUrl = getImageUrl(banner.imageUrl);
            console.log(`Banner ${banner.id}: ${banner.title}`);
            console.log(`- URL base: ${banner.imageUrl}`);
            console.log(`- URL final: ${finalImageUrl}`);
            
            // Definir background (imagem ou cor) - aplicando diretamente para evitar problemas
            const backgroundImage = banner.imageUrl ? `url(${finalImageUrl})` : '';
            const backgroundColor = !banner.imageUrl ? (banner.bgColor || 'hsl(var(--secondary))') : 'transparent';
              
            return (
              <CarouselItem key={banner.id}>
                <div
                  className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full flex items-center bg-cover bg-center"
                  style={{
                    backgroundImage: backgroundImage,
                    backgroundColor: backgroundColor
                  }}
                >
                  {/* Sobreposição escura */}
                  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                  
                  {/* Conteúdo do banner */}
                  <div className="relative z-20 max-w-6xl mx-auto px-4 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-shadow-lg">
                      {banner.title}
                    </h2>
                    <p className="text-lg md:text-xl mb-4 md:mb-6 max-w-xl text-shadow">
                      {banner.description}
                    </p>
                    {banner.buttonText && (
                      <Button 
                        asChild 
                        className="bg-slate-900 hover:bg-slate-800 text-white px-6 md:px-8 py-4 md:py-6 text-sm md:text-base"
                      >
                        <a href={banner.buttonLink || '#'}>
                          {banner.buttonText}
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {banners.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white bg-opacity-50"
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white hover:bg-black/70 border-0" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white hover:bg-black/70 border-0" />
      </Carousel>
    </div>
  );
} 