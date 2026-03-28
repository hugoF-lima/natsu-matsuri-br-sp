export interface TranslationResources {
  translation: {
    header: {
      title: string;
      subtitle: string;
      nav: {
        home: string;
        history: string;
        tickets: string;
      };
    };
    home: {
      hero: {
        badge: string;
        title: string;
        description: string;
        buyTickets: string;
        learnMore: string;
        mascot: string;
      };
      countdown: {
        title: string;
        subtitle: string;
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
      };
      eventInfo: {
        title: string;
        date: {
          title: string;
          value: string;
          subtitle: string;
        };
        location: {
          title: string;
          value: string;
          subtitle: string;
        };
        hours: {
          title: string;
          value: string;
          subtitle: string;
        };
      };
      tickets: {
        title: string;
        subtitle: string;
        daily: {
          name: string;
          price: string;
          description: string;
          features: string[];
        };
        halfticket: {
          name: string;
          price: string;
          description: string;
          badge: string;
          features: string[];
        };
        vip: {
          name: string;
          price: string;
          description: string;
          features: string[];
        };
        buyNow: string;
      };
      whatToExpect: {
        title: string;
        anime: {
          title: string;
          description: string;
        };
        games: {
          title: string;
          description: string;
        };
        culture: {
          title: string;
          description: string;
        };
        food: {
          title: string;
          description: string;
        };
      };
    };
    history: {
      hero: {
        title: string;
        subtitle: string;
      };
      beginning: {
        title: string;
        paragraph1: string;
        paragraph2: string;
      };
      timeline: {
        [key: string]: {
          label: string;
          title: string;
          description: string;
        };
      };
      gallery: {
        title: string;
        subtitle: string;
        captions: {
          [key: string]: string;
        };
      };
      stats: {
        title: string;
        years: string;
        visitors: string;
        attractions: string;
        guests: string;
      };
    };
    footer: {
      about: {
        title: string;
        description: string;
      };
      social: {
        title: string;
      };
      contact: {
        title: string;
      };
      sponsors: {
        title: string;
        become: string;
      };
      copyright: string;
    };
  };
}
