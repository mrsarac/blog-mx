import type { FC } from 'react';

interface ConsentBannerProps {
  onAccept: () => void;
}

const ConsentBanner: FC<ConsentBannerProps> = ({ onAccept }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:px-6">
      <div className="pointer-events-auto flex w-full max-w-3xl flex-col gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 text-gray-1200 shadow-border sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-gray-1100">
          We use Google Analytics to understand how the site is used. Accept to
          help us measure visits anonymously.
        </p>
        <button
          type="button"
          onClick={onAccept}
          className="w-full rounded-md bg-gray-1200 px-4 py-2 text-sm font-medium text-gray-100 transition-colors hover:bg-gray-1200/90 focus:outline-none focus:ring-2 focus:ring-black/20 sm:w-auto"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
