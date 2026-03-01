import { Trans, useTranslation } from "react-i18next";
import { Heart, Sparkles } from "lucide-react";

export function AboutMascot() {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === 'jp';
  const isPortuguese = i18n.language === 'pt';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative text-white py-12 md:py-20 overflow-hidden" 
        style={{ background: 'var(--festival-gradient-primary)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1660330120426-0f83806543cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjBmZXN0aXZhbCUyMGphcGFuJTIwbGFudGVybnN8ZW58MXx8fHwxNzcwODM3NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            alt="Festival background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="inline-block px-4 py-2 rounded-full font-bold mb-4 text-sm md:text-base"
              style={{ 
                backgroundColor: 'var(--festival-accent)',
                color: 'var(--festival-dark)'
              }}
            >
              {t('aboutMascot.hero.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('aboutMascot.hero.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
              {t('aboutMascot.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mascot Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div 
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-30 animate-pulse"
                  style={{ backgroundColor: 'var(--festival-accent)' }}
                ></div>
                <img 
                  src="/img/mascote-natsu-br-2026.jpeg" 
                  alt={t('aboutMascot.name')}
                  className="relative rounded-3xl shadow-2xl w-full object-cover border-4 border-white"
                />
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles size={32} style={{ color: 'var(--festival-accent)' }} />
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--festival-primary)' }}>
                    {t('aboutMascot.name')}
                  </h2>
                </div>
                
                <div 
                  className="p-6 rounded-2xl mb-6"
                  style={{ backgroundColor: 'var(--festival-light)' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Heart size={24} style={{ color: 'var(--festival-purple)' }} />
                    {t('aboutMascot.nameSection.title')}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-2">
                    <Trans
                        i18nKey="aboutMascot.nameSection.meaning"
                        components={[
                        <a 
                            key="jun-link"
                            href="/img/jun.webp" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 underline decoration-2 underline-offset-4 hover:text-blue-700 transition-colors"
                        >
                            Jun
                        </a>
                        ]}
                    />
                    </p>
                  {!(isJapanese || isPortuguese)&& (
                    <p className="text-gray-600 italic text-sm">
                      {t('aboutMascot.nameSection.pronunciation')}
                    </p>
                  )}
                </div>

                <div 
                  className="p-6 rounded-2xl border-2"
                  style={{ 
                    borderColor: 'var(--festival-secondary)',
                    backgroundColor: 'rgba(66, 165, 245, 0.05)'
                  }}
                >
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--festival-secondary)' }}>
                    {t('aboutMascot.motto.title')}
                  </h3>
                  <p className="text-2xl font-bold mb-2" style={{ color: 'var(--festival-dark)' }}>
                    {t('aboutMascot.motto.japanese')}
                  </p>
                  {!isJapanese && (
                    <p className="text-gray-600 italic mb-3">
                      {t('aboutMascot.motto.romaji')}
                    </p>
                  )}
                  <p className="text-gray-700 text-lg">
                    {t('aboutMascot.motto.translation')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section 
        className="py-16 text-white"
        style={{ background: 'var(--festival-gradient-secondary)' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {t('aboutMascot.origin.title')}
            </h2>
            
            <div className="space-y-6">
              <div 
                className="p-6 md:p-8 rounded-2xl backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                  <span 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                    style={{ backgroundColor: 'var(--festival-accent)', color: 'var(--festival-dark)' }}
                  >
                    1
                  </span>
                  {t('aboutMascot.origin.concept.title')}
                </h3>
                <p className="text-lg opacity-95 leading-relaxed">
                  {t('aboutMascot.origin.concept.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Traits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
              {t('aboutMascot.otherstories.otherstoriestext')}
            </h2>
            
          </div>
        </div>
      </section>
    </div>
  );
}
