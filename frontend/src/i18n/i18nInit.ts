/**
 * To add new locale we need to
 * - register it in localesStore ('initializeLocales' function)
 * - register it in 'antdLocalesStore' ('addAntdLocale' function)
 * - register dayjs locale (as import below)
 */
import { localesStore } from "@haulmont/jmix-react-web";
import { antdLocalesStore } from "@haulmont/jmix-react-antd";
import en from "./en.json";
import en_US from "antd/es/locale/en_US";
import "dayjs/locale/en";

localesStore.addLocale({
  locale: "en",
  caption: "English",
  messages: en
});

antdLocalesStore.addAntdLocale({
  localeName: "en",
  antdLocale: en_US
});
