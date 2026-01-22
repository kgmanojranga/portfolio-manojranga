import { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

interface Mouse {
  x: number;
  y: number;
  radius: number;
}

class Particle {
  originX: number;
  originY: number;
  originZ: number;
  baseHue: number;
  currentMouseOffsetX: number;
  currentMouseOffsetY: number;
  size: 'small' | 'large'; // Particle size

  constructor(x: number, y: number, z: number, size: 'small' | 'large') {
    this.originX = x;
    this.originY = y;
    this.originZ = z;
    this.baseHue = 280 + z / 10;
    this.currentMouseOffsetX = 0;
    this.currentMouseOffsetY = 0;
    this.size = size;
  }

  getColor(isDark: boolean): string {
    if (isDark) {
      // Light purple/blue gradient for dark mode
      return `hsl(${this.baseHue}, 80%, 70%)`;
    } else {
      // Dark blue gradient for light mode
      return `hsl(${220 + (this.baseHue - 280) * 0.5}, 70%, 30%)`;
    }
  }

  update(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    mouse: Mouse,
    time: number,
    isDark: boolean
  ) {
    // Add continuous wave motion to the Y position (slower and lower amplitude)
    const waveY =
      Math.sin(time * 0.0005 + this.originX * 0.02) * 20 +
      Math.cos(time * 0.0008 + this.originZ * 0.02) * 15;

    // 1. Calculate 2D Projection
    const focalLength = 400;
    const scale = focalLength / (focalLength + this.originZ);

    // Skip rendering if particle is behind camera or scale is invalid
    if (this.originZ <= -focalLength || scale <= 0) {
      return;
    }

    const baseScreenX = width / 2 + this.originX * scale;
    const baseScreenY = height / 2 + (this.originY + waveY) * scale;

    // 2. Mouse Influence - wave deforms toward mouse (with delay and subtle movement)
    const dx = mouse.x - baseScreenX;
    const dy = mouse.y - baseScreenY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    let targetMouseOffsetX = 0;
    let targetMouseOffsetY = 0;
    if (dist < mouse.radius) {
      // Calculate influence factor (stronger when closer)
      const influence = 1 - dist / mouse.radius;
      // Push the wave horizontally and vertically based on mouse position and distance
      targetMouseOffsetX = influence * dx * 0.05;
      targetMouseOffsetY = influence * dy * 0.05;
    }

    // Smoothly interpolate to target with delay (heavy mesh feel)
    this.currentMouseOffsetX +=
      (targetMouseOffsetX - this.currentMouseOffsetX) * 0.08;
    this.currentMouseOffsetY +=
      (targetMouseOffsetY - this.currentMouseOffsetY) * 0.08;

    // Apply the wave with mouse influence
    const finalX = this.originX + this.currentMouseOffsetX;
    const finalY = this.originY + waveY + this.currentMouseOffsetY;

    // 3. Calculate final screen position
    const screenX = width / 2 + finalX * scale;
    const screenY = height / 2 + finalY * scale;

    this.render(ctx, screenX, screenY, scale, isDark);
  }

  render(
    ctx: CanvasRenderingContext2D,
    sx: number,
    sy: number,
    scale: number,
    isDark: boolean
  ) {
    ctx.fillStyle = this.getColor(isDark);
    ctx.beginPath();
    // Different sizes based on particle type
    const radius = this.size === 'large' ? scale * 1.5 : scale * 0.7;
    ctx.arc(sx, sy, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

const Interactive3DWave = () => {
  const { isDark } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<Mouse>({ x: -1000, y: -1000, radius: 250 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  // Configuration - Closer dots and more particles
  const ROWS = 50;
  const COLS = 50;
  const SPACING = 20; // Reduced from 30 to 20 for closer dots

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = [];

      const height = canvas.height;

      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
          // Create a 3D grid centered on screen
          const x = (j - COLS / 2) * SPACING;
          const z = (i - ROWS / 2) * SPACING;
          const y = height / 4; // Vertical "floor" level

          // Alternate particle sizes in a checkerboard pattern
          const size = (i + j) % 2 === 0 ? 'large' : 'small';

          particlesRef.current.push(new Particle(x, y, z, size));
        }
      }
    };

    const animate = (time: number) => {
      const width = canvas.width;
      const height = canvas.height;

      // Trail effect - black for dark mode, white for light mode
      ctx.fillStyle = isDark
        ? 'rgba(0, 0, 0, 0.2)'
        : 'rgba(255, 255, 255, 0.2)';
      ctx.fillRect(0, 0, width, height);

      particlesRef.current.forEach((p) =>
        p.update(ctx, width, height, mouseRef.current, time, isDark)
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    init();
    animate(0);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: isDark ? '#000' : '#fff',
        zIndex: -1,
      }}
    />
  );
};

export default Interactive3DWave;
