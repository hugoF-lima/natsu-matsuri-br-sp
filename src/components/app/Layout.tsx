import { Link, Outlet } from "react-router";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
// Standardized path - adjust if your components folder is named differently
import { LanguageSelector } from "../select-language/LanguageSelector";

export function Layout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header style={{ background: 'var(--festival-gradient-primary)' }} className="text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <nav className="flex items-center justify-between flex-wrap gap-3">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img 
                src="/img/brazil-japan-flag-small.png" 
                alt="Natsu Matsuri Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-lg md:text-2xl font-bold tracking-tight">{t('header.title')}</h1>
                <p className="text-xs md:text-sm opacity-90 hidden sm:block">{t('header.subtitle')}</p>
              </div>
            </Link>
            
            <div className="flex gap-3 md:gap-6 items-center flex-wrap">
              <Link to="/" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.home')}
              </Link>
              <Link to="/history" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.history')}
              </Link>
              <Link to="/museum" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.museum')}
              </Link>
              <a 
                href="#tickets" 
                className="px-4 md:px-6 py-1.5 md:py-2 rounded-full font-bold transition-all shadow-md text-sm md:text-base hover:opacity-90"
                style={{ 
                  background: 'var(--festival-accent)',
                  color: 'var(--festival-dark)'
                }}
              >
                {t('header.nav.tickets')}
              </a>
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: 'var(--festival-dark)' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--festival-accent)' }}>{t('footer.about.title')}</h3>
              <p className="text-gray-400">{t('footer.about.description')}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--festival-accent)' }}>{t('footer.social.title')}</h3>
              <a 
                href="https://instagram.com/natsumatsuribr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-lime-400 transition-colors"
              >
                <InstagramLogoIcon size={20} />
                @natsumatsuribr
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--festival-accent)' }}>{t('footer.contact.title')}</h3>
              <p className="text-gray-400">natsumatsuri@asebex.org.br </p>
            </div>
          </div>

          {/* Realização (Brought to you by) */}
          <div className="border-t border-gray-700 pt-8" >
            <h3 className="text-center text-xl font-bold mb-6" style={{ color: 'var(--festival-accent)' }}>{t('footer.sponsors.title')}</h3>
            <div className="flex justify-center mb-12"> 
              <div className="bg-white rounded-lg p-6 w-48 h-32 flex items-center justify-center">
                <a href="https://asebex.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity">
                    <img 
                      src="https://asebex.org.br/wp-content/uploads/2019/01/logo_asebex-01.png?w=740&h=265" 
                      alt="Asebex" 
                      className="max-w-full max-h-full object-contain"
                    />
                </a>
              </div>
            </div>
          </div>

          {/* Secondary Sponsors */}
          <div className="border-t border-gray-700 pt-8 mt-12">
            <h3 className="text-center text-xl font-bold mb-6 text-lime-400">{t('footer.sponsors.titlesecond')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1760386129108-d17b9cdfc4fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080" alt="Sponsor 1" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1558744059-a9e737085db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080" alt="Sponsor 2" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1704278052498-70de0a66d5ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080" alt="Sponsor 3" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="bg-white rounded-lg p-4 w-32 h-20 flex items-center justify-center text-gray-600 font-bold text-center text-xs">
                {t('footer.sponsors.become')}
              </div>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>
    </div>
  );
}