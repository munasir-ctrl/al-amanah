import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Doctor } from '@/data/doctors';

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="card group hover:shadow-premium hover:border-primary-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="aspect-[3/4] bg-gradient-to-br from-navy-100 to-primary-100 relative overflow-hidden">
        {doctor.image ? (
          <img
            src={doctor.image}
            alt={doctor.name}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl font-bold text-primary-600">
                {doctor.name.replace('Dr. ', '').charAt(0)}
              </span>
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-600 text-white shadow-sm">
            {doctor.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent group-hover:from-navy-900/30 transition-all duration-300 pointer-events-none" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-navy-900 mb-1 group-hover:text-primary-700 transition-colors">
          {doctor.name}
        </h3>
        <p className="text-sm text-primary-600 font-medium mb-2">{doctor.specialty}</p>
        {doctor.experience && (
          <p className="text-xs text-navy-500 mb-3">{doctor.experience}</p>
        )}
        {doctor.languages && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {doctor.languages.map((lang) => (
              <span key={lang} className="px-2 py-0.5 rounded-md text-xs font-medium bg-navy-50 text-navy-600">
                {lang}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-navy-50">
          <Link
            to={`/doctors/${doctor.slug}`}
            className="flex-1 btn btn-outline text-xs py-2"
          >
            View Profile <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            to={`/book?doctor=${doctor.slug}`}
            className="flex-1 btn btn-primary text-xs py-2"
          >
            <Calendar className="w-3 h-3" /> Book
          </Link>
        </div>
      </div>
    </div>
  );
}