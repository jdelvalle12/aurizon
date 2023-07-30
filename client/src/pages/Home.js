import React, { useEffect, useState } from 'react';
import '../index.css';
import '../App.css';

const Home = () => {
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    setShowSlogan(true);
  }, []);

  return (
    <div className="home-content">
      {/* Add the "fade-in" class if showSlogan is true */}
      <h1 className={showSlogan ? 'fade-in' : ''}>"Aeon Innovations, Illuminating Tomorrow"</h1>
      <h2>Your gateway to extraordinary solutions</h2>
    </div>
  );
};

export default Home;








