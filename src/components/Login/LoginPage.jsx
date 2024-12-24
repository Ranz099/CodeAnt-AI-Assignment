import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from './LoginCard';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('SAAS');

  const handleLogin = (provider) => {
    navigate('/repositories');
  };

  // Define login options for both SAAS and Self Hosted
  const loginOptions = {
    SAAS: [
      { provider: 'github', text: 'Sign in with Github', icon: 'https://img.icons8.com/?size=100&id=106564&format=png&color=000000' },
      { provider: 'bitbucket', text: 'Sign in with Bitbucket', icon: 'https://img.icons8.com/?size=100&id=x2g9nPCwQPOn&format=png&color=000000' },
      { provider: 'azure', text: 'Sign in with Azure DevOps', icon: 'https://img.icons8.com/?size=100&id=S4wbdK79E23a&format=png&color=000000' },
      { provider: 'gitlab', text: 'Sign in with GitLab', icon: 'https://img.icons8.com/?size=100&id=34886&format=png&color=000000' },
    ],
    'Self Hosted': [
      { provider: 'gitlab', text: 'Self Hosted GitLab', icon: 'https://img.icons8.com/?size=100&id=34886&format=png&color=000000' },
      { provider: 'sso', text: 'Sign in with SSO', icon: 'https://img.icons8.com/?size=100&id=SHkP5vEgSE6z&format=png&color=000000' },
    ],
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <LoginCard
          stats={{
            languages: '30+',
            developers: '10K+',
            issuesFixed: '500K+',
            happyUsers: '100K+',
            hoursSaved: '100K+',
          }}
        />
      </div>

      <div className="login-right">
        <div className="login-wrapper">
          {/* <img src="/codeant-logo.svg" alt="CodeAnt AI" className="login-logo" /> */}
          <h4 className="abc">CodeAnt AI</h4>
          <h1>Welcome to CodeAnt AI</h1>

          <div className="hosting-options">
            <button
              className={`hosting-btn ${activeTab === 'SAAS' ? 'active' : ''}`}
              onClick={() => setActiveTab('SAAS')}
            >
              SAAS
            </button>
            <button
              className={`hosting-btn ${activeTab === 'Self Hosted' ? 'active' : ''}`}
              onClick={() => setActiveTab('Self Hosted')}
            >
              Self Hosted
            </button>
          </div>

          <div className="login-options">
            {loginOptions[activeTab].map((option) => (
              <button
                key={option.provider}
                onClick={() => handleLogin(option.provider)}
                className={`login-btn ${option.provider}`}
              >
                <img src={option.icon} alt={option.text} />
                <span>{option.text}</span>
                {/* {option.text} */}
              </button>
            ))}
          </div>

          <p className="privacy-notice">
            By signing up you agree to the <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
