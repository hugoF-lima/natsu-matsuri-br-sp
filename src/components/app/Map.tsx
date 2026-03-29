import { useState } from "react";
import { useTranslation } from "react-i18next";

const LOCATIONS = [
  { id: 1, name: "Check-in: guichê de ingressos", color: "#0e68ee", top: "77%", left: "28%", floor: "Térreo" },
  { id: 2, name: "Caixa e merch exclusiva do Natsu26", color: "#7986CB", top: "75%", left: "35%", floor: "Térreo" },
  { id: 3, name: "Merch dos nossos convidados", color: "#9575CD", top: "70%", left: "38%", floor: "Térreo" },
  { id: 4, name: "Área dos patrocinadores", color: "#D4E157", top: "60%", left: "33%", floor: "Térreo" },
  { id: 4, name: "Área dos patrocinadores", color: "#D4E157", top: "70%", left: "27%", floor: "Térreo" },
  { id: 4, name: "Área dos patrocinadores", color: "#D4E157", top: "72%", left: "42%", floor: "Térreo" },
  { id: 5, name: "Mesa de GO", color: "#455A64", top: "64%", left: "38%", floor: "Térreo" },
  { id: 6, name: "Mesa de brincadeiras", color: "#455A64", top: "66%", left: "41%", floor: "Térreo" },
  { id: 7, name: "Maid Café", color: "#F06292", top: "65%", left: "54%", floor: "Térreo" },
  { id: 8, name: "Refeitório", color: "#64B5F6", top: "56%", left: "39%", floor: "Térreo" },
  { id: 9, name: "KoshuMart - Konbini", color: "#66BB6A", top: "48%", left: "31%", floor: "Térreo" },
  { id: 10, name: "Palco Principal", color: "#EF5350", top: "55%", left: "25%", floor: "Térreo" },
  { id: 11, name: "Escadas e elevadores", color: "#B71C1C", top: "78%", left: "44%", floor: "Térreo" },
  { id: 12, name: "Camarim para artistas", color: "#FFAB91", top: "68%", left: "19%", floor: "Térreo" },
  { id: 13, name: "Espaço de workshops", color: "#FFB74D", top: "22%", left: "30%", floor: "Mesanino" },
  { id: 14, name: "Sala reservada aos voluntários", color: "#80CBC4", top: "32%", left: "31%", floor: "Mesanino" },
];

// ADJUST THESE TWO VALUES TO SHIFT ALL MARKERS AT ONCE
const GLOBAL_OFFSET = {
  x: "120px", // e.g., "10px" to shift right, "-5px" to shift left
  y: "10px"  // e.g., "5px" to shift down, "-10px" to shift up
};

export function Map() {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="pt-[var(--navbar-height)] min-h-screen bg-white">
      {/* Header */}
      <section className="relative px-6 py-16 text-center text-[#005566] bg-[#9fe6f4]">
        <h1 className="text-4xl font-bold sm:text-5xl mb-2">{t('map.title', 'Mapa do Evento')}</h1>
        <p className="text-lg opacity-80 italic">{t('map.subtitle', 'Explore as áreas do Natsu Matsuri')}</p>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* LEFT SIDE: THE MAP (Sticky) */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#e6f8fc] bg-white">
              <img
                src="/img/mapa-programação-evento.png"
                alt="Mapa do Evento Natsu Matsuri"
                className="w-full h-auto block relative z-0"
              />

              {LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  style={{
                    // Use calc to combine original percentage with the global offset
                    top: `calc(${loc.top} + ${GLOBAL_OFFSET.y})`,
                    left: `calc(${loc.left} + ${GLOBAL_OFFSET.x})`,
                    backgroundColor: hoveredId === loc.id ? loc.color : 'white',
                    borderColor: loc.color,
                    color: hoveredId === loc.id ? 'white' : loc.color,
                  }}
                  className={`absolute w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 flex items-center justify-center text-[11px] font-black shadow-md pointer-events-none ${
                    hoveredId === loc.id ? 'scale-125 z-20 shadow-xl' : 'scale-100 z-10 opacity-90'
                  }`}
                >
                  {loc.id}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400 italic text-center">
              {t('map.hint', 'Passe o mouse sobre a lista para localizar as áreas no mapa.')}
            </p>
          </div>

          {/* RIGHT SIDE: THE LEGEND (Sticky) */}
          <div className="lg:col-span-5 bg-[#e6f8fc] p-8 rounded-3xl shadow-inner sticky top-28">
            <h2 className="text-2xl font-bold text-[#005566] mb-6 flex items-center gap-2">
              <span className="bg-[#005566] text-white px-4 py-1.5 rounded-xl text-sm tracking-widest uppercase">
                {t('map.legend', 'Legenda')}
              </span>
            </h2>

            <div className="space-y-2 overflow-y-auto max-h-[55vh] pr-2 custom-scrollbar">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc.id}
                  onMouseEnter={() => setHoveredId(loc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`w-full text-left flex items-center gap-4 p-3 rounded-xl transition-all border-2 ${
                    hoveredId === loc.id 
                      ? 'bg-white border-[#005566]/20 shadow-md translate-x-2' 
                      : 'bg-transparent border-transparent hover:bg-white/30'
                  }`}
                >
                  <span
                    style={{ backgroundColor: loc.color }}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black shrink-0 shadow-sm"
                  >
                    {loc.id}
                  </span>
                  <div className="flex flex-col">
                    <span className={`font-bold leading-tight ${hoveredId === loc.id ? 'text-[#005566]' : 'text-gray-700'}`}>
                      {loc.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-tighter text-gray-400 font-black">
                      {loc.floor}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Warning Box */}
            <div className="mt-8 p-4 bg-white/80 backdrop-blur-sm border-l-4 border-yellow-400 rounded-r-2xl shadow-sm">
              <div className="flex gap-3">
                <span className="text-xl">⚠️</span>
                <p className="text-xs font-medium text-gray-600 leading-relaxed">
                  {t('map.warning', 'Por gentileza, utilize apenas o refeitório (8) para refeições.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
