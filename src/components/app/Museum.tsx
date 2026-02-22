import { useState } from "react";
import { ChevronDown, Calendar, Users, Image as ImageIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

interface EditionData {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export function Museum() {
  const { t } = useTranslation();
  const [openEdition, setOpenEdition] = useState<string | null>("2025");

  const editions = ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];
  
  const editionImages: Record<string, string[]> = {
    "2017": [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1591880311738-5903bdb28d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2018": [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1722272550352-582aa5586c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1558744059-a9e737085db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2019": [
      "https://images.unsplash.com/photo-1693749198319-99ae0b2d551d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2020": [
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2021": [
      "https://images.unsplash.com/photo-1762156256544-3e28e62650f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1464047736614-af63643285bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2022": [
      "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2023": [
      "https://images.unsplash.com/photo-1762683497566-0c7466511cda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1571855288245-878925ca1a73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2024": [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ],
    "2025": [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      "https://images.unsplash.com/photo-1761992554804-9a107cd4b5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
    ]
  };

  const toggleEdition = (year: string) => {
    setOpenEdition(openEdition === year ? null : year);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-700 via-teal-600 to-green-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">{t('museum.hero.title')}</h1>
            <p className="text-lg md:text-xl opacity-95">
              {t('museum.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t('museum.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Editions Timeline */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {editions.map((year) => {
              const edition = t(`museum.editions.${year}`, { returnObjects: true }) as EditionData;
              const isOpen = openEdition === year;
              
              return (
                <div
                  key={year}
                  className="border-2 border-emerald-200 rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Card Header - Clickable */}
                  <button
                    onClick={() => toggleEdition(year)}
                    className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-emerald-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 md:gap-4 flex-1 text-left">
                      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="text-white" size={window.innerWidth < 768 ? 20 : 28} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <h2 className="text-2xl md:text-3xl font-bold text-emerald-700">{edition.year}</h2>
                          <span className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">{edition.subtitle}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-1">{edition.title}</h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`text-emerald-600 flex-shrink-0 ml-2 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      size={window.innerWidth < 768 ? 20 : 24}
                    />
                  </button>

                  {/* Collapsible Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="p-4 md:p-6 pt-0 md:pt-0 border-t border-emerald-100">
                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-6">
                        {edition.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4 md:mb-6">
                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                          <Users className="text-emerald-600" size={window.innerWidth < 768 ? 18 : 20} />
                          <h4 className="text-base md:text-lg font-bold text-gray-900">Destaques</h4>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-2 md:gap-3">
                          {edition.highlights.map((highlight: string, index: number) => (
                            <li key={index} className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                              <span className="text-emerald-500 font-bold flex-shrink-0 mt-1">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Photo Gallery */}
                      <div>
                        <div className="flex items-center gap-2 mb-3 md:mb-4">
                          <ImageIcon className="text-emerald-600" size={window.innerWidth < 768 ? 18 : 20} />
                          <h4 className="text-base md:text-lg font-bold text-gray-900">Galeria de Fotos</h4>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                          {editionImages[year]?.map((imageUrl, index) => (
                            <div
                              key={index}
                              className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                            >
                              <img
                                src={imageUrl}
                                alt={`${edition.title} - Foto ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 md:p-3">
                                <p className="text-white text-xs md:text-sm font-medium">{edition.title} {edition.year}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-emerald-700 via-teal-600 to-green-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Seja Parte da História</h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 opacity-95">
              A edição de 2026 está chegando! Garanta seu ingresso e faça parte dessa jornada incrível.
            </p>
            <a
              href="#tickets"
              className="inline-block bg-lime-400 text-emerald-900 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-lime-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Comprar Ingressos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
