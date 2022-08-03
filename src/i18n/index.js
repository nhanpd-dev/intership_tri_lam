import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocalStorage, STORAGE } from "../utils";
import en from "./translate/en";
import vi from "./translate/vi";

const resources = {
  vi,
  en,
};
const INIT_LANGUAGE = getLocalStorage(STORAGE.LANGUAGE) || "vi";

i18next.use(initReactI18next).init({
  resources,
  ns: ["common"],
  defaultNS: "common",
  backend: {
    loadPath: "./{{lng}}.json",
  },
  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    useSuspense: true,
  },
  lng: INIT_LANGUAGE,
  fallbackLng: INIT_LANGUAGE,
  preload: [INIT_LANGUAGE],
  interpolation: { escapeValue: false },
});

i18next.off("languageChanged");
i18next.on("languageChanged", (language) => {
  window.localStorage.setItem(STORAGE.LANGUAGE, language);
});

export default i18next;
