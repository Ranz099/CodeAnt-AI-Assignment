import React, { useState } from 'react';
import Sidebar from '../components/Shared/Sidebar';
import Header from '../components/Shared/Header';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app-layout">
            <div className={`sidebar-container`}>
                <Sidebar />
            </div>
            <div className="main-container">
                <Header toggleSidebar={toggleSidebar} />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default MainLayout;
