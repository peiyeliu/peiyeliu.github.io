import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './css/Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
                <main className="layout-content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
