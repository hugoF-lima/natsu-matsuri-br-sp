import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from '../locales/pt';
import en from '../locales/en';
import jp from '../locales/jp';

const resources = {
  pt: { translation: pt },
  en: { translation: en },
  jp: { translation: jp },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt', // idioma padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;