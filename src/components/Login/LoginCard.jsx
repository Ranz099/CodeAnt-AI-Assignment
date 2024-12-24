import React from 'react';
import './LoginCard.css';

const LoginCard = ({ stats }) => {
  return (
    <div className="login-card">
      {/* Header Section */}
      <div className="card-header">
        <img src="https://img.icons8.com/ios-filled/50/ant-head.png" alt="AI to Detect & Autofix Bad Code" />
        <h3>AI to Detect & Autofix Bad Code</h3>
      </div>

      {/* Stats Grid */}
      <div className="card-stats">
        <div className="stat-item">
          <h4>{stats.languages}</h4>
          <p>Language Support</p>
        </div>
        <div className="stat-item">
          <h4>{stats.developers}</h4>
          <p>Developers</p>
        </div>
        <div className="stat-item">
          <h4>{stats.hoursSaved}</h4>
          <p>Hours Saved</p>
        </div>
      </div>

      {/* Issues Fixed Section */}
      <div className="card-footer">
        <div className="issues-fixed">
          <div className="chart-icon">
            <img src="https://img.icons8.com/?size=100&id=59863&format=png&color=7950F2" alt="Chart Icon" />
          </div>
          <div>
            <h4>{stats.issuesFixed}</h4>
            <p>Issues Fixed</p>
          </div>
        </div>
        <div className="trend-indicator">   
          <div className="trend-percentage">↑ 14%</div>
          <div className="trend-label"> This week</div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
