import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'en',
    messages: {
        en,
        fr,
        es
    }
});

export default i18n;
