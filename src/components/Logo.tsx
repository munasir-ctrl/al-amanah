import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Al Amanah Medical Center home">
      <div className={`flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white font-bold transition-transform group-hover:scale-105 ${compact ? 'w-9 h-9 text-base' : 'w-11 h-11 text-lg'}`}>
        <span className="font-sans">A</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-bold text-navy-900 ${compact ? 'text-sm' : 'text-base'}`}>
          AL AMANAH
        </span>
        <span className={`text-primary-600 font-semibold ${compact ? 'text-[10px]' : 'text-xs'} tracking-wide uppercase`}>
          Medical Center
        </span>
      </div>
    </Link>
  );
}

export function CallButton({ variant = 'ghost', showLabel = true }: { variant?: 'ghost' | 'outline' | 'primary'; showLabel?: boolean }) {
  const cls = variant === 'outline' ? 'btn-outline' : variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  return (
    <a
      href={`tel:${siteConfig.phoneRaw}`}
      className={`btn ${cls} ${showLabel ? '' : 'px-3'}`}
      aria-label="Call Al Amanah Medical Center"
    >
      <Phone className="w-4 h-4" />
      {showLabel && <span>Call Now</span>}
    </a>
  );
}
