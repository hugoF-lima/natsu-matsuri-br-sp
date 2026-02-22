import { useState, useEffect, useCallback } from "react";
import { Calendar, MapPin, Ticket, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  const eventDate = new Date("2026-03-29T09:00:00");

  const calculateTimeLeft = useCallback(() => {
    const difference = eventDate.getTime() - new Date().getTime();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [eventDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="overflow-x-hidden">
    {/* Hero Section */}
      <section 
        className="relative text-white py-12 md:py-20 overflow-hidden" 
        style={{ background: 'var(--festival-gradient-primary)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1660330120426-0f83806543cf?w=1080&q=80" 
            alt="Festival background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              {/* Badge using Figma variables */}
              <div 
                className="inline-block px-4 py-2 rounded-full font-bold mb-4 text-sm md:text-base shadow-sm"
                style={{ 
                  backgroundColor: 'var(--festival-accent)',
                  color: 'var(--festival-dark)' 
                }}
              >
                {t('home.hero.badge')}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {/* Fixed the split logic for cleaner rendering */}
                {t('home.hero.title')}
              </h1>

              <p className="text-lg md:text-xl mb-8 opacity-95 max-w-xl">
                {t('home.hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#tickets" 
                  className="px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                  style={{ 
                    backgroundColor: 'var(--festival-accent)',
                    color: 'var(--festival-dark)' 
                  }}
                >
                  {t('home.hero.buyTickets')}
                </a>
                <a 
                  href="#info" 
                  className="backdrop-blur-sm border-2 px-8 py-4 rounded-full font-bold text-lg transition-all text-center"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white' 
                  }}
                >
                  {t('home.hero.learnMore')}
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Pulsing glow using accent color */}
                <div 
                  className="absolute inset-0 rounded-3xl blur-2xl opacity-40 animate-pulse"
                  style={{ backgroundColor: 'var(--festival-accent)' }}
                ></div>
                <img 
                  src="/img/mascote-natsu-br-2026.jpeg" 
                  alt="Mascote Natsu Matsuri" 
                  className="relative rounded-3xl shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white"
                />
                <div 
                  className="absolute -bottom-4 -right-4 px-6 py-2 rounded-full font-bold shadow-xl"
                  style={{ backgroundColor: 'white', color: 'var(--festival-primary)' }}
                >
                  {t('home.hero.mascot')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="text-white py-16" style={{ backgroundColor: 'var(--festival-dark)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">{t('home.countdown.title')}</h2>
            <p className="text-gray-400 italic">{t('home.countdown.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="rounded-2xl p-6 text-center"
                style={{ background: 'var(--festival-gradient-secondary)' }}>
                <div className="text-5xl font-bold mb-1">{value.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-widest opacity-80">{t(`home.countdown.${unit}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info & Tickets Section */}
      <section id="info" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t('home.eventInfo.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              style={{ backgroundColor: 'var(--festival-light)' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'var(--festival-gradient-primary)' }}
              >
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.eventInfo.date.title')}</h3>
              <p className="text-gray-700 text-lg font-medium">{t('home.eventInfo.date.value')}</p>
              <p className="text-gray-600 mt-2">{t('home.eventInfo.date.subtitle')}</p>
            </div>
            <div 
              className="rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              style={{ backgroundColor: 'var(--festival-light)' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'var(--festival-gradient-secondary)' }}
              >
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.eventInfo.location.title')}</h3>
              <ul className="space-y-3 mb-8">
                <p className="text-gray-700 text-xl font-medium">{t('home.eventInfo.location.value')}</p>
                <p className="text-gray-700 text-sm font-small">{"("+t('home.eventInfo.location.valuesecond')+")"}</p>
                <p className="text-gray-600 mt-2">{t('home.eventInfo.location.valuethird')+", "+ t('home.eventInfo.location.subtitle')}</p>
              </ul>
              <a 
                href="https://maps.app.goo.gl/svuN8KA5AY1CYorP6" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-white text-center py-3 rounded-full font-bold transition-all"
                style={{ background: 'var(--festival-accent-dark)' }}
              >
                {t('home.eventInfo.location.directions')}
              </a>
            </div>
            <div 
              className="rounded-2xl p-8 text-center hover:shadow-xl transition-shadow"
              style={{ backgroundColor: 'var(--festival-light)' }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--festival-purple)' }}
              >
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{t('home.eventInfo.hours.title')}</h3>
              <p className="text-gray-700 text-lg font-medium">{t('home.eventInfo.hours.value')}</p>
              <p className="text-gray-600 mt-2">{t('home.eventInfo.hours.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tickets Section */}
      <section id="tickets" className="py-16 text-white" style={{ background: 'var(--festival-gradient-primary)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{t('home.tickets.title')}</h2>
          <p className="text-center text-xl mb-12 opacity-95">{t('home.tickets.subtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white text-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center mb-6">
                <Ticket className="mx-auto mb-4" style={{ color: 'var(--festival-primary)' }} size={48} />
                <h3 className="text-2xl font-bold mb-2">{t('home.tickets.daily.name')}</h3>
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--festival-primary)' }}>{t('home.tickets.daily.price')}</div>
                <p className="text-gray-600">{t('home.tickets.daily.description')}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {t('home.tickets.daily.features', { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: 'var(--festival-secondary)' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://www.eventbrite.com.br" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-white text-center py-3 rounded-full font-bold transition-all"
                style={{ background: 'var(--festival-gradient-primary)' }}
              >
                {t('home.tickets.buyNow')}
              </a>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-8 relative overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
              <div 
                className="absolute top-0 right-0 px-4 py-1 text-sm font-bold"
                style={{ 
                  backgroundColor: 'var(--festival-accent)',
                  color: 'var(--festival-dark)'
                }}
              >
                {t('home.tickets.passport.badge')}
              </div>
              <div className="text-center mb-6">
                <Ticket className="mx-auto mb-4" style={{ color: 'var(--festival-secondary)' }} size={48} />
                <h3 className="text-2xl font-bold mb-2">{t('home.tickets.passport.name')}</h3>
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--festival-secondary)' }}>{t('home.tickets.passport.price')}</div>
                <p className="text-gray-600">{t('home.tickets.passport.description')}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {t('home.tickets.passport.features', { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: 'var(--festival-secondary)' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://www.eventbrite.com.br" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-white text-center py-3 rounded-full font-bold transition-all"
                style={{ background: 'var(--festival-gradient-secondary)' }}
              >
                {t('home.tickets.buyNow')}
              </a>
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-8 hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-center mb-6">
                <Ticket className="mx-auto mb-4" style={{ color: 'var(--festival-purple)' }} size={48} />
                <h3 className="text-2xl font-bold mb-2">{t('home.tickets.vip.name')}</h3>
                <div className="text-4xl font-bold mb-2" style={{ color: 'var(--festival-purple)' }}>{t('home.tickets.vip.price')}</div>
                <p className="text-gray-600">{t('home.tickets.vip.description')}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {t('home.tickets.vip.features', { returnObjects: true }).map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: 'var(--festival-secondary)' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://www.eventbrite.com.br" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-white text-center py-3 rounded-full font-bold transition-all"
                style={{ backgroundColor: 'var(--festival-purple)' }}
              >
                {t('home.tickets.buyNow')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">{t('home.whatToExpect.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1767103147087-a62fb8fecb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbnZlbnRpb24lMjBjcm93ZCUyMGJyYXppbHxlbnwxfHx8fDE3NzA4Mzc2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Anime e Cosplay" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('home.whatToExpect.anime.title')}</h3>
                  <p className="text-white/90">{t('home.whatToExpect.anime.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1558744059-a9e737085db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBicmFuZCUyMGxvZ298ZW58MXx8fHwxNzcwODM3NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Games" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('home.whatToExpect.games.title')}</h3>
                  <p className="text-white/90">{t('home.whatToExpect.games.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1761112748328-74a7f3e404de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZlc3RpdmFsJTIweXVrYXRhJTIwcGVvcGxlfGVufDF8fHx8MTc3MDgzNzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Cultura Japonesa" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('home.whatToExpect.culture.title')}</h3>
                  <p className="text-white/90">{t('home.whatToExpect.culture.description')}</p>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1761992554804-9a107cd4b5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRzdXJpJTIwZm9vZCUyMHN0YWxscyUyMGphcGFufGVufDF8fHx8MTc3MDgzNzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Gastronomia" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('home.whatToExpect.food.title')}</h3>
                  <p className="text-white/90">{t('home.whatToExpect.food.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}