import type { ReactNode } from 'react';

type CalloutVariant = 'info' | 'success' | 'warning' | 'danger';

interface CalloutProps {
  children: ReactNode;
  label?: string;
  variant?: CalloutVariant;
}

const VARIANT_STYLES: Record<CalloutVariant, string> = {
  info: 'border-[#C8D7FF] bg-[#EEF3FF] text-[#1D3A8A]',
  success: 'border-[#B8E3C6] bg-[#E8F7EE] text-[#1C5C36]',
  warning: 'border-[#FAD493] bg-[#FFF6E7] text-[#7A4F16]',
  danger: 'border-[#F5B0B0] bg-[#FDECEC] text-[#7E1F1F]',
};

const Callout = ({ children, label, variant = 'info' }: CalloutProps) => {
  const variantClasses = VARIANT_STYLES[variant] ?? VARIANT_STYLES.info;

  return (
    <div
      className={`mt-6 rounded-md border px-4 py-3 text-sm leading-relaxed shadow-border ${variantClasses}`}
    >
      {label ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide">
          {label}
        </p>
      ) : null}
      <div className="space-y-3 leading-relaxed">{children}</div>
    </div>
  );
};

export default Callout;
