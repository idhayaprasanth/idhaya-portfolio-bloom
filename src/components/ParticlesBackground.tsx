
import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  connections: Particle[];
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mousePosition = { x: null as number | null, y: null as number | null };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 150);
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = (Math.random() - 0.5) * 0.5;
        const speedY = (Math.random() - 0.5) * 0.5;
        const color = theme === 'dark' ? 'rgba(100, 255, 218, 0.5)' : 'rgba(10, 25, 47, 0.5)';

        particles.push({
          x,
          y,
          radius,
          color,
          speedX,
          speedY,
          connections: []
        });
      }
    };

    const connectParticles = () => {
      const maxDistance = 150;
      
      // Reset connections
      particles.forEach(p => p.connections = []);
      
      // Create new connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            particles[i].connections.push(particles[j]);
            particles[j].connections.push(particles[i]);
          }
        }
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        for (let j = 0; j < particle.connections.length; j++) {
          const connectedParticle = particle.connections[j];
          const dx = particle.x - connectedParticle.x;
          const dy = particle.y - connectedParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = 1 - distance / 150;
          
          ctx.beginPath();
          ctx.strokeStyle = theme === 'dark' 
            ? `rgba(100, 255, 218, ${opacity * 0.2})` 
            : `rgba(10, 25, 47, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(connectedParticle.x, connectedParticle.y);
          ctx.stroke();
        }
      }
      
      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Mouse interaction
        if (mousePosition.x !== null && mousePosition.y !== null) {
          const dx = particle.x - mousePosition.x;
          const dy = particle.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;
          
          if (distance < maxDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (maxDistance - distance) / maxDistance;
            
            particle.x += forceDirectionX * force;
            particle.y += forceDirectionY * force;
          }
        }
      }
    };

    const animate = () => {
      connectParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', (e) => {
      mousePosition.x = e.x;
      mousePosition.y = e.y;
    });
    
    canvas.addEventListener('mouseleave', () => {
      mousePosition.x = null;
      mousePosition.y = null;
    });

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
