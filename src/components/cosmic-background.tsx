'use client';

import { useEffect, useRef } from 'react';

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas para ocupar toda a tela
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Chamar imediatamente e adicionar listener para redimensionamento
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Estrelas
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    
    // Criar estrelas
    const createStars = () => {
      stars.length = 0;
      const starCount = Math.floor(canvas.width * canvas.height / 10000); // Quantidade proporcional ao tamanho da tela
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.05 + 0.01,
        });
      }
    };

    createStars();

    // Neblinas cósmicas (simulação simples)
    const nebulae: { x: number; y: number; radius: number; color: string; opacity: number }[] = [];
    
    const createNebulae = () => {
      nebulae.length = 0;
      const nebulaCount = 3; // Poucas neblinas para manter o estilo minimalista
      
      const colors = [
        'rgba(70, 130, 180, 0.02)', // Azul claro
        'rgba(138, 43, 226, 0.02)', // Roxo
        'rgba(72, 61, 139, 0.02)',  // Azul escuro
        'rgba(0, 0, 128, 0.02)',    // Azul marinho
      ];
      
      for (let i = 0; i < nebulaCount; i++) {
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * canvas.width * 0.4 + canvas.width * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.03 + 0.01, // Muito sutil
        });
      }
    };

    createNebulae();

    // Função para animar tudo
    const animate = () => {
      // Limpar canvas com fundo transparente
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Desenhar neblinas
      nebulae.forEach(nebula => {
        const gradient = ctx.createRadialGradient(
          nebula.x, nebula.y, 0,
          nebula.x, nebula.y, nebula.radius
        );
        
        gradient.addColorStop(0, nebula.color.replace('0.02', String(nebula.opacity)));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Movimento muito lento das neblinas
        nebula.x += (Math.random() - 0.5) * 0.2;
        nebula.y += (Math.random() - 0.5) * 0.2;
      });
      
      // Desenhar estrelas
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Fazer as estrelas "pulsar" sutilmente
        star.opacity = Math.max(0.2, Math.min(1, star.opacity + (Math.random() - 0.5) * 0.01));
        
        // Movimento vertical lento
        star.y += star.speed;
        
        // Reposicionar estrelas que saem do campo de visão
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Ocasionalmente, criar uma "estrela cadente"
      if (Math.random() < 0.002) { // Baixa probabilidade para não sobrecarregar
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 80 + 20,
          speed: Math.random() * 5 + 3,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() * Math.PI / 4),
        };
        
        const animateShootingStar = () => {
          if (shootingStar.opacity <= 0) return;
          
          const endX = shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length;
          const endY = shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length;
          
          const gradient = ctx.createLinearGradient(
            shootingStar.x, shootingStar.y,
            endX, endY
          );
          
          gradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(endX, endY);
          ctx.stroke();
          
          shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
          shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
          shootingStar.opacity -= 0.02;
          
          if (shootingStar.opacity > 0) {
            requestAnimationFrame(animateShootingStar);
          }
        };
        
        animateShootingStar();
      }
      
      // Continuar a animação
      requestAnimationFrame(animate);
    };

    // Iniciar a animação
    animate();

    // Limpar
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]"
    />
  );
} 