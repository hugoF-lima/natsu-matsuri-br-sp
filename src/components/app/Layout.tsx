import { Link, Outlet } from "react-router";
import { InstagramLogoIcon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Footer } from "./Footer";
// Standardized path - adjust if your components folder is named differently
import { LanguageSelector } from "../select-language/LanguageSelector";

export function Layout() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header style={{ background: 'var(--festival-gradient-primary)' }} className="text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center justify-between flex-wrap gap-3">
            <Link to="/" className="flex items-center group ml-4"> 
              <div className="
                /* 1. Transparency: Use 80-90% white for a glass effect */
                bg-white/85 
                /* 2. Padding: Reduce vertical (py), increase horizontal (px) */
                px-5 py-2 
                /* 3. Shape: Keep your unique rounded corners */
                rounded-br-2xl rounded-tl-lg 
                /* 4. Glass Effect: Essential for making transparency look professional */
                backdrop-blur-md 
                shadow-sm transition-all group-hover:bg-white/50
              ">
                <img 
                  src="/img/logo-natsu-2026.png" 
                  alt="Natsu Matsuri Logo" 
                  /* 5. Scale: Increase the height to fill the container more */
                  className="h-14 w-auto object-contain scale-110" 
                />
              </div>
            </Link>
            
            <div className="flex gap-3 md:gap-6 items-center flex-wrap">
              <Link to="/" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.home')}
              </Link>
              <Link to="/schedule" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.schedule')}
              </Link>
              <Link to="/workshops" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.workshops')}
              </Link>
              <Link to="/map" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.map')}
              </Link>
              <Link to="/history" 
                className="transition-colors font-medium text-sm md:text-base hover:opacity-80"
                style={{ color: 'var(--festival-accent-light)' }}>
                {t('header.nav.history')}
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

      <Footer />
    </div>
  );
}