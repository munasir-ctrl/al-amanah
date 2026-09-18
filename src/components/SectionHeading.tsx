interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }: SectionHeadingProps) {
  return (
    <div className={`reveal ${center ? 'text-center mx-auto' : ''} max-w-2xl mb-10 md:mb-14`}>
      {eyebrow && (
        <span className={`inline-block text-xs font-bold uppercase tracking-wider mb-3 ${light ? 'text-accent-300' : 'text-accent-600'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-2xl md:text-4xl font-bold ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg ${light ? 'text-navy-200' : 'text-navy-500'} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
