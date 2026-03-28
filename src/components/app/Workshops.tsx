import { useTranslation } from "react-i18next";
import { BookOpen, Paintbrush, Music2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

interface WorkshopItem {
  title: string;
  subtitle: string;
  schedule: string;
  location: string;
  level: string;
  description: string;
  highlights: string[];
  image: string;
  icon: "book" | "paint" | "music";
}

const iconMap = {
  book: BookOpen,
  paint: Paintbrush,
  music: Music2,
};

const defaultWorkshops: WorkshopItem[] = [
  {
    title: "Cosplay Crafting Lab",
    subtitle: "Basics of costume construction and prop making",
    schedule: "July 15 • 11:00 - 12:30",
    location: "Creative Hall A",
    level: "Beginner",
    description:
      "Join our hands-on cosplay crafting lab where you can build a piece of costume or weapon prop based on a chosen character. All materials are provided, and you take home a memory of Natsu Matsuri.",
    highlights: [
      "Design props with lightweight materials",
      "Tips on fabrics, adhesives and finishing",
      "Group mentoring + photo opportunity",
    ],
    image: "/img/mascote-natsu-br-2026.jpeg",
    icon: "book",
  },
  {
    title: "Manga Illustration Sprint",
    subtitle: "Character design, inking, and storytelling",
    schedule: "July 16 • 14:00 - 15:30",
    location: "Studio B",
    level: "Intermediate",
    description:
      "Learn how to shape a visual narrative from character concept to page layout. This workshop is ideal for artists aiming to improve speed, style, and dynamic composition in manga art.",
    highlights: [
      "Staging and panel flow",
      "Speed sketch drills",
      "Inking techniques for dramatic scenes",
    ],
    image: "/img/background-pattern.png",
    icon: "paint",
  },
  {
    title: "Taiko and Japanese Beats",
    subtitle: "Rhythm workshop with traditional percussion",
    schedule: "July 17 • 16:30 - 18:00",
    location: "Main Stage",
    level: "Any",
    description:
      "Experience the energy of Taiko and modern Japanese rhythm styles. You will learn basic patterns and get a chance to perform in a short group ending showcase.",
    highlights: [
      "Warm-up and rhythm fundamentals",
      "Taiko ensemble play",
      "Final mini performance",
    ],
    image: "/img/banner-natsu2026.png",
    icon: "music",
  },
];

export function Workshops() {
  const { t } = useTranslation();

  const localizedWorkshops = t("workshops.cards", { returnObjects: true }) as Array<Partial<WorkshopItem>>;
  const workshops = Array.isArray(localizedWorkshops) && localizedWorkshops.length > 0
    ? defaultWorkshops.map((base, index) => ({ ...base, ...localizedWorkshops[index] }))
    : defaultWorkshops;

  const cardLabels = t("workshops.card", { returnObjects: true }) as {
    schedule: string;
    location: string;
    details: string;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden px-6 py-20 text-white" style={{ background: "var(--festival-gradient-primary)" }}>
        <div className="absolute inset-0 opacity-20">
          <img src="/img/background-pattern-wide.png" alt="Natsu Matsuri pattern" className="w-full h-full object-cover" />
        </div>

        <div className="relative container mx-auto z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4">
            {t("header.nav.workshops", "Workshops")}
          </h1>
          <p className="max-w-3xl mx-auto text-center text-base md:text-lg opacity-95">
            {t("workshops.hero.subtitle", "Discover interactive workshops designed for fans, creators and curious minds.")}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-6 md:grid-cols-2">
        {workshops.map((workshop, index) => {
          const Icon = iconMap[workshop.icon];

          return (
            <article key={workshop.title} className="rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900">
                  <Icon size={16} />
                  <span>{workshop.level}</span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{workshop.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{workshop.subtitle}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
                  <p className="font-medium"><span className="text-xs text-gray-500 uppercase">{cardLabels?.schedule ?? "Schedule"}: </span>{workshop.schedule}</p>
                  <p className="font-medium"><span className="text-xs text-gray-500 uppercase">{cardLabels?.location ?? "Location"}: </span>{workshop.location}</p>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value={`workshop-${index}`}>
                    <AccordionTrigger className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white hover:bg-slate-800">
                      {cardLabels?.details ?? "See Workshop Details"}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700 leading-relaxed mb-3">{workshop.description}</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        {workshop.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </article>
          );
        })}
      </main>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{t("workshops.cta.title", "Ready to join?")}</h3>
          <p className="text-gray-600 mb-5">{t("workshops.cta.subtitle", "Reserve your workshop spot early—limited seats available per session.")}</p>
          <a
            href="/#tickets"
            className="inline-block px-6 py-3 rounded-full font-bold text-white transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-fuchsia-500 to-violet-500"
          >
            {t("workshops.cta.button", "Book Your Ticket")}
          </a>
        </div>
      </section>
    </div>
  );
}
