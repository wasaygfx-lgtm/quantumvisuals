"use client";
import React, { useEffect, useState } from 'react';

const Starfield = () => {
  const [stars, setStars] = useState<{ size: string; style: React.CSSProperties }[]>([]);
  const [starsSm, setStarsSm] = useState<{ size: string; style: React.CSSProperties }[]>([]);
  const [starsMd, setStarsMd] = useState<{ size: string; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const generateStars = (count: number, size: string) => {
      const newStars = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 2000;
        newStars.push({
          size,
          style: {
            left: `${x}%`,
            top: `${y}px`,
            width: size,
            height: size,
            backgroundColor: 'white',
            borderRadius: '50%',
            position: 'absolute',
          },
        });
      }
      return newStars;
    };
    
    setStars(generateStars(700, '1px'));
    setStarsSm(generateStars(200, '2px'));
    setStarsMd(generateStars(100, '3px'));

  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-2]">
      <div className="stars">
        {stars.map((star, i) => (
          <div key={`star-${i}`} style={star.style} />
        ))}
      </div>
      <div className="stars-sm">
        {starsSm.map((star, i) => (
          <div key={`star-sm-${i}`} style={star.style} />
        ))}
      </div>
      <div className="stars-md">
        {starsMd.map((star, i) => (
          <div key={`star-md-${i}`} style={star.style} />
        ))}
      </div>
    </div>
  );
};

export default Starfield;
