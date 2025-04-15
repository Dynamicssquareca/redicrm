// components/Skeleton.js
import React from 'react';

export default function Skeleton({ variant = 'default', count = 1 }) {
  if (variant === 'blogIndex') {
    return (
      <div className="container">
        <div className="row">
          {[...Array(count)].map((_, idx) => (
            <div key={idx} className="col-lg-4 mb-4">
              <div className="skeleton-item">
                <div className="skeleton-image"></div>
                <div className="skeleton-title"></div>
                <div className="skeleton-excerpt"></div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .skeleton-image {
            width: 100%;
            height: 200px;
            background: #e0e0e0;
            border-radius: 4px;
            animation: pulse 1.5s infinite;
          }
          .skeleton-title {
            width: 60%;
            height: 32px;
            background: #e0e0e0;
            border-radius: 4px;
            margin-top: 10px;
            animation: pulse 1.5s infinite;
          }
          .skeleton-excerpt {
            width: 90%;
            height: 20px;
            background: #e0e0e0;
            border-radius: 4px;
            margin-top: 6px;
            animation: pulse 1.5s infinite;
          }
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  if (variant === 'blogDetail') {
    return (
      <div className="skeleton">
        <div className="skeleton-title"></div>
        <div className="skeleton-image"></div>
        <div className="skeleton-paragraph"></div>
        <div className="skeleton-paragraph short"></div>
        <style jsx>{`
          .skeleton {
            padding: 20px;
          }
          .skeleton-title {
            width: 60%;
            height: 32px;
            background: #e0e0e0;
            margin-bottom: 20px;
            border-radius: 4px;
            animation: pulse 1.5s infinite ease-in-out;
          }
          .skeleton-image {
            width: 100%;
            height: 400px;
            background: #e0e0e0;
            margin-bottom: 20px;
            border-radius: 4px;
            animation: pulse 1.5s infinite ease-in-out;
          }
          .skeleton-paragraph {
            width: 100%;
            height: 16px;
            background: #e0e0e0;
            margin-bottom: 10px;
            border-radius: 4px;
            animation: pulse 1.5s infinite ease-in-out;
          }
          .skeleton-paragraph.short {
            width: 80%;
          }
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // Default fallback if no variant matches
  return <div>Loading...</div>;
}
