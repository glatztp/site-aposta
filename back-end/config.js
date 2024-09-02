document.addEventListener('DOMContentLoaded', function() {
  i18next
      .use(i18nextBrowserLanguageDetector)
      .use(i18nextHttpBackend)
      .init({
          backend: {
              loadPath: '/locales/{{lng}}/translation.json'
          },
          fallbackLng: 'pt',
          debug: true
      }, function(err, t) {
          if (err) return console.error(err);
          updateContent();
      });

  function updateContent() {
      document.getElementById('header-title').textContent = i18next.t('header.title');
      document.getElementById('footer-copy').textContent = i18next.t('footer.copy');
      document.getElementById('config-language-selection').textContent = i18next.t('config.languageSelection');
      document.getElementById('config-language-label').textContent = i18next.t('config.languageLabel');
  }

  document.getElementById('language-form').addEventListener('submit', function(e) {
      e.preventDefault();
      const selectedLanguage = document.getElementById('language-select').value;
      i18next.changeLanguage(selectedLanguage, function(err) {
          if (err) return console.error(err);
          updateContent();
          localStorage.setItem('language', selectedLanguage);
      });
  });

  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
      i18next.changeLanguage(savedLanguage, function(err) {
          if (err) return console.error(err);
          updateContent();
      });
  }
});
