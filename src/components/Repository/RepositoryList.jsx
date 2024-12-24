import React from 'react';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () => {
    const repositories = [
        {
            name: 'design-system',
            language: 'React',
            size: '7320 KB',
            visibility: 'Public',
            updatedAt: '1 day ago'
        },
        {
            name: 'codeant-ci-app',
            language: 'Javascript',
            size: '5871 KB',
            visibility: 'Private',
            updatedAt: '2 days ago'
        },
        {
            name: 'analytics-dashboard',
            language: 'Python',
            size: '4521 KB',
            visibility: 'Private',
            updatedAt: '5 days ago'
        },
        {
            name: 'mobile-app',
            language: 'Swift',
            size: '3096 KB',
            visibility: 'Public',
            updatedAt: '3 days ago'
        },
        {
            name: 'e-commerce-platform',
            language: 'Java',
            size: '6210 KB',
            visibility: 'Private',
            updatedAt: '6 days ago'
        },
        {
            name: 'blog-website',
            language: 'HTML/CSS',
            size: '1876 KB',
            visibility: 'Public',
            updatedAt: '4 days ago'
        },
        {
            name: 'social-network',
            language: 'PHP',
            size: '5432 KB',
            visibility: 'Private',
            updatedAt: '7 days ago'
        }
    ];
    

  return (
    <div className="repository-container">
      <div className="repository-header">
        <h2>Repositories</h2>
        <span className="repo-count">33 total repositories</span>
        <button className="add-repo-btn"> + Add Repository</button>
      </div>
      
      <div className="repository-list">
        {repositories.map((repo) => (
          <RepositoryItem key={repo.name} repository={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;