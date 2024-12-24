import React from 'react';
import './header.css'

const Header = ({ toggleSidebar }) => {
    return (
        <header className="header-container">
            {/* Left Section: Search Bar */}
            <div className="header-left">
                <button onClick={toggleSidebar} className="action-btn secondary">
                    ☰
                </button>
                <div className="search-bar">
                    <input type="text" placeholder="Search repositories..." />
                </div>
            </div>

            {/* Right Section: Action Buttons */}
            <div className="header-right">
                {/* <button className="action-btn">Add Repository</button> */}
                <button className="action-btn secondary">Refresh All</button>
            </div>
        </header>
    );
};

export default Header;
