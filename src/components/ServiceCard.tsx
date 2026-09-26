import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import type { Service } from '@/data/services';

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card group hover:shadow-premium hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
    >
      <div className="aspect-[16/10] bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
        {/* Render the actual service image */}
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute top-3 right-3 z-10">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold shadow-sm ${service.category === 'Dental' ? 'bg-accent-100 text-accent-700' : 'bg-white/90 backdrop-blur-sm text-primary-700'}`}>
            {service.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent group-hover:from-navy-950/40 transition-all duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-navy-900 mb-1.5 group-hover:text-primary-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-navy-500 leading-relaxed mb-4 flex-1">{service.shortDescription}</p>
        <div className="flex items-center justify-between pt-3 border-t border-navy-50">
          <div className="flex items-center gap-1.5">
            {service.price && (
              <span className="text-sm font-bold text-primary-700">{service.price}</span>
            )}
            {service.duration && (
              <span className="flex items-center gap-1 text-xs text-navy-400">
                <Clock className="w-3 h-3" /> {service.duration}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:gap-2 transition-all">
            Learn More <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}