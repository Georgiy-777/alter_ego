import React, { useContext } from 'react';
import { authRoutes, publicRoutes } from "../router";
import { MAIN_ROUTE } from "../consts";
import { Context } from "../index";
import { Redirect, Route, Switch } from "react-router-dom";

const AppRouter = () => {
    const {user} = useContext(Context);


    return (
        <Switch>
            {!!user.isAuth && (authRoutes.map(({path, Component}) =>
                <Route path={path} key={path} component={Component} exact/>
            )) }
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} key={path} component={Component} exact/>
            )}
            <Redirect to={MAIN_ROUTE}/>

        </Switch>
    );
};

export default AppRouter;
