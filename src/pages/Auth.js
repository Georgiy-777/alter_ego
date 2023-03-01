import React, { useRef } from 'react';
import Container from "react-bootstrap/Container";
import { Button, Card, Form } from "react-bootstrap";
import {  PROFILE_ROUTE } from "../consts";
import { useHistory} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useContext } from "react";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory()
    const {t}  = useTranslation();
    const email = useRef()
    const password = useRef()

    const handleSubmit =()=>{

        if(email.current.value === "admin" && password.current.value  === "12345") {
            localStorage.setItem("emailData", "admin")
            localStorage.setItem("passwordData", "12345")
            user.setIsAuth(true)
            JSON.stringify(localStorage.setItem("loginState", `${user.isAuth}`))
            history.push(PROFILE_ROUTE)
        }
        else if((email.current.value !== "admin" && password.current.value  === "12345") || (email.current.value === "admin" && password.current.value  !== "12345") ) {
            alert(`${t("alert-name")}`)
        }
        else if((email.current.value !== "admin" && password.current.value  !== "12345") ) {
            alert(`${t("alert-data")}`)
        }

    }
    return (
        <div style={{background: "black", opacity: '0.7'}}>
            <Container
                className='d-flex justify-content-center align-items-center'
                style={{height: window.innerHeight - 54}}>
                <Card>
                    <h2 className='pt-4 d-flex justify-content-center align-items-top' style={{width: 600}}>{t('auth-head')}</h2>
                    <Form className='d-flex flex-column p-4' >
                        <Form.Control className='mt-3' placeholder={t('int-log')} ref={email}  />
                        <Form.Control className='mt-3' placeholder={t('int-pass')} ref={password} />
                        <Button className='mt-3' variant={'outline-success'} onClick={handleSubmit}>{t('login-btn')}</Button>
                    </Form>
                </Card>
            </Container>

        </div>

    );
});

export default Auth;
