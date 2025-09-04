import Footer from 'layouts/Footer/Footer';
import Header from 'layouts/Header/Header';
import { ReactNode, useState } from 'react';

export type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
