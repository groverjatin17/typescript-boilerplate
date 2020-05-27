import React from 'react';
import NavigationBar from './navigationBar/NavigationBar';
import Footer from './footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NavigationBar />
            {children}
            <Footer />
        </>
    );
}
