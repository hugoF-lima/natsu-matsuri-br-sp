import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useRef, useEffect, useState } from 'react';

library.add(fab);

const SPONSORS = [
  { name: 'Misso Karai', logo: '/img/patrocinadores/0-misso-karai.png', url: 'https://www.instagram.com/senshi.gastronomia/', tier: 'diamond' },  
  { name: 'Senshi', logo: '/img/patrocinadores/0-senshi.png', url: 'https://www.instagram.com/senshi.gastronomia/', tier: 'diamond' },
  { name: 'Koiwa', logo: '/img/patrocinadores/0-koiwa.png', url: 'https://www.koiwa.com.br/', tier: 'diamond'  },
  { name: 'Nara', logo: '/img/patrocinadores/0-nara.png', url: 'https://www.instagram.com/naraobento/', tier: 'diamond'  },
  { name: 'Pilot', logo: '/img/patrocinadores/0-pilot.png', url: 'https://www.pilotpen.com.br/', tier: 'diamond' },
  { name: 'Miniso', logo: '/img/patrocinadores/1-miniso.png', url: 'https://www.lojasminiso.com.br/', tier: 'gold' },
  { name: 'Saladas Finas', logo: '/img/patrocinadores/1-saladas-finas.png', url: 'https://saladasfinas.com.br/', tier: 'gold' },
  { name: 'Sakura', logo: '/img/patrocinadores/1-sakura.jpg', url: 'https://www.sakura.com.br/', tier: 'gold' },
  { name: 'Nobiru', logo: '/img/patrocinadores/2-nobiru.png', url: 'https://cblj.org.br/pt/escola/1894/nobiru-gakuen', tier: 'silver' },
  { name: 'Urizun', logo: '/img/patrocinadores/2-urizun.png', url: 'https://www.urizun.com.br/', tier: 'silver' },
  { name: 'Fonomag', logo: '/img/patrocinadores/2-fonomag.png', url: 'https://www.fonomag.com.br/', tier: 'silver' },
  { name: 'Brecho do Carbono', logo: '/img/patrocinadores/3-brecho-do-carbono.png', url: 'https://www.instagram.com/brechodocarbono/', tier: 'bronze' },
  { name: 'Kumon Carrao', logo: '/img/patrocinadores/3-kumon-carrao.png', url: 'https://www.kumon.com.br/sp/v-carrao-jd-textil/', tier: 'bronze' },
  { name: 'Hikari Collab', logo: '/img/patrocinadores/3-hikari-collab.png', url: 'https://www.instagram.com/hikaricollab/', tier: 'bronze' },
  { name: 'Drie Studio', logo: '/img/patrocinadores/3-drie-studio.png', url: 'https://www.instagram.com/drie.studio/', tier: 'bronze' },
  { name: 'Dozo', logo: '/img/patrocinadores/3-dozo.png', url: 'https://www.instagram.com/dozo.restaurante/', tier: 'bronze' },
  { name: 'Ayumi', logo: '/img/patrocinadores/3-ayumi.jpg', url: 'https://www.instagram.com/ayumiotica/', tier: 'bronze' },
  { name: 'Utina Beer', logo: '/img/patrocinadores/3-utina-beer.png', url: 'https://www.instagram.com/utinabeer/', tier: 'bronze' },
  { name: 'Cana Mania', logo: '/img/patrocinadores/3-canamanianatural/', url: 'https://www.instagram.com/canamanianatural/', tier: 'bronze' },
  { name: 'Potenciali', logo: '/img/patrocinadores/3-potenciali.png', url: 'https://potenciali.com.br/', tier: 'bronze' },
  { name: 'DKV', logo: '/img/patrocinadores/4-dkv.png', url: '', tier: 'apoio' },
  { name: 'CJB', logo: '/img/patrocinadores/4-cjb.png', url: 'https://www.instagram.com/seinenbunkyo/', tier: 'apoio' },
  { name: 'MundoOK', logo: '/img/patrocinadores/4-mundo-ok.png', url: 'https://www.mundook.com.br/', tier: 'apoio' },
  { name: 'Consulado Japonês', logo: '/img/patrocinadores/4-consulado-japao.png', url: 'https://www.sp.br.emb-japan.go.jp/', tier: 'apoio' },
  { name: 'JCI Brasil', logo: '/img/patrocinadores/4-jci-brasil.png', url: 'https://www.sp.br.emb-japan.go.jp/', tier: 'apoio' },
];

const TIER_CONFIG = {
  diamond: {
    container: 'h-24 w-40 md:h-28 md:w-48', 
    img: 'w-full h-full object-contain',
  },
  gold: {
    container: 'h-16 w-28 md:h-20 md:w-36',
    img: 'w-full h-full object-contain',
  },
  standard: {
    container: 'h-14 w-24 md:h-16 md:w-32',
    img: 'w-full h-full object-contain',
  }
};

const LegibleTierRow = ({ items, tierType }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(false);
  const config = TIER_CONFIG[tierType] || TIER_CONFIG.standard;

  useEffect(() => {
    const check = () => {
      if (containerRef.current && contentRef.current) {
        setShouldScroll(contentRef.current.scrollWidth > containerRef.current.offsetWidth);
      }
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="mb-8 last:mb-0">
      <div ref={containerRef} className="flex w-full overflow-hidden select-none relative">
        {/* Fade Gradients matching the light gray background */}
        <div className="absolute left-0 inset-y-0 w-20 z-10 bg-gradient-to-r from-[#f4f7f8] to-transparent pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-20 z-10 bg-gradient-to-l from-[#f4f7f8] to-transparent pointer-events-none" />

        <div 
          ref={contentRef}
          className={`flex gap-12 md:gap-20 items-center px-10 ${
            shouldScroll 
              ? 'animate-scroll hover:[animation-play-state:paused]' 
              : 'mx-auto justify-center'
          }`}
        >
          {(shouldScroll ? [...items, ...items] : items).map((sponsor, idx) => (
            <a 
              key={idx} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-shrink-0 transition-transform duration-300 hover:scale-110"
            >
              <div className={config.container}>
                <img src={sponsor.logo} alt={sponsor.name} className={config.img} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export function Footer() {
  const diamondSponsors = SPONSORS.filter(s => s.tier === 'diamond');
  const goldSponsors = SPONSORS.filter(s => s.tier === 'gold');
  const otherSponsors = SPONSORS.filter(s => ['silver', 'bronze', 'apoio'].includes(s.tier));
  
  return (
    <footer className="relative z-20 bg-white border-t border-gray-200">
      {/* 1. Main Info Grid - Using your Festival Teal color */}
      <div className="grid gap-10 px-6 py-16 mx-auto max-w-7xl md:grid-cols-3 text-[#005566]">
        {/* Realização */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-4 font-bold uppercase tracking-widest text-sm text-[#87a91c]">Realização</h3>
          <img src="/img/logo_asebex.png" alt="Asebex" className="h-16 w-auto object-contain" />
        </div>

        {/* Local */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 font-bold uppercase tracking-widest text-sm text-[#87a91c]">Local do Evento</h3>
          <p className="font-bold text-lg">Osaka Naniwa Kai</p>
          <p className="opacity-90">Rua Domingos de Morais, 1581</p>
          <p className="opacity-90">Vila Mariana, São Paulo – SP</p>
        </div>

        {/* Contato */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="mb-4 font-bold uppercase tracking-widest text-sm text-[#87a91c]">Redes Sociais</h3>
          <a href="https://instagram.com/natsumatsuribr" target="_blank" rel="noopener noreferrer" 
             className="transition-transform hover:scale-110" aria-label="Instagram">
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" style={{color: "#005566"}} />
          </a>
        </div>
      </div>

      {/* 2. Patrocínio Section - Light Gray Background, No Boxes */}
      <div className="py-12 overflow-hidden bg-[#f4f7f8] border-t border-gray-100">
        <h3 className="text-center mb-10 font-bold uppercase tracking-[0.4em] text-sm text-[#005566]">
          Patrocínio
        </h3>

        <div className="flex flex-col gap-4">
          <LegibleTierRow items={diamondSponsors} tierType="diamond" />
          <div className="w-24 h-px bg-gray-300 mx-auto my-2" /> {/* Subtle Divider */}
          <LegibleTierRow items={goldSponsors} tierType="gold" />
          <div className="w-24 h-px bg-gray-300 mx-auto my-2" />
          <LegibleTierRow items={otherSponsors} tierType="standard" />
        </div>
      </div>

      {/* 3. Copyright Bar */}
      <div className="py-6 text-xs font-medium text-center bg-white text-gray-400 border-t border-gray-100 uppercase tracking-widest">
        © {new Date().getFullYear()} Natsu Matsuri • Todos os direitos reservados
      </div>
    </footer>
  );
}