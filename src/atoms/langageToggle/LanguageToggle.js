import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div>
            <button onClick={() => toggleLanguage('fr')}>{t('French')}</button>
            <button onClick={() => toggleLanguage('en')}>{t('English')}</button>
        </div>
    );
};

export default LanguageToggle;
