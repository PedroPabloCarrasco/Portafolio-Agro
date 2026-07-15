import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getCopy, languageOptions } from '../data/copy';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(languageOptions[0]);
    const copy = useMemo(() => getCopy(language), [language]);

    useEffect(() => {
        document.documentElement.lang = language === 'English' ? 'en' : language === 'Português' ? 'pt' : 'es';
    }, [language]);

    const value = useMemo(() => ({ language, setLanguage, copy, languageOptions }), [language, copy]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}