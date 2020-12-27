import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
.use(initReactI18next)
.use(HttpBackend)
.init({
  react: {
    useSuspense: false,
  },
  debug: false,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "https://somospsicope.com/api/es.php",
  },
})
/* .then(() => setTimeout(()=>{},4500)); */

export default i18n;
