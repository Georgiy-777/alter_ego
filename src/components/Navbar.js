import React, { useContext } from 'react';
import '../styles/App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, ButtonGroup, NavLink } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { LOGIN_ROUTE, MAIN_ROUTE, NEW_ROUTE, PROFILE_ROUTE } from "../consts";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const {t}  = useTranslation();
    const history = useHistory()
    const redirectLogin = () =>{
        console.log(user.isAuth)

        history.push(LOGIN_ROUTE)
    }
    const redirectLogout = () =>{
        console.log(user.isAuth)
        user.setIsAuth(false)

        history.push(MAIN_ROUTE)
        localStorage.removeItem("passwordData")
        localStorage.removeItem("emailData")
        localStorage.removeItem("loginState")
        // window.location.reload()

    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                <NavLink style={{color: "white"}} to={MAIN_ROUTE}>{t('user')}</NavLink>
                <Nav defaultActiveKey="/" as="ul">
                    <Nav.Item as="li" className='navbar__item'>
                        <Nav.Link  href={MAIN_ROUTE} >{t('main')}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='navbar__item'>
                        <Nav.Link href={NEW_ROUTE} >{t('news')}</Nav.Link>
                    </Nav.Item>
                    {user.isAuth
                        ?
                        <Nav.Item as="li" className='navbar__item'>
                            <Nav.Link  href={PROFILE_ROUTE}>{t('profile')}</Nav.Link>
                        </Nav.Item>
                        :
                        <Nav.Item as="li" className='navbar__item'>
                            <Nav.Link  href={MAIN_ROUTE}>{t('profile')}</Nav.Link>
                        </Nav.Item>
                    }

                </Nav>
                <ButtonGroup className="me-1" >
                    <Button onClick={redirectLogin}>{t('login-btn')}</Button>
                    <Button onClick={redirectLogout}>{t('logout-btn')}</Button>
                </ButtonGroup>
            </Container>
        </Navbar>
    );
});

export default NavBar;
