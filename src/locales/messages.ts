import { LocaleMessages } from "vue-i18n";

export default function loadLocaleMessages(): LocaleMessages {
  const localesEN = require.context("./en", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const localesPL = require.context("./pl", true, /[A-Za-z0-9-_,\s]+\.json$/i);

  const messages: LocaleMessages = {
    en: {},
    pl: {},
  };

  localesEN.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locales = matched[1];
      messages.en[locales] = localesEN(key);
    }
  });

  localesPL.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locales = matched[1];
      messages.pl[locales] = localesPL(key);
    }
  });

  return messages;
}
