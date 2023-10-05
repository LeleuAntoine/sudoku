import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import Label from "../label/Label";
import i18n from "i18next";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import Select from "../select/Select";

const LanguageToggle = () => {
    const {t} = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('fr');
    const options = [
        {value: 'fr', label: t('translation:french')},
        {value: 'en', label: t('translation:english')},
    ];

    const toggleLanguage = (language) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
    };

    return (
        <div className="language-toggle">
            <Label color={'red'} fontSize={1} text={t('translation:selectLanguage')} icon={faLanguage}/>
            <Select onChange={(e) => toggleLanguage(e.target.value)} options={options} id={'language-select'}
                    value={selectedLanguage}/>
        </div>
    );
};

export default LanguageToggle;
