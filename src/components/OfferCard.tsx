import { MessageCircle, Check, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Offer } from '@/data/offers';
import { offerDisclaimer } from '@/data/offers';
import { buildWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

export function OfferCard({ offer }: { offer: Offer }) {
  const showBadge = offer.popular || offer.badge;
  const badgeText = offer.badge === 'Free' ? 'FREE' : offer.badge === 'New' ? 'NEW' : 'POPULAR';
  const badgeIcon = offer.badge === 'New' ? Sparkles : Star;
  const BadgeIcon = badgeIcon;

  return (
    <div className={`card group hover:shadow-premium hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col ${offer.popular ? 'ring-2 ring-accent-400' : ''} ${offer.badge === 'Free' ? 'ring-2 ring-accent-400' : ''}`}>
      {showBadge && (
        <div className={`px-4 py-1.5 flex items-center justify-center gap-1.5 ${offer.badge === 'Free' ? 'bg-accent-500' : offer.badge === 'New' ? 'bg-primary-600' : 'bg-accent-500'}`}>
          <BadgeIcon className="w-3.5 h-3.5 text-white fill-white" />
          <span className="text-xs font-bold text-white uppercase tracking-wide">{badgeText}</span>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${offer.category === 'Dental' ? 'bg-accent-50 text-accent-600' : 'bg-primary-50 text-primary-600'}`}>
              {offer.category}
            </span>
            <h3 className="text-base font-bold text-navy-900 mt-2 group-hover:text-primary-700 transition-colors">{offer.treatment}</h3>
          </div>
        </div>
        <div className="mb-4">
          <span className={`text-2xl font-bold ${offer.price === 'Free' ? 'text-accent-600' : 'text-primary-700'}`}>{offer.price}</span>
          {offer.duration && <span className="text-xs text-navy-400 ml-2">· {offer.duration}</span>}
        </div>
        <ul className="space-y-1.5 mb-5 flex-1">
          {offer.included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-navy-600">
              <Check className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 pt-3 border-t border-navy-50">
          <Link to={`/book?service=${offer.slug}`} className="flex-1 btn btn-primary text-xs py-2.5">
            Book Now
          </Link>
          <a
            href={buildWhatsAppUrl(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp text-xs py-2.5 px-3"
            aria-label="WhatsApp about this offer"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function OfferDisclaimer() {
  return (
    <p className="text-xs text-navy-400 text-center mt-6 italic">{offerDisclaimer}</p>
  );
}
