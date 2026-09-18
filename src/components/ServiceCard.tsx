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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <span className="text-2xl font-bold text-primary-600">{service.title.charAt(0)}</span>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${service.category === 'Dental' ? 'bg-accent-100 text-accent-700' : 'bg-primary-100 text-primary-700'}`}>
            {service.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/0 to-navy-900/0 group-hover:from-navy-900/5 transition-all duration-300" />
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
