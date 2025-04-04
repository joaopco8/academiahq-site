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
import { useRef } from "react";

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

  console.log("Banners recebidos:", banners); // Depuração para verificar os dados recebidos

  return (
    <div className="w-full">
      <Carousel 
        className="w-full h-[500px]"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner) => {
            console.log("Processando banner:", banner.id, "URL:", banner.imageUrl); // Depuração
            
            // Definir background (imagem ou cor) - aplicando diretamente para evitar problemas
            const backgroundImage = banner.imageUrl ? `url(${banner.imageUrl})` : '';
            const backgroundColor = !banner.imageUrl ? (banner.bgColor || 'hsl(var(--secondary))') : 'transparent';
              
            return (
              <CarouselItem key={banner.id}>
                <div
                  className="relative h-[500px] w-full flex items-center bg-cover bg-center"
                  style={{
                    backgroundImage: backgroundImage,
                    backgroundColor: backgroundColor
                  }}
                >
                  {/* Sobreposição escura */}
                  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                  
                  {/* Conteúdo do banner */}
                  <div className="relative z-20 max-w-6xl mx-auto px-4 text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
                      {banner.title}
                    </h2>
                    <p className="text-xl mb-6 max-w-xl text-shadow">
                      {banner.description}
                    </p>
                    {banner.buttonText && (
                      <Button 
                        asChild 
                        className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base"
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