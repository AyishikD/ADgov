import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const scriptId = 'google-translate-script';

    // Check if script already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'et,bn,bho,gu,hi,it,kn,en',
            autoDisplay: false
          },
          'google_translate_element'
        );
      };
    }

    return () => {
      // Cleanup: remove the script if it exists
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <div id="google_translate_element" className="custom-translate-dropdown"></div>;
};

export default GoogleTranslate;
