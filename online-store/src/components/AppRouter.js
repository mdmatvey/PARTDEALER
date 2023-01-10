import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom';
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { MAIN_ROUTE } from "../utils/routeConsts";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />} exact />)}
            {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />} exact />)}
            <Route path='*' element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
});

export default AppRouter;