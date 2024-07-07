import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    if (!document.querySelector('#google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'et,bn,bho,gu,hi,it,kn,en',
          autoDisplay: false
        }, 'google_translate_element');
      };
    } else {
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      }
    }

    return () => {
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        translateElement.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="google_translate_element" className="custom-translate-dropdown"></div>
  );
};

export default GoogleTranslate;
