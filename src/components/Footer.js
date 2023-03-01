import React from 'react';
import Container from "react-bootstrap/Container";
import { Button, ButtonGroup, NavLink } from "react-bootstrap";
import { MAIN_ROUTE} from "../consts";

import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t, i18n}  = useTranslation();


    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <div className="w-100 pt-2 pb-2" style={{background: "black", height: "80px"}}>
            <Container style={{height: "100%", display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: "center"}}>
                <NavLink style={{color: "white"}} to={MAIN_ROUTE}>{t('user')}</NavLink>


                <ButtonGroup className="me-2" aria-label="Second group">
                    <Button onClick={() => changeLanguage("en")}>EN</Button>
                    <Button onClick={() => changeLanguage("uk")}>UK</Button>
                </ButtonGroup>


            </Container>
        </div>
    );
};

export default Footer;
