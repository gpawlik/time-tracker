import translations from 'i18n';

// TODO: get the locale info from settings
const currentLanguage = 'en';

export default key => {
  return [currentLanguage].concat(key.split('.')).reduce((o, k) => {
    const next = o[k];

    if (next) {
      return next;
    }

    return `#${key}#`;
  }, translations());
};
