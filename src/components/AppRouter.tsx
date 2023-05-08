import { Flex, Stack } from "@mantine/core";
import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Context } from "../main";
import { authRoutes, publicRoutes } from "../utils/routes";
import FooterCentered from "./Footer/Footer";
import HeaderSearch from "./Header/Header";
import NavbarMinimal  from "./Navbar";

const AppRouter = () => {
    const {UStore} = useContext(Context);
    const location = useLocation();
    
    if (UStore.isAuth && (location.pathname === '/login' || location.pathname === '/registration')) {
        return <Navigate to='/community' replace/>
    };

    if (UStore.isAuth && location.pathname === '/') {
        return <Navigate to='/community'/>
    };

    return (
        <Flex>
            {(UStore.isAuth && (location.pathname !== '/login' && location.pathname !== '/registration')) ? <NavbarMinimal/> : <></>}
            <Stack spacing="0rem">
                {(location.pathname === '/login' || location.pathname === '/registration') 
                ? <></> : <HeaderSearch links={publicRoutes}/>}
                <Routes>
                    {UStore.isAuth && authRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    {publicRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                </Routes>
                {(location.pathname === '/login' || location.pathname === '/registration') 
                ? <></> : <FooterCentered links={publicRoutes}/>}
            </Stack>
        </Flex>
    );
};

export default AppRouter;