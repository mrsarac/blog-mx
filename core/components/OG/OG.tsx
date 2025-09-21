import Logo from '@core/components/Logo';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import BlendedText from './BlendedText';

const Hyperspeed = dynamic(() => import('./Hyperspeed'), { ssr: false });

const OG = () => {
  const router = useRouter();
  const { title, background } = router.query as {
    title: string;
    background: string;
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        fontFamily: 'Inter',
        fontWeight: 600,
        lineHeight: '1.2',
        width: '1200px',
        height: '630px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'scale(1.5)',
        transformOrigin: 'top left',
        background: background || '#010101',
        position: 'relative',
        gap: '120px',
      }}
    >
      <Hyperspeed />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 85.94%)',
        }}
      />
      <div style={{ maxWidth: '830px', fontSize: 56 }}>
        <BlendedText>{title}</BlendedText>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '950px',
          fontSize: 20,
          zIndex: 0,
        }}
      >
        <Logo size={65} stroke="#FFFFFF" />
        <BlendedText>@mustafasaracAI</BlendedText>
      </div>
    </div>
  );
};

export default OG;
