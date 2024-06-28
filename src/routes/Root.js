import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import NavigationBar from '../components/navigation-bar/NavigationBar';
import Footer from '../components/footer/Footer'

export default function Root() {
    let location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.body.style.background = 'linear-gradient(110.8deg, #F5564E 0%, #8222A5 100%)';
        } else {
            document.body.removeAttribute('style');
        }

        return () => {
            document.body.removeAttribute('style');
        };
    }, [location.pathname]);

    return (
        <>
            <NavigationBar searchBar={location.pathname === '/' ? false : true} />
            <Outlet />
            <Footer dark={location.pathname === '/' ? false : true} />
        </>
    )
}
