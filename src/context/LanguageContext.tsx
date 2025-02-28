import { createContext, useCallback, useContext, useState } from "react";

interface LanguageContextData {
  language: "en" | "pt";
  toggleLanguage: () => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageContext = createContext({} as LanguageContextData);

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((OldLanguage) => (OldLanguage === "en" ? "pt" : "en"));
  }, []);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
