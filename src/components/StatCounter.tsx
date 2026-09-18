import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  visible: boolean;
}

export function StatCounter({ value, suffix = '', label, visible }: StatCounterProps) {
  const count = useCountUp(value, 2000, visible);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-1 animate-count-up">
        {count}{suffix}
      </div>
      <div className="text-sm text-primary-200">{label}</div>
    </div>
  );
}
