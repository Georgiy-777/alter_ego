import React from 'react';
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

const Main = observer(() => {
    const {t} = useTranslation();

    return (

        <div className='p-5 '>
            <header className='d-flex justify-content-center mb-5 '
                    style={{fontWeight: '600', fontSize: "45px", fontFamily: "Arial"}}>{t("main-header")}</header>
            <p style={{fontWeight: '400', fontSize: "20px", fontFamily: "Arial"}}>
                {t('main-text')}
            </p>
        </div>
    );
});

export default Main;
