// src/components/CursorFollower.jsx (or wherever you prefer components)
import React, { useState, useEffect, useCallback } from 'react';

const CursorFollower = () => {
  // State to store the position of the heart
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Initialize off-screen

  // Memoize the handleMouseMove function
  const handleMouseMove = useCallback((e) => {
    // Update the position state with the current mouse coordinates
    // We add a small offset (e.g., +10px) to make it trail slightly
    setPosition({ x: e.pageX + -5, y: e.pageY + 0 });
  }, []);

  useEffect(() => {
    // Add event listener to the document when the component mounts
    document.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]); // Dependency array includes handleMouseMove

  return (
    <div
      className="cursor-follower" // Apply a custom CSS class for styling
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      ❤️ {/* Your heart emoji */}
      {/* Or if using an image: <img src="/images/heart-icon.svg" alt="heart" className="w-6 h-6" /> */}
    </div>
  );
};

export default CursorFollower;