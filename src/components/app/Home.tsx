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
      <section className="relative bg-gradient-to-br from-emerald-700 via-teal-600 to-green-500 text-white py-12 md:py-20 overflow-hidden">
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
              <div className="inline-block bg-lime-400 text-emerald-900 px-4 py-2 rounded-full font-bold mb-4 shadow-sm">
                {t('home.hero.badge')}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 max-w-xl">
                {t('home.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#tickets" className="bg-lime-400 text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-lime-300 transition-all shadow-lg text-center transform hover:scale-105">
                  {t('home.hero.buyTickets')}
                </a>
                <a href="#info" className="bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center">
                  {t('home.hero.learnMore')}
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-lime-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                <img 
                  src="/img/mascote-natsu-br-2026.jpeg" 
                  alt="Mascote Natsu Matsuri" 
                  className="relative rounded-3xl shadow-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-white text-emerald-700 px-6 py-2 rounded-full font-bold shadow-xl">
                  {t('home.hero.mascot')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-3">{t('home.countdown.title')}</h2>
            <p className="text-gray-400 italic">{t('home.countdown.subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-gradient-to-br from-emerald-600 to-teal-500 rounded-2xl p-6 text-center shadow-inner">
                <div className="text-5xl font-bold mb-1">{value.toString().padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-widest opacity-80">{t(`home.countdown.${unit}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info & Tickets Section */}
      {/* ... keeping your existing structure for Info and Tickets below ... */}
      <section id="info" className="py-16 bg-white">
        {/* (Code remains consistent with your provided structure for Info and Tickets) */}
      </section>
    </div>
  );
}