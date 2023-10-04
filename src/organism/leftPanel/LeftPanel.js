import React from 'react';
import './leftPanel.scss';
import Title from "../../atoms/title/Title";
import LanguageToggle from "../../atoms/langageToggle/LanguageToggle";
import {useTranslation} from 'react-i18next';

const LeftPanel = () => {
    const {t} = useTranslation();

    return (
        <div className="left-panel">
            <LanguageToggle/>
            <Title text={t('leftPanelFr.sudoku')} color={'#007acc'} fontSize={2} fontWeight={1}/>
            <div className="rules-section">
                <Title text={t('translation:Presentation')} level={2} color={'#007acc'} fontSize={1.5} fontWeight={1}/>
                <div>
                    <h1>{t('translation:welcomeMessage')}</h1>
                    <p>{t('translation:appDescription')}</p>
                    <h2>{t('translation:howItWorks')}</h2>
                    <ol>
                        <li>{t('translation:step1')}</li>
                        <li>{t('translation:step2')}</li>
                        <li>{t('translation:step3')}</li>
                        <li>{t('translation:step4')}</li>
                    </ol>
                    <p>{t('translation:enjoySolving')}</p>
                </div>
            </div>
        </div>
    );
};

export default LeftPanel;
