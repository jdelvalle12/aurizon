import React, { useEffect, useState } from 'react';
import '../index.css';
import '../App.css';

const Home = () => {
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    setShowSlogan(true);

    const typingText = 'Your gateway to extraordinary solutions';
    const typingSpeed = 50; // Speed in milliseconds between each character

    const typingContainer = document.getElementById('typing-text');
    let charIndex = 0;

    function typeText() {
      if (charIndex < typingText.length) {
        typingContainer.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      }
    }

    typeText();
  }, []);

  return (
    <div className="home-content">
      <h1 className={showSlogan ? 'fade-in' : ''}>"Aeon Innovations, Illuminating Tomorrow"</h1>
      <h2>
        <span id="typing-text"></span>
      </h2>
      <p className={showSlogan ? 'slide-in' : ''}>
        At Aurizon, we build technology that helps businesses succeed and develop intuitive and user-friendly products
        to simplify everyday tasks.
      </p>
    </div>
  );
};

export default Home;