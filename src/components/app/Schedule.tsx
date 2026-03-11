import { useTranslation } from "react-i18next";

export function Schedule() {
  const { t } = useTranslation();

  const schedule = t('schedule.events', { returnObjects: true }) as Array<{
    time: string;
    title: string;
  }>;

  const EVENT_DATE = "2026-07-15";

  function isCurrent(index: number) {
    const current = schedule[index];
    const next = schedule[index + 1];

    const now = new Date();

    const currentTime = new Date(`${EVENT_DATE}T${current.time}:00`);

    if (!next) return now >= currentTime;

    const nextTime = new Date(`${EVENT_DATE}T${next.time}:00`);

    return now >= currentTime && now < nextTime;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center text-white overflow-hidden" style={{ background: 'var(--festival-gradient-primary)' }}>
        
        {/* Japanese seigaiha wave pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="seigaiha"
                x="0"
                y="0"
                width="60"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <path d="M0 30 A30 30 0 0 1 60 30" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M10 30 A20 20 0 0 1 50 30" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M20 30 A10 10 0 0 1 40 30" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>

            <rect width="100%" height="100%" fill="url(#seigaiha)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative container mx-auto">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            {t('schedule.hero.title')}
          </h1>

          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            {t('schedule.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Schedule List */}
      <main className="max-w-4xl px-6 py-16 md:py-20 mx-auto">
        <ul className="space-y-4 md:space-y-6">
          {schedule.map((item, index) => {
            const active = isCurrent(index);

            return (
              <li
                key={index}
                className={`
                  flex flex-col sm:flex-row sm:justify-between sm:items-center
                  gap-3 sm:gap-4
                  p-5 md:p-6
                  rounded-2xl
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${active 
                    ? "scale-105 text-white" 
                    : "bg-white text-gray-900"
                  }
                `}
                style={active ? { 
                  background: 'var(--festival-gradient-primary)' 
                } : {}}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <span 
                    className={`
                      font-bold text-lg md:text-xl
                      px-4 py-2 rounded-full
                      ${active 
                        ? "bg-white text-gray-900" 
                        : "text-white"
                      }
                    `}
                    style={!active ? { 
                      background: 'var(--festival-gradient-secondary)' 
                    } : {}}
                  >
                    {item.time}
                  </span>

                  {active && (
                    <span 
                      className="text-xs font-bold px-3 py-1 rounded-full bg-white"
                      style={{ color: 'var(--festival-primary)' }}
                    >
                      {t('schedule.now')}
                    </span>
                  )}
                </div>

                <span className={`
                  font-medium text-base md:text-lg
                  ${active ? "text-white" : "text-gray-900"}
                  flex-1 sm:text-right
                `}>
                  {item.title}
                </span>
              </li>
            );
          })}
        </ul>
      </main>

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t('schedule.info.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              {t('schedule.info.description')}
            </p>
            <div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold"
              style={{ 
                backgroundColor: 'var(--festival-light)',
                color: 'var(--festival-primary)'
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span>{t('schedule.info.note')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 text-white" style={{ background: 'var(--festival-gradient-primary)' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">{t('schedule.cta.title')}</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-95">
              {t('schedule.cta.description')}
            </p>
            <a
              href="/#tickets"
              className="inline-block px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ 
                backgroundColor: 'var(--festival-accent)',
                color: 'var(--festival-dark)'
              }}
            >
              {t('schedule.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
