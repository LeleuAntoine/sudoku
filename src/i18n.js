import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import leftPanelFr from './organism/leftPanel/locales/fr.json'
import sudokuGridFr from './organism/sudokuGrid/locales/fr.json'
import gameControlFr from './molecules/gameControl/locales/fr.json'
import languageToggleFr from './atoms/languageToggle/locales/fr.json'
import gamePageFr from './template/gamePage/locales/fr.json'
import leftPanelEn from './organism/leftPanel/locales/en.json'
import sudokuGridEn from './organism/sudokuGrid/locales/en.json'
import gameControlEn from './molecules/gameControl/locales/en.json'
import languageToggleEn from './atoms/languageToggle/locales/en.json'
import gamePageEn from './template/gamePage/locales/en.json'

const resources = {
    en: {
        translation: {
            ...leftPanelEn,
            ...sudokuGridEn,
            ...gameControlEn,
            ...languageToggleEn,
            ...gamePageEn,
        }
    },
    fr: {
        translation: {
            ...leftPanelFr,
            ...sudokuGridFr,
            ...gameControlFr,
            ...languageToggleFr,
            ...gamePageFr,
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;