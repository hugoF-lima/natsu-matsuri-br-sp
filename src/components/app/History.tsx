import { Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

export function History() {
  const { t } = useTranslation();
  
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1762156256544-3e28e62650f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZlc3RpdmFsJTIwY3Jvd2QlMjBvdXRkb29yfGVufDF8fHx8MTc3MDgzNzcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.crowd'),
    },
    {
      url: "https://images.unsplash.com/photo-1693749198319-99ae0b2d551d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGV4cG8lMjBicmFzaWwlMjBzdGFnZXxlbnwxfHx8fDE3NzA4Mzc3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.stage'),
    },
    {
      url: "https://images.unsplash.com/photo-1722272550352-582aa5586c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NwbGF5JTIwY29udGVzdCUyMGdyb3VwfGVufDF8fHx8MTc3MDgzNzcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.cosplay'),
    },
    {
      url: "https://images.unsplash.com/photo-1764456247666-0012c5f0bd48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGN1bHR1cmFsJTIwZXZlbnR8ZW58MXx8fHwxNzcwODM3NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.cultural'),
    },
    {
      url: "https://images.unsplash.com/photo-1591880311738-5903bdb28d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NwbGF5JTIwZXZlbnQlMjBicmFzaWx8ZW58MXx8fHwxNzcwODM3NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.participants'),
    },
    {
      url: "https://images.unsplash.com/photo-1762683497566-0c7466511cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN0cmVldCUyMGZlc3RpdmFsJTIwbmlnaHR8ZW58MXx8fHwxNzcwODM3NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.night'),
    },
    {
      url: "https://images.unsplash.com/photo-1571855288245-878925ca1a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hdHN1cmklMjBuaWdodCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzA4Mzc2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.lights'),
    },
    {
      url: "https://images.unsplash.com/photo-1761112748328-74a7f3e404de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZlc3RpdmFsJTIweXVrYXRhJTIwcGVvcGxlfGVufDF8fHx8MTc3MDgzNzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.yukata'),
    },
    {
      url: "https://images.unsplash.com/photo-1761992554804-9a107cd4b5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRzdXJpJTIwZm9vZCUyMHN0YWxscyUyMGphcGFufGVufDF8fHx8MTc3MDgzNzYxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: t('history.gallery.captions.food'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{ background: 'var(--festival-gradient-primary)' }}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">{t('history.hero.title')}</h1>
          <p className="text-xl text-center max-w-3xl mx-auto opacity-95">
            {t('history.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* History Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="rounded-2xl p-8 mb-8"
              style={{ backgroundColor: 'var(--festival-light)' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('history.beginning.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t('history.beginning.paragraph1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('history.beginning.paragraph2')}
              </p>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--festival-gradient-primary)' }}
                  >
                    <Calendar className="text-white" size={28} />
                  </div>
                </div>
                <div 
                  className="flex-grow bg-white rounded-2xl p-6"
                  style={{ 
                    border: '2px solid',
                    borderColor: 'var(--festival-primary-light)'
                  }}
                >
                  <div 
                    className="font-bold text-sm mb-2"
                    style={{ color: 'var(--festival-primary)' }}
                  >
                    {t('history.timeline.2018.label')}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('history.timeline.2018.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('history.timeline.2018.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--festival-gradient-secondary)' }}
                  >
                    <Calendar className="text-white" size={28} />
                  </div>
                </div>
                <div 
                  className="flex-grow bg-white rounded-2xl p-6"
                  style={{ 
                    border: '2px solid',
                    borderColor: 'var(--festival-secondary-light)'
                  }}
                >
                  <div 
                    className="font-bold text-sm mb-2"
                    style={{ color: 'var(--festival-secondary)' }}
                  >
                    {t('history.timeline.2019.label')}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('history.timeline.2019.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('history.timeline.2019.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--festival-purple)' }}
                  >
                    <Calendar className="text-white" size={28} />
                  </div>
                </div>
                <div 
                  className="flex-grow bg-white rounded-2xl p-6"
                  style={{ 
                    border: '2px solid',
                    borderColor: 'var(--festival-purple-light)'
                  }}
                >
                  <div 
                    className="font-bold text-sm mb-2"
                    style={{ color: 'var(--festival-purple)' }}
                  >
                    {t('history.timeline.2021.label')}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('history.timeline.2021.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('history.timeline.2021.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--festival-gradient-primary)' }}
                  >
                    <Calendar className="text-white" size={28} />
                  </div>
                </div>
                <div 
                  className="flex-grow bg-white rounded-2xl p-6"
                  style={{ 
                    border: '2px solid',
                    borderColor: 'var(--festival-primary-light)'
                  }}
                >
                  <div 
                    className="font-bold text-sm mb-2"
                    style={{ color: 'var(--festival-primary)' }}
                  >
                    {t('history.timeline.2024.label')}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('history.timeline.2024.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('history.timeline.2024.description')}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-2xl"
                    style={{ background: 'var(--festival-gradient-accent)' }}
                  >
                    🎌
                  </div>
                </div>
                <div 
                  className="flex-grow rounded-2xl p-6"
                  style={{ 
                    background: `linear-gradient(135deg, var(--festival-cream) 0%, var(--festival-light) 100%)`,
                    border: '2px solid',
                    borderColor: 'var(--festival-accent)'
                  }}
                >
                  <div 
                    className="font-bold text-sm mb-2"
                    style={{ color: 'var(--festival-secondary-dark)' }}
                  >
                    {t('history.timeline.2026.label')}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t('history.timeline.2026.title')}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t('history.timeline.2026.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">{t('history.gallery.title')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('history.gallery.subtitle')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <p className="text-white font-medium text-lg">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 text-white" style={{ background: 'var(--festival-gradient-primary)' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">{t('history.stats.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">8+</div>
              <div className="text-lg opacity-90">{t('history.stats.years')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-lg opacity-90">{t('history.stats.visitors')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">{t('history.stats.attractions')}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">{t('history.stats.guests')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
