import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationEN from '@/locales/en/translation.json'
import translationID from '@/locales/id/translation.json'

const resources = {
  id: {
    translation: translationID
  },
  en: {
    translation: translationEN
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: {
      escapeValue: false
    }
  })
