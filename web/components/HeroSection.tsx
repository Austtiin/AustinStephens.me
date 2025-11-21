"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Chip, Typography } from '@mui/material';

export function HeroSection({ resumePath }: { resumePath: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative px-4 md:px-6 overflow-hidden pb-32 md:pb-20">
      <div className="absolute inset-0" style={{ background: '#f8fffe', zIndex: 0 }} />
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Image src="/Files/20250111_195715.webp" alt="Background" fill style={{ objectFit: 'cover' }} priority />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(154, 210, 203, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(154, 210, 203, 0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      <header className="flex flex-col items-center gap-2 md:gap-3 text-center max-w-3xl relative z-10 w-full" style={{
        backgroundColor: 'rgba(154, 210, 203, 0.25)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.3)', padding: '1.25rem', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
      }}>
        <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-full" style={{ border: '3px solid rgba(255,255,255,0.5)' }}>
          <Image src="/Files/95986072.jpg" alt="Austin Stephens" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-1 md:mb-2 tracking-tight" style={{ color: '#ffffff', lineHeight: '1.1', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>Hey, I&apos;m Austin 👋</h1>
          <p className="text-lg md:text-2xl mb-1 md:mb-2 font-bold tracking-tight" style={{ color: '#9AD2CB', letterSpacing: '-0.02em', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>Junior Cloud Solutions Engineer</p>
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: '#f0f0f0' }}>
            Helped managed 300+ Azure workloads and contributed to $250K+ in annual savings<br />
            FinOps Certified Practitioner | Azure Administrator Associate
          </p>
        </div>
        <div className="mt-2 md:mt-4 flex flex-wrap gap-1.5 md:gap-2 justify-center">
          <Link href="https://github.com/Austtiin" className="inline-flex items-center gap-1.5 rounded-full px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-xl shadow-lg" style={{ backgroundColor: 'rgba(45,139,127,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>💻 GitHub</Link>
          <Link href={resumePath} target="_blank" className="inline-flex items-center gap-1.5 rounded-full px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-md" style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.15)' }}>📄 Resume</Link>
          <Link href="mailto:AustinStephens103@gmail.com" className="inline-flex items-center gap-1.5 rounded-full px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold transition-all hover:scale-105 hover:shadow-xl shadow-md" style={{ border: '2px solid rgba(255,255,255,0.4)', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.15)' }}>✉️ Email</Link>
          <Link href="tel:+16512318917" className="inline-flex items-center gap-1.5 rounded-full px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium transition-all hover:scale-105" style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#ffffff', backgroundColor: 'rgba(255,255,255,0.1)' }}>📞 Call</Link>
        </div>
      </header>
    </div>
  );
}

export default HeroSection;