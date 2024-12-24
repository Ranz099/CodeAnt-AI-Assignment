import React from 'react';

const RepositoryItem = ({ repository }) => {
  const getLanguageIcon = (language) => {
    const icons = {
      'React': '⚛️',
      'Python': '🐍',
      'JavaScript': '📜',
      'Java': '☕',
      'Swift': '🚀',
      'HTML/CSS': '🌐'
    };
    return icons[language] || '📁';
  };

  return (
    <div className="repository-item">
      <div className="repo-header">
        <div className="repo-name-container">
          <span className="language-icon">{getLanguageIcon(repository.language)}</span>
          <h3 className="repo-name">{repository.name}</h3>
          <span className="visibility-badge">{repository.visibility}</span>
        </div>
        <div className="repo-size">{repository.size}</div>
      </div>
      
      <div className="repo-info">
        <span className="repo-language">{repository.language}</span>
        <span className="repo-updated">Updated {repository.updatedAt}</span>
      </div>
    </div>
  );
};

export default RepositoryItem;