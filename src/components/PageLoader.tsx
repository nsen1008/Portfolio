import React, { useState, useEffect } from 'react';

export const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [rendered, setRendered] = useState(true);

  useEffect(() => {
    // Only runs once on initial page load / browser refresh (F5)
    const fadeTimer = setTimeout(() => {
      setVisible(false);
    }, 850);

    const unmountTimer = setTimeout(() => {
      setRendered(false);
    }, 1300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []); // Empty dependency array ensures it does NOT trigger on route changes

  if (!rendered) return null;

  return (
    <div
      className={`page-loader-wrapper ${!visible ? 'hidden-loader' : ''}`}
      aria-label="Loading..."
      role="status"
    >
      <div className="loader" />
    </div>
  );
};
