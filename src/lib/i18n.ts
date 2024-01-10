import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from '@/locales/en/translation.json'
import translationID from '@/locales/id/translation.json'

const resources = {
  en: {
    translation: translationEN
  },
  id: {
    translation: translationID
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'id',
  fallbackLng: 'id',

  interpolation: {
    escapeValue: false
  }
})
