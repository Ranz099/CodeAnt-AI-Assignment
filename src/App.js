// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import RepositoryList from './components/Repository/RepositoryList';
import MainLayout from './layouts/MainLayout';
// import './styles/login.css';
import './styles/repository.css';
// import './styles/header.css';
import './styles/repository-item.css';
// import './styles/login-card.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/repositories" element={
          <MainLayout>
            <RepositoryList />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
