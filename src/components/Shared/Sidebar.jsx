import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './sidebar.css'

const Sidebar = () => {

  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth > 768); // Initially false for mobile

  // Handle window resize to toggle visibility based on screen size
  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth <= 768) {
              setIsSidebarVisible(false); // Hide sidebar in mobile view
          } else {
              setIsSidebarVisible(true); // Show sidebar in desktop view
          }
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
  }, []);

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible); // Toggle visibility
  };

  // console.log("asscc", isSidebarVisible);

    return (
        <div className={`sidebar-container ${isSidebarVisible ? "visible" : "hidden"}`}>
            {/* Sidebar Header */}
            <div className="sidebar-header">
              CodeAnt AI
              <button className="sidebar-toggle" onClick={toggleSidebar}>
                    {isSidebarVisible ? "✕" : "☰"}
              </button>
            </div>
            {/* <button className="sidebar-toggle">☰</button> */}

            {/* Profile Section */}
            <div className={`profile-section ${isSidebarVisible ? "visible" : "hidden"}`}>
                <select className="profile-name">
                  <option value="UtkarshDhairyaPa">UtkarshDhairyaPa...</option>
                </select>
            </div>

            {/* Navigation Section */}
            <nav className={`nav-section ${isSidebarVisible ? "visible" : "hidden"}`}>
                <a href="#repositories" className="nav-item active">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                      <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
                    </svg> 
                    Repositories
                </a>
                <a href="#code-review" className="nav-item">
                  <svg fill="#000000" height="800px" width="800px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" >
                    <g>
                      <path d="M10.7,8.3c-0.4-0.4-1-0.4-1.4,0l-7,7c-0.4,0.4-0.4,1,0,1.4l7,7C9.5,23.9,9.7,24,10,24s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4
                        L4.4,16l6.3-6.3C11.1,9.3,11.1,8.7,10.7,8.3z"></path>
                      <path d="M29.7,15.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3
                        s0.5-0.1,0.7-0.3l7-7C30.1,16.3,30.1,15.7,29.7,15.3z"></path>
                      <path d="M20.3,3.1c-0.5-0.2-1.1,0.1-1.3,0.6l-8,24c-0.2,0.5,0.1,1.1,0.6,1.3c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.8-0.3,0.9-0.7l8-24
                        C21.1,3.8,20.8,3.2,20.3,3.1z"></path>
                    </g>
                  </svg>
                    AI Code Review
                </a>
                <a href="#cloud-security" className="nav-item">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.9318 6.20825C11.3815 6.20825 10.0405 7.11058 9.40807 8.42206C9.23802 8.77467 8.82537 8.93718 8.46055 8.79522C7.96981 8.60427 7.43535 8.49913 6.87455 8.49913C4.45808 8.49913 2.49915 10.4581 2.49915 12.8745C2.49915 15.291 4.45808 17.2499 6.87455 17.2499H18.5232C20.1677 17.2499 21.5008 15.9168 21.5008 14.2724C21.5008 12.6279 20.1677 11.2948 18.5232 11.2948C18.2556 11.2948 17.9974 11.3299 17.7523 11.3954C17.5121 11.4595 17.2558 11.4005 17.0678 11.2377C16.8799 11.0749 16.7848 10.8296 16.814 10.5827C16.832 10.4305 16.8413 10.2753 16.8413 10.1177C16.8413 7.95858 15.091 6.20825 12.9318 6.20825ZM8.37996 7.19396C9.34171 5.69967 11.0204 4.70825 12.9318 4.70825C15.8124 4.70825 18.167 6.9597 18.3321 9.79883C18.3955 9.79616 18.4592 9.79481 18.5232 9.79481C20.9961 9.79481 23.0008 11.7995 23.0008 14.2724C23.0008 16.7453 20.9961 18.7499 18.5232 18.7499H6.87455C3.62965 18.7499 0.999146 16.1194 0.999146 12.8745C0.999146 9.62964 3.62965 6.99913 6.87455 6.99913C7.39421 6.99913 7.89893 7.06678 8.37996 7.19396Z" fill="#000000"></path>
                    </svg>
                    Cloud Security
                </a>
                <a href="#how-to-use" className="nav-item">
                    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M21,22 L6,22 C4.34314575,22 3,20.6568542 3,19 L3,5 C3,3.34314575 4.34314575,2 6,2 L21,2 L20.9999995,18 C20.4477153,18 20,18.4477153 20,19 C20,19.5522847 20.4477153,20 21,20 L21,22 Z M18,19 C18,18.6493646 18.0601542,18.3127789 18.1707057,18 L6,18 C5.44771525,18 5,18.4477153 5,19 C5,19.5522847 5.44771525,20 6,20 L18.1707057,20 C18.0601542,19.6872211 18,19.3506354 18,19 Z M19,4 L6,4 C5.44771525,4 5,4.44771525 5,5 L5,16.1707057 C5.31277893,16.0601542 5.64936458,16 6,16 L19,16 L19,4 Z"></path>
                    </svg>
                    How to Use
                </a>
                <a href="#settings" className="nav-item">
                  <svg width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-q</title><path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z" ></path></svg>
                  Settings
                </a>
            </nav>

            {/* Support Section */}
            <div className={`support-section ${isSidebarVisible ? "visible" : "hidden"}`}>
            <a href="#support" className="nav-item">
              <svg width="128" height="128" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="style=linear"><g id="call">
                <path id="vector" d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10"></path></g></g>
              </svg>
              Support
            </a>
                
                
                <a href="/" className="nav-item" onClick={()=>navigate('/')}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </a>


            </div>
        </div>
    );
};

export default Sidebar;
