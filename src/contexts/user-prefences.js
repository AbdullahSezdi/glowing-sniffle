import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const UserPrefences = createContext();

const UserPrefProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") === undefined ? "tr"
      : localStorage.getItem("lang") === null ? "tr"
        : localStorage.getItem("lang")
  );

  const values = { language, setLanguage };

  useEffect(() => {
    localStorage.setItem('lang', language);
    i18n.changeLanguage(language);
  }, [i18n, language]);


  return (
    <UserPrefences.Provider value={values}>
      {children}
    </UserPrefences.Provider>
  );
}

export { UserPrefProvider, UserPrefences }